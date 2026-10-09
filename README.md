# MiracleHarness 官网（miracleharness.com）

“Agent 科研自动工作台 · MiracleHarness”（英文 Agent Research Workbench · MiracleHarness）的中英双语官网：产品介绍、科研全流程、Agent 接入方式、诚实的当前状态、许可与商业授权说明、Windows 发行包下载入口，以及带防滥用与管理接口的公开留言板。

- 产品仓库：<https://github.com/tmdysx/agent-research-workbench>
- Windows 发行包（固定直链，指向最新 Release 的附件）：<https://github.com/tmdysx/agent-research-workbench/releases/latest/download/MiracleHarness2.zip>
- 产品许可：原创部分 PolyForm Noncommercial 1.0.0，非商用免费；商用（含商业研究）需作者书面授权，联系 3129746403@qq.com。源码公开但不是 OSI 开源；第三方部分保持各自许可。以产品仓库里的 `LICENSE`、`NOTICE` 和 `第三方许可证.md` 为准。
- 本站代码采用 [MIT License](LICENSE)；品牌名、凤凰标志和插画不随 MIT 自动授权，见 [品牌政策](TRADEMARKS.md) 与 [Notice](NOTICE.md)。

## 架构

这是一个 Cloudflare Worker 全栈站点：

- Static Assets 托管单页首页、样式、脚本与图片（全部在站内 `assets/`，CSP 只允许 `'self'`）。
- Worker 提供 `/api/*`、安全响应头、`www` → 裸域名的 308 重定向，以及旧模块页 `/modules`、`/modules/*` → `/` 的 301 重定向。
- D1 保存公开留言与小时限频计数。
- Turnstile 使用显式渲染；服务端强制调用 Siteverify，并校验 `success`、`action` 与 `hostname`。

```
miracle-harness-site/
├── index.html                  # 中文默认、可切换英文的单页产品介绍
├── styles.css                  # 设计变量 + 玉青 / 青铜金点缀
├── app.js                      # I18N 字典、留言板与显式 Turnstile
├── assets/
│   ├── brand/                  # 凤凰标志小图（favicon/logo）与 Open Graph 封面
│   └── concepts/               # 由产品仓库 品牌/ 转换的 WebP 概念插画（AI 生成，非界面截图）
├── src/index.ts                # Worker、API、安全头、canonical 与旧页面重定向
├── migrations/0001_guestbook.sql
├── archive/v1/                 # 第一版官网（2026-08）原样存档，发布到 /v1/
├── scripts/build.mjs           # 只按白名单复制公开文件到 dist/
├── test/                       # Worker/D1/Turnstile/API 与静态安全测试
├── .github/workflows/deploy.yml  # 检查（发布由 Cloudflare Workers Builds 完成）
├── wrangler.jsonc
└── package.json
```

`dist/` 的顶层公开面严格限制为 `index.html`、`styles.css`、`app.js`、`assets/` 与 `v1/`（由 `archive/v1/` 复制）；构建脚本在输出不完全等于白名单时直接失败。Worker 源码、Wrangler 配置、迁移、测试、README 与本地密钥不会成为静态资产。

## 文案原则

- 所有对外文案只写已核实的产品事实：Windows 优先、早期版本、平台本身不调用模型、“员工”自动运行只支持本机 Codex CLI、一键接入未做、真实科研任务与第二台电脑安装未验证等，都必须如实保留。
- 不称产品“开源”；写“源码公开、非商用免费、商用需书面授权”。
- `assets/concepts/` 的图片是 AI 生成的概念插画，页面上必须标明“非截图”。以后有真实界面截图再替换。
- 新增文案一律加 `data-i18n`（或 `data-i18n-alt` / `data-i18n-placeholder` / `data-i18n-aria`），并在 `app.js` 的 `I18N.zh` 与 `I18N.en` 中同时加 key；静态测试会检查两边 key 完全一致且覆盖页面所有 key。

## 本地开发

需要 Node.js 22+。本地测试使用 Cloudflare 官方 dummy keys；生产配置会主动拒绝这些 dummy keys。官方 dummy Siteverify 响应不会携带真实 widget 的 action/hostname，因此仅在 `ENVIRONMENT` 不是 `production` 且 sitekey/secret 都属于官方 dummy 集合时，测试分支只要求 `success=true`；真实生产 key 始终强制比较 `action=guestbook_submit` 和 `hostname=miracleharness.com`。

```powershell
npm ci
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

## 自动发布（Cloudflare Workers Builds）

发布由 Cloudflare Workers Builds 完成：Worker `miracle-harness-site` 已在 Cloudflare 控制台连接本仓库，`main` 每次有新提交就自动构建并发布到 miracleharness.com。不需要在 GitHub 里保存任何 Cloudflare 密钥。

Cloudflare 构建设置（Workers & Pages → `miracle-harness-site` → Settings → Build）：

- 仓库 `tmdysx/miracle-harness-site`，生产分支 `main`。
- 构建命令 `npm run build`，部署命令 `npx wrangler deploy`。
- 只会构建连接之后推送的新提交；要重新发布当前版本，在该 Worker 的 Deployments / Builds 页手动触发一次。
- 以后新增 `migrations/` 里的 D1 迁移时，把部署命令改为 `npx wrangler d1 migrations apply miracle-harness-site-db --remote && npx wrangler deploy`，或在本机手动执行一次迁移再合并。

`.github/workflows/deploy.yml`（名为 Check）只做检查，不发布：

- 触发：`pull_request`、推送到 `main`、手动 `workflow_dispatch`。
- 运行：Node 22 → `npm ci` → `cf:typegen` → `typecheck` → `npm test` → `build` → `deploy:dry-run`（与 `npm run check` 同序）。
- `permissions: contents: read`；同一分支有新推送时取消旧的检查。

Worker 运行时 secrets（下一节）已在生产环境设置过，`wrangler deploy` 不会改动或清空它们；CI 不需要也不应该接触这些值。

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

## Cloudflare 生产配置

生产环境已经上线：Custom Domains、D1、迁移、Turnstile widget 和 Worker secrets 均已配置。仓库只保存公开 binding/资源 ID，不保存任何 secret 值。维护 secrets 时须通过可信的 Wrangler 交互式录入；不要把值写进命令参数、聊天、源码或 `vars`：

```text
TURNSTILE_SITE_KEY
TURNSTILE_SECRET
TURNSTILE_HOSTNAMES   # 生产值：miracleharness.com
IP_HASH_SALT          # 随机且至少 32 字符
ADMIN_API_TOKEN       # 随机且至少 32 字符
```

日常发布走上面的 GitHub Actions。需要手动发布时，顺序相同：

```powershell
npm run check
wrangler d1 migrations apply miracle-harness-site-db --remote
wrangler deploy
```

秘密请用 `wrangler secret put <NAME>` 的交互提示录入。Turnstile widget 可登记正式域名和本地开发域名；生产 Worker 的 hostname allowlist 仍由独立 secret 强制约束，两者不能混为一层校验。

## 域名与重定向

`wrangler.jsonc` 已声明两个 Custom Domains：

- `miracleharness.com`：唯一 canonical 站点。
- `www.miracleharness.com`：仍指向同一 Worker，但 Worker 对所有路径与查询参数做永久 `308` 重定向到裸域名。

第一版官网（2026-08，「奇迹 Harness」桌面原型）原样存档在 `/v1/`，首页「版本历程」和页脚都有入口，好让访客看到项目是怎么一版版改过来的。存档由 `d0813a1` 构建产物生成：每页顶部加「历史存档」提示条和 `noindex`，站内绝对路径改到 `/v1/` 下，旧留言板换成指向新版留言板的链接（不再连留言接口）。旧链接 `/modules` 与 `/modules/<页面>/` 由 Worker 返回 `301` 到存档里的同一页（`/v1/`、`/v1/modules/<页面>/`）。

## 发布前检查

- 产品仓库的 Release 附件名必须保持 `MiracleHarness2.zip`，否则官网固定下载链接会 404。
- 页面上的“使用说明”“LICENSE / NOTICE / 第三方许可证”链接指向产品仓库 `main` 分支；产品源码合并进 `main` 之前这些链接会 404。
- `npm run check` 全绿。
- Turnstile widget 域名和 Worker 生产 hostname allowlist 均符合当前部署策略。
- D1 远端 migration 已应用。
- `/api/config` 显示留言板 enabled；提交一次真实 token 成功，再重放同一 token 必须失败。
- 用错误管理员 Bearer token 验证接口只返回 404。

## 官方依据

- Workers Best Practices：<https://developers.cloudflare.com/workers/best-practices/workers-best-practices/>
- Workers Static Assets：<https://developers.cloudflare.com/workers/static-assets/binding/>
- D1 migrations：<https://developers.cloudflare.com/d1/reference/migrations/>
- Turnstile 服务端验证：<https://developers.cloudflare.com/turnstile/get-started/server-side-validation/>
- Turnstile 官方 dummy keys：<https://developers.cloudflare.com/turnstile/troubleshooting/testing/>
- Workers Custom Domains：<https://developers.cloudflare.com/workers/configuration/routing/custom-domains/>
- GitHub Actions 部署 Workers：<https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/>
