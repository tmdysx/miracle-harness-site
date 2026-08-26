# 奇迹 Harness 官网（miracleharness.com）

奇迹 Harness 初代官网：中英双语的模块广场、十三个 S1 模块设计页、Windows Alpha 固定下载入口、GitHub 源码入口，以及带防滥用与管理接口的公开留言板。

- 源码：<https://github.com/tmdysx/miracle-harness>
- Windows x64 Alpha：<https://github.com/tmdysx/miracle-harness/releases/latest/download/Miracle-Harness-v0.1.0-alpha.1-win-x64.zip>
- 站点代码采用 [MIT License](LICENSE)；品牌名、神鸟图标和插画不随
  MIT 自动授权，使用边界见 [品牌政策](TRADEMARKS.md) 与
  [Notice](NOTICE.md)。桌面产品以其仓库中的许可与第三方声明为准。

## 架构

这是一个 Cloudflare Worker 全栈站点：

- Static Assets 托管首页、十三个构建生成的 `/modules/<slug>/` 设计页、样式、脚本与插画。
- Worker 提供 `/api/*`、安全响应头和 `www` → 裸域名的 308 重定向。
- D1 保存公开留言与小时限频计数。
- Turnstile 使用显式渲染；服务端强制调用 Siteverify，并校验 `success`、`action` 与 `hostname`。

```
miracle-harness-site/
├── index.html                  # 中文默认、可切换英文的产品页
├── styles.css                  # 深紫框、四季色、世界树/金字塔视觉
├── app.js                      # I18N、模块搜索/筛选、留言板与显式 Turnstile
├── assets/                     # 品牌图标与现有神话主题插图
├── src/index.ts                # Worker、API、安全头与 canonical 重定向
├── migrations/0001_guestbook.sql
├── scripts/module-catalog.mjs  # 十三模块的公开设计事实与页面模板
├── scripts/build.mjs           # 白名单复制资产并生成十三模块页
├── test/                       # Worker/D1/Turnstile/API 与静态安全测试
├── wrangler.jsonc
└── package.json
```

`dist/` 的顶层公开面严格限制为 `index.html`、`styles.css`、`app.js`、`assets/` 与 `modules/`。Worker 源码、Wrangler 配置、迁移、测试、README 与本地密钥不会成为静态资产；`modules/` 也只允许十三个已登记 slug 和各自的 `index.html`。

## 十三模块页面

首页把中控台（S0）与 Agent 会议作为跨域工作面单独说明；它们不冒充第十四、十五个 S1 模块。十三个模块按施工治理、空间与记忆、Agent 生态、人类学习分组。每个详情页都明确写出：

- 职责与明确不负责的边界。
- 输入、输出与核心对象。
- S/B/T 层级和 LOD 缩放规则。
- 春、夏、秋、冬四季行为。
- 上下游依赖、当前事实、候选蓝图、长期愿景、下一阶段与验收条件。

模块文案的单一维护入口是 `scripts/module-catalog.mjs`，避免首页宣传、公开构想和详情页互相漂移。状态措辞必须保持诚实：已实现、窄基础、只读投影、候选蓝图与长期愿景不能混写。

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

## Cloudflare 生产状态与再部署

生产环境已经上线：Custom Domains、D1、迁移、Turnstile widget 和 Worker secrets 均已配置。仓库只保存公开 binding/资源 ID，不保存任何 secret 值。后续维护仍须通过可信的 Wrangler 可执行文件交互式设置下列 secrets；不要把值写进命令参数、聊天、源码或 `vars`：

```text
TURNSTILE_SITE_KEY
TURNSTILE_SECRET
TURNSTILE_HOSTNAMES   # 生产值：miracleharness.com
IP_HASH_SALT          # 随机且至少 32 字符
ADMIN_API_TOKEN       # 随机且至少 32 字符
```

发布结构或 API 变更时，先完成远端 migration、全量检查与 dry-run，再部署：

```powershell
wrangler d1 migrations apply miracle-harness-site-db --remote
npm run build
wrangler deploy --dry-run
wrangler deploy
```

秘密请用 `wrangler secret put <NAME>` 的交互提示录入，不要通过 `echo`、命令参数或项目内脚本传递。Turnstile widget 可登记正式域名和本地开发域名；生产 Worker 的 hostname allowlist 仍由独立 secret 强制约束，两者不能混为一层校验。

## 域名与 www 策略

`wrangler.jsonc` 已声明两个 Custom Domains：

- `miracleharness.com`：唯一 canonical 站点。
- `www.miracleharness.com`：仍指向同一 Worker，但 Worker 对所有路径与查询参数做永久 `308` 重定向到裸域名。

这要求域名的 Cloudflare zone 处于激活状态。Custom Domain 会由 Cloudflare 创建相应 DNS 记录与证书；不要同时保留指向其他源站的同名 A/AAAA/CNAME。实际账号授权、DNS 变更、D1 创建、secret 写入和部署必须由明确的发布步骤完成。

## 发布前检查

- GitHub Release 必须已上传文件名完全一致的 `Miracle-Harness-v0.1.0-alpha.1-win-x64.zip`，否则官网固定下载链接会 404。
- `npm run check` 全绿。
- Turnstile widget 域名和 Worker 生产 hostname allowlist 均符合当前部署策略。
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
