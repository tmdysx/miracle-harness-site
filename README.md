# 奇迹 Harness 官网（miracleharness.com）

奇迹 Harness 初代官网：中英双语产品页、Windows Alpha 固定下载入口、GitHub 源码入口，以及带防滥用与管理接口的公开留言板。

- 源码：<https://github.com/tmdysx/miracle-harness>
- Windows x64 Alpha：<https://github.com/tmdysx/miracle-harness/releases/latest/download/Miracle-Harness-v0.1.0-alpha.1-win-x64.zip>
- 站点代码采用 [MIT License](LICENSE)；品牌名、神鸟图标和插画不随
  MIT 自动授权，使用边界见 [品牌政策](TRADEMARKS.md) 与
  [Notice](NOTICE.md)。桌面产品以其仓库中的许可与第三方声明为准。

## 架构

这是一个 Cloudflare Worker 全栈站点：

- Static Assets 托管 `index.html`、`styles.css`、`app.js` 与 `assets/`。
- Worker 提供 `/api/*`、安全响应头和 `www` → 裸域名的 308 重定向。
- D1 保存公开留言与小时限频计数。
- Turnstile 使用显式渲染；服务端强制调用 Siteverify，并校验 `success`、`action` 与 `hostname`。

```
miracle-harness-site/
├── index.html                  # 中文默认、可切换英文的产品页
├── styles.css                  # 深紫框、四季色、世界树/金字塔视觉
├── app.js                      # I18N、下载入口、留言板与显式 Turnstile
├── assets/                     # 品牌图标与现有神话主题插图
├── src/index.ts                # Worker、API、安全头与 canonical 重定向
├── migrations/0001_guestbook.sql
├── scripts/build.mjs           # 仅复制四类公开资产到 dist
├── test/                       # Worker/D1/Turnstile/API 与静态安全测试
├── wrangler.jsonc
└── package.json
```

`dist/` 的公开面严格限制为 `index.html`、`styles.css`、`app.js`、`assets/`。Worker 源码、Wrangler 配置、迁移、测试、README 与本地密钥不会成为静态资产。

## 本地开发

需要 Node.js 22+。本地测试使用 Cloudflare 官方 dummy keys；生产配置会主动拒绝这些 dummy keys。官方 dummy Siteverify 响应不会携带真实 widget 的 action/hostname，因此仅在 `ENVIRONMENT` 不是 `production` 且 sitekey/secret 都属于官方 dummy 集合时，测试分支只要求 `success=true`；真实生产 key 始终强制比较 `action=guestbook_submit` 和 `hostname=miracleharness.com`。

```powershell
Set-Location D:\MiracleHarness\miracle-harness-site
npm install
Copy-Item .dev.vars.example .dev.vars
npm run cf:typegen
npm run db:migrate:local
npm run dev
```

打开 Wrangler 输出的本地地址。`.dev.vars` 已被 `.gitignore` 排除；不要提交它。

完整校验：

```powershell
npm run check
```

这会依次生成绑定类型、运行严格 TypeScript 检查、执行 Worker 与静态安全测试、构建公开资产，并完成 Wrangler dry-run。

## 留言板 API

公开接口：

- `GET /api/health`：健康状态。
- `GET /api/config`：只返回公开 Turnstile sitekey 与 action；永不返回 secret。
- `GET /api/guestbook`：返回最近 24 条 `visible` 留言。
- `POST /api/guestbook`：接收 JSON：

```json
{
  "displayName": "称呼（1–32 字）",
  "message": "留言（1–500 字）",
  "turnstileToken": "客户端本次生成的单次 token"
}
```

服务端在保存前完成字段/内容类型/8 KiB 请求体检查、同源检查、Turnstile Siteverify 和每小时限频。动态留言只由浏览器通过 `textContent` 构建，禁止用 HTML 注入 DOM。

管理接口不会出现在前台 UI：

- `PATCH /api/admin/messages/:id`，JSON `{ "hidden": true }`（也可传 `false` 恢复）。
- `DELETE /api/admin/messages/:id`。
- 两者都要求 `Authorization: Bearer <ADMIN_API_TOKEN>`；比较采用定长 SHA-256 + timing-safe equal，未授权统一返回 404，响应和日志均不泄露 token。

## 隐私与限频

- 原始 IP 不写入 D1、响应或日志。
- 限频键是 `SHA-256(IP_HASH_SALT + ":" + IP)` 的十六进制结果。
- 同一哈希每个整点小时窗口最多成功写入 3 条。
- 留言表本身不保存 IP 哈希；哈希只存在限频表，过期窗口由 Worker 清理。
- `IP_HASH_SALT` 至少 32 字符并作为生产 secret 保存。

## Cloudflare 生产准备（不要跳过）

当前 `wrangler.jsonc` 中的 D1 `database_id` 是不可部署的占位 UUID。首次部署前：

1. 确保 `miracleharness.com` 已作为活动 zone 接入同一个 Cloudflare 账号。
2. 用 Wrangler v4 创建 `miracle-harness-site-db`，把返回 UUID 写入 `wrangler.jsonc`。
3. 在 Turnstile 控制台创建 production widget，仅允许 `miracleharness.com`。本地测试继续使用独立 dummy keys，不把 `localhost` 加入生产 hostname allowlist。
4. 通过可信的独立 Wrangler 可执行文件交互式设置以下 secrets；不要把值写进命令参数、聊天、源码或 `vars`：

```text
TURNSTILE_SITE_KEY
TURNSTILE_SECRET
TURNSTILE_HOSTNAMES   # 生产值：miracleharness.com
IP_HASH_SALT          # 随机且至少 32 字符
ADMIN_API_TOKEN       # 随机且至少 32 字符
```

5. 远端应用 D1 migration，再 dry-run，最后才部署：

```powershell
wrangler d1 migrations apply miracle-harness-site-db --remote
npm run build
wrangler deploy --dry-run
wrangler deploy
```

秘密请用 `wrangler secret put <NAME>` 的交互提示录入，不要通过 `echo`、命令参数或项目内脚本传递。

## 域名与 www 策略

`wrangler.jsonc` 已声明两个 Custom Domains：

- `miracleharness.com`：唯一 canonical 站点。
- `www.miracleharness.com`：仍指向同一 Worker，但 Worker 对所有路径与查询参数做永久 `308` 重定向到裸域名。

这要求域名的 Cloudflare zone 处于激活状态。Custom Domain 会由 Cloudflare 创建相应 DNS 记录与证书；不要同时保留指向其他源站的同名 A/AAAA/CNAME。实际账号授权、DNS 变更、D1 创建、secret 写入和部署必须由明确的发布步骤完成。

## 发布前检查

- GitHub Release 必须已上传文件名完全一致的 `Miracle-Harness-v0.1.0-alpha.1-win-x64.zip`，否则官网固定下载链接会 404。
- `npm run check` 全绿。
- 生产 Turnstile widget 的 hostname 只含 `miracleharness.com`。
- D1 远端 migration 已应用。
- `/api/config` 显示留言板 enabled；提交一次真实 token 成功，再重放同一 token 必须失败。
- 用错误管理员 Bearer token 验证接口只返回 404。

## 官方依据

- Cloudflare Agent Setup：<https://developers.cloudflare.com/agent-setup/prompt.md>
- Workers Best Practices：<https://developers.cloudflare.com/workers/best-practices/workers-best-practices/>
- Workers Static Assets：<https://developers.cloudflare.com/workers/static-assets/binding/>
- D1 migrations：<https://developers.cloudflare.com/d1/reference/migrations/>
- Turnstile 服务端验证：<https://developers.cloudflare.com/turnstile/get-started/server-side-validation/>
- Turnstile 官方 dummy keys：<https://developers.cloudflare.com/turnstile/troubleshooting/testing/>
- Workers Custom Domains：<https://developers.cloudflare.com/workers/configuration/routing/custom-domains/>
