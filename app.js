/* ===== Agent 科研自动工作台 · MiracleHarness 官网 · 双语切换 ===== */

const I18N = {
  zh: {
    "meta.title": "Agent 科研自动工作台 · MiracleHarness",
    "aria.home": "MiracleHarness 首页",
    "alt.brand": "MiracleHarness 金绿凤凰标志",
    "brand.name": "MiracleHarness",
    "aria.mainNav": "主导航",
    "nav.features": "能力",
    "nav.workflow": "科研流程",
    "nav.agents": "接入 Agent",
    "nav.status": "当前状态",
    "nav.license": "许可",
    "nav.guestbook": "留言",
    "nav.github": "GitHub",
    "nav.cta": "下载",
    "nav.download": "下载",

    "hero.eyebrow": "AGENT RESEARCH WORKBENCH · 早期版本",
    "hero.title1": "Agent 科研自动工作台",
    "hero.title2": "MiracleHarness",
    "hero.tag": "人定方向，agent 做事。",
    "hero.sub": "一个在你自己电脑上运行的科研工作台：目标、需求、计划、规则和交付都存成本地普通文件，你自己选的 agent 照着干活。贯通想法、文献、实验、论文与成果展示，也能用于小说、宣传片和其他 DIY 长程项目。",
    "hero.cta1": "下载 Windows 版 ZIP",
    "hero.cta2": "GitHub 仓库",
    "hero.cta3": "使用说明",
    "hero.badge1": "MiracleHarness2 · 2026-10-07",
    "hero.badge2": "Windows 优先 · Python 3.12",
    "hero.badge3": "平台不需要模型 API Key",
    "hero.badge4": "源码公开 · 非商用免费",
    "hero.note": "早期版本：核心还没固化，没有 1.0 和安装包；真实科研任务和第二台电脑安装还没验证过。请先用在可以恢复的项目上。",
    "hero.imageNote": "AI 生成概念插画 · 非截图",
    "alt.hero": "AI 生成的概念插画：白玉圆台上一棵玉质大树，金线枝条托着齿轮、烧瓶和分子三个玻璃球",

    "aria.facts": "一句话事实",
    "fact1.title": "本地运行",
    "fact1.desc": "后台只监听 127.0.0.1，网页在你自己的浏览器里打开。",
    "fact2.title": "普通文件",
    "fact2.desc": "目标、计划、戒律和交付都是能直接打开的文件，换 agent 也能接手。",
    "fact3.title": "自带 Agent",
    "fact3.desc": "任何能读文件的 agent 都能照 AGENTS.md 干活，账号和费用自理。",
    "fact4.title": "73 个 MCP 工具",
    "fact4.desc": "可选的本地 research-console 服务：报到、领活、交付、存档、向人提问。",
    "fact5.title": "9 个中文科研技能",
    "fact5.desc": "1 个路线入口加 8 个阶段技能，配各模块的方法卡。",

    "features.eyebrow": "WHAT IT DOES",
    "features.title": "让长程项目一直看得懂、管得住",
    "features.lead": "平台本身不调用模型，也不替 agent 干活。它负责三件事：人看得懂项目，想法记下来变成准确的指令，项目走多久都不失控。",
    "f1.title": "多 Agent 接入，平台不需要模型 API Key",
    "f1.desc": "任何能读文件的 agent 都先读 AGENTS.md 再开工。可选的本地 stdio MCP 服务 research-console 提供 73 个工具。平台本身不调用模型，agent 的账号和费用由你自己决定。",
    "f2.title": "蓝图治理：目标、需求、计划、戒律、交付",
    "f2.desc": "S0 总目标 → S1 → S2 任务，需求写明验收标准；计划按 P 号存档；戒律分通用、项目、模块三层；交付单 J、交接单 H 都是普通文件。网页和 MCP 读写同一份文件，用版本号防止互相覆盖。",
    "f3.title": "自动化面板、员工分配与流程编辑",
    "f3.desc": "项目 → 目标 → 任务关系图、四列任务看板、agent 名册、员工分配图、可保存/校验/演练/启用的流程编辑器，以及 7 条监管规则。检查全部通过才自动验收。全自动开工必须由人打开，目前只能驱动本机 Codex CLI。",
    "f4.title": "存档、世界树与回收站",
    "f4.desc": "每过一关存一档，相同内容只存一份，可以对比、复活或整份回去。可以从任意一档长出世界树分支，再用三方合并合回主干。删除先进回收站，可以还原。",
    "f5.title": "文献阅读与内容工作台",
    "f5.desc": "文献库用 L 编号把原文和解读一一对应；PDF 阅读页可以高亮、贴纸、画笔批注，选中原句记笔记或问 agent。网页内直接预览压缩包、音视频、Excel、Word 和 PPT 文字。",
    "f6.title": "代码地图与编程工作台",
    "f6.desc": "把整个项目铺成能缩放的方块图，远看是按语法上色的细线，拉近能读代码，并有重要性金字塔。编程工作台把任务、需求、戒律、已批准计划和技能整理成一份只读工作包，可以复制给 agent。",

    "workflow.eyebrow": "RESEARCH ROUTE",
    "workflow.title": "科研全流程：从选题到返修，每一步都留下文件",
    "workflow.lead": "科研是主入口。路线卡先判断你做到哪一步，再按阶段技能和方法卡往下推进；不适用的阶段可以跳过并写明理由，已有的工作不必从头重做。",
    "s0.title": "科研路线（总入口）",
    "s0.desc": "判断现在做到哪一步，写路线卡，排出下一件事、预算和停止条件，换 agent 也能接手。",
    "s1.title": "选题与假设",
    "s1.desc": "把兴趣或观察变成有证据边界、可反驳预测和可行性说明的选题。候选假设不能当成发现。",
    "s2.title": "文献与证据",
    "s2.desc": "写检索记录、文献比较和论断证据表，分清“来源存在”和“来源真正支持这个论断”。",
    "s3.title": "数据与实验设计",
    "s3.desc": "把论断变成实验方案：数据权限、无泄漏的划分、公平基线、评价指标和预算。",
    "s4.title": "复现与运行",
    "s4.desc": "在获准资源内复现基线、跑计算实验，保存命令、版本、原始结果和失败记录。不会租用资源。",
    "s5.title": "结果分析与图表",
    "s5.desc": "从真实结果算出可复算、可追溯的比较和图表，记录局限和负结果。不编数据。",
    "s6.title": "论文写作与引用",
    "s6.desc": "依据真实方法、结果和可定位的文献组织论文，核对引用和数值的一致性。论文工作台按九章分区。",
    "s7.title": "投稿准备",
    "s7.desc": "查目标期刊当前的官方要求，在本地做好投稿包和声明缺口清单。不登录、不上传、不付款、不自动提交。",
    "s8.title": "返修与回复",
    "s8.desc": "把审稿意见逐条对应到修改、补做的实验、正文位置和有依据的回复。保留原意见，不自动发送。",
    "s9.skill": "汇报卡 · PPT 技能",
    "s9.title": "汇报与交流",
    "s9.desc": "把问题、方法、真实结果、局限和下一步讲给听众。这一步没有专门的 research-* 技能，用汇报卡和 PPT 技能。",
    "s10.skill": "素材卡 · 配套模块",
    "s10.title": "素材与成果展示",
    "s10.desc": "记录图、表、截图的来源、权限和用途，定量图必须来自真实数据。PPT 的成果区直接列出导出的 PPTX/PDF。",
    "workflow.note": "这 9 个技能改编自 ARIS、K-Dense scientific-agent-skills 和 claude-scientific-writer，单独采用 MIT 许可；主要面向计算与机器学习研究，不能用于真实临床、动物或湿实验。模板不是科研结果；“检查全过就自动验收”只说明交付里列出的检查都通过了，不代表科研结论成立或能发表。",

    "gallery.eyebrow": "ILLUSTRATIONS",
    "gallery.title": "概念插画",
    "gallery.lead": "下面是项目文档里用的 AI 生成概念插画，用来示意各部分的用途，不是产品界面截图。仓库里目前没有真实的界面截图。",
    "gallery.badge1": "AI 生成 · 非截图",
    "gallery.badge2": "AI 生成 · 非截图",
    "gallery.badge3": "AI 生成 · 非截图",
    "alt.g1": "AI 生成的概念插画：大理石桌上两个白色金边的窗口，中间用金色握手徽章连起来",
    "g1.title": "Agent 接入",
    "g1.desc": "不同的 agent 工具共用同一份项目记录。",
    "alt.g2": "AI 生成的概念插画：玉色弧形支架托着三张叠放的幻灯片，旁边有一个水晶小金字塔",
    "g2.title": "PPT 预览插件",
    "g2.desc": "借本机 PowerPoint 或 LibreOffice 转成 PDF 后在网页里看；默认不启用。",
    "alt.g3": "AI 生成的概念插画：玉绿色半透明胶片卷和胶片条，一把金柄剪刀正在剪胶片",
    "g3.title": "素材与剪辑",
    "g3.desc": "目前只有 FFmpeg 协议和命令卡，网页剪辑器还没做。",

    "agents.eyebrow": "BRING YOUR OWN AGENT",
    "agents.title": "接入你已经在用的 Agent",
    "agents.lead": "平台本身不调用模型，也不需要模型 API Key；干活的是你自己选的 agent，账号、额度和费用自理。接入分三层：",
    "a1.title": "读文件就能干活",
    "a1.desc": "任何能读文件的 agent，先读根目录的 AGENTS.md 和“自动化科研交互界面”技能，按普通文件和协作协议做事。Claude Code 通过 CLAUDE.md 自动读到 AGENTS.md。",
    "a2.title": "可选：本地 MCP 服务",
    "a2.desc": "research-console 由 python backend/mcp_server.py 启动，提供 73 个工具，例如 register_agent、get_overview、next_task、deliver、save_checkpoint、ask_human。.mcp.json 供兼容客户端读取，其他客户端按接入指南手动配置；“一键接入”还没做。",
    "a3.title": "可选：网页“员工”自动运行",
    "a3.desc": "默认关闭。由人打开总开关后，本机 Python 运行器每轮启动一次 Codex CLI。目前只支持 Codex。",
    "agents.listTitle": "文档里写到的客户端",
    "chip.lingma": "通义灵码 Lingma",
    "chip.workbuddy": "腾讯 WorkBuddy",
    "chip.codebuddy": "腾讯 CodeBuddy",
    "chip.zcode": "智谱 ZCode",
    "chip.step": "阶跃 Step Code",
    "agents.caveat": "这份名单只说明文档里写了接入方法，并不代表每个客户端都实测连通过。项目的智能体名录另列美国 27 款、中国 19 款，能否接 MCP 也只是书面判断。DeepSeek Harness 的官方 Web UI 需要模型 API key；已登录的 agent 用的是它自己的云端模型，所以“平台不需要 Key”不等于全部离线。",

    "uses.eyebrow": "BEYOND RESEARCH",
    "uses.title": "不止科研",
    "uses.lead": "科研只是主入口。通用模板不带业务材料，你可以自己建模块，定需求、规则和流程。发行包里带的是流程模板和示例，不是成品。",
    "u1.title": "写小说",
    "u1.desc": "7 段阶段路线：立项与读者 → 世界观与人物 → 分层大纲 → 正文与状态 → 一致性与首读 → 作者批准修订 → 接手与整稿，附任务简报和章节接手。只是流程模板，路线技能没有内置。",
    "u2.title": "宣传片与视频",
    "u2.desc": "工作台分“素材”和“成果”两区；剪辑插件让 agent 按 FFmpeg 命令卡截段、拼接、加字幕。网页剪辑器还没做，宣传片的阶段技能这个发行包没有带。",
    "u3.title": "PPT 演示",
    "u3.desc": "素材和成果展示两区。PPT 技能按受众 → 逐页计划 → 可编辑制作 → 检查 → 交付来做，导出的 PPTX/PDF 直接列在成果区。",
    "u4.title": "写论文",
    "u4.desc": "不走科研全流程也能用：任务简报、证据账本和阶段路线。",
    "u5.title": "任何 DIY 长程项目",
    "u5.desc": "内容、需求、规则和流程由你制定，科研只是可选示例。",
    "u6.title": "软件开发管理",
    "u6.desc": "代码地图、编程工作台、核心锁和监管规则，适合管 agent 写代码。",

    "start.eyebrow": "GET STARTED ON WINDOWS",
    "start.title": "下载与启动",
    "start.lead": "目前只提供 Windows 启动脚本。需要先装 Python 3.12；平台本身不需要模型 API Key。",
    "download.title": "Windows 发行包（ZIP）",
    "download.desc": "约 76 MB，解压后 1422 个文件、约 96 MB。不带 Office、LibreOffice、Git、FFmpeg 等外部程序，需要时自己安装。",
    "download.cta": "下载 MiracleHarness2.zip",
    "download.release": "查看 Release 说明",
    "download.meta": "系统：Windows · 依赖：Python 3.12 · 网页地址：http://127.0.0.1:8770/（端口被占用时自动顺延）",
    "step1": "从 python.org 安装 Python 3.12，把 ZIP 解压到普通文件夹。",
    "step2": "在解压后的文件夹里打开 PowerShell，运行：",
    "step3": "双击“启动.bat”。黑色窗口就是后台，网页会自动打开并先进入“蓝图”，在这里写下你的目标、需求和验收标准。",
    "step4": "让你已有的 agent 先读 AGENTS.md；MCP 可选。员工默认不启动，插件默认不启用。",
    "start.otherTitle": "macOS / Linux",
    "start.other": "仓库没有为 macOS/Linux 提供启动脚本，也没有相关文档和验证。可以尝试 python3 backend/main.py，但未经测试；截图录屏、全局快捷键、网页终端和 PPT 预览脚本都依赖 Windows。",
    "start.namesTitle": "几个名字，同一个东西",
    "start.names": "官网上的“Agent 科研自动工作台 · MiracleHarness”、发行包里的 MiracleHarness2、界面和技能里的“自动化科研交互界面”、MCP 服务名 research-console，指的都是这一个本地工作台。",

    "status.eyebrow": "CURRENT STATUS",
    "status.title": "当前状态：能用，但还是早期版本",
    "status.lead": "分开写清楚：左边是发行包里已经有的，右边是还没做、默认关闭或没验证过的。",
    "status.doneTitle": "已经有的",
    "done1": "本地网页 + Python（FastAPI）后台：只监听 127.0.0.1，默认端口 8770，就绪后自动开浏览器，改代码自动重启。",
    "done2": "本地 MCP 服务 research-console，73 个工具；网页和 agent 读写同一份文件。",
    "done3": "蓝图：目标、需求与验收、计划、戒律集中在“治理”文件夹，可以在网页直接编辑，按版本号检测冲突。",
    "done4": "自动化面板：关系图、任务看板、agent 名册、员工分配图、流程编辑器、7 条监管规则、checks-pass 自动验收。",
    "done5": "存档：内容去重、对比、复活、世界树分支与三方合并、回收站、带进度条的全量备份。",
    "done6": "文献库和 PDF 阅读页；网页内预览压缩包、音视频、Excel、Word、PPT 文字和图。",
    "done7": "笔记本（只增不改）、便签（N 键）、双向问答，截图/录屏及标注（借用 Windows 截图工具）。",
    "done8": "代码地图和只读的编程工作台。",
    "done9": "9 个中文科研技能（MIT）、各模块方法卡、82 份 ARIS 论文方法索引、PPT 技能。",
    "done10": "外观：4 套皮肤（默认玉色科技）、3 套图标、5 张壁纸、亮/暗两档，中文 / 中英对照 / English 三档界面语言。",
    "done11": "两个可选插件：PPT 预览、网页终端（仅 Windows），都要先装好再由人启用。",
    "done12": "展示示例：23 页项目介绍 PPT/PDF、写小说和写论文的流程模板、一段历史宣传片、演示用索引。它们是示例，不是你的研究成果。",
    "status.todoTitle": "还没做 / 没验证",
    "todo1": "网页剪辑器还没做：剪辑插件目前只有 FFmpeg 协议和命令卡。",
    "todo2": "一键接入 agent 还没做，MCP 要手动配置。",
    "todo3": "网页“员工”自动运行只支持本机 Codex CLI，其他客户端没有接入自动运行器。",
    "todo4": "员工默认不启动、插件默认不启用；全自动开工总开关只能由人打开，“已允许自动开工”不等于员工正在跑。",
    "todo5": "真实科研任务、真实任务完成和第二台电脑安装都没有验证过。",
    "todo6": "完整源码测试集仍有旧目录布局的兼容失败，只有相关的启动、工具和发行检查通过了。",
    "todo7": "核心还没固化：没有 1.0，没有安装包。",
    "todo8": "macOS / Linux 没有启动脚本、文档或验证。",
    "todo9": "世界树 3D 建模暂停；“重生”功能的后续部分暂停或还没做。",
    "todo10": "宣传片的阶段技能和写小说的路线技能，这个发行包没有带。",
    "todo11": "明确不做：长截图、钉在桌面、提取图中文字，以及手机适配。",

    "license.eyebrow": "LICENSE",
    "license.title": "许可与商业授权",
    "license.lead": "源码公开，但采用非商用许可，不是 OSI 认可的开源许可证。",
    "lic1.title": "非商用免费",
    "lic1.desc": "原创部分采用 PolyForm Noncommercial 1.0.0 官方原文。个人学习、无预期商用的研究与试验，以及许可所列非商业机构用途，按许可原文免费使用。",
    "lic2.tag": "书面授权",
    "lic2.title": "商用需要书面授权",
    "lic2.desc": "任何商业用途，包括商业研究，都需要作者另行书面授权。请发邮件联系：",
    "lic3.title": "第三方部分保持各自许可",
    "lic3.desc": "9 个中文科研技能以及 ARIS、K-Dense、ppt-master 等上游内容单独采用 MIT；随包网页库采用 Apache-2.0、MIT 等。非商用条件不会限制你依原始许可单独使用这些部分。",
    "license.thirdParty": "第三方许可证",
    "license.site": "本官网自身的代码采用 MIT 许可，与产品许可无关；MiracleHarness 名称和凤凰标志不随 MIT 授权。",

    "guestbook.eyebrow": "LEAVE A MESSAGE",
    "guestbook.title": "给 MiracleHarness 留言",
    "guestbook.lead": "说说你想用它做什么研究或长程项目、遇到了什么问题，或者最希望先做哪一项。留言经 Cloudflare Turnstile 验证，每个来源每小时最多 3 条。",
    "guestbook.name": "你的称呼",
    "guestbook.namePlaceholder": "例如：一位做计算研究的同学",
    "guestbook.message": "留言",
    "guestbook.messagePlaceholder": "写下你的研究场景、建议或遇到的问题……",
    "guestbook.submit": "提交留言",
    "guestbook.loading": "正在连接留言板……",
    "guestbook.ready": "完成人机验证后即可提交。",
    "guestbook.verify": "请先完成人机验证。",
    "guestbook.sending": "正在提交……",
    "guestbook.success": "留言已收到，谢谢。",
    "guestbook.unavailable": "留言板尚未完成生产密钥配置，暂时只读。",
    "guestbook.error": "暂时无法提交，请稍后再试。",
    "guestbook.rateLimited": "每小时最多留言 3 次，请稍后再来。",
    "guestbook.invalid": "请检查昵称和留言长度。",
    "guestbook.verificationError": "人机验证失败，请刷新后重试。",
    "guestbook.privacy": "隐私：不保存原始 IP；仅使用带盐 SHA-256 哈希完成一小时限频，旧限频记录会自动清理。",
    "guestbook.feedTitle": "最近的留言",
    "guestbook.refresh": "刷新",
    "guestbook.feedLoading": "正在读取留言……",
    "guestbook.feedEmpty": "还没有公开留言，欢迎写第一条。",
    "guestbook.feedError": "暂时无法读取留言。",

    "footer.name": "Agent 科研自动工作台 · MiracleHarness",
    "footer.tagline": "人定方向，agent 做事 · 本地运行 · 普通文件",
    "footer.siteSource": "网站源码",
    "footer.contact": "联系我",
    "footer.email": "邮箱",
    "footer.wechat": "微信"
  },

  en: {
    "meta.title": "Agent Research Workbench · MiracleHarness",
    "aria.home": "MiracleHarness home",
    "alt.brand": "MiracleHarness gold-and-green phoenix mark",
    "brand.name": "MiracleHarness",
    "aria.mainNav": "Main navigation",
    "nav.features": "Features",
    "nav.workflow": "Research route",
    "nav.agents": "Agents",
    "nav.status": "Status",
    "nav.license": "License",
    "nav.guestbook": "Guestbook",
    "nav.github": "GitHub",
    "nav.cta": "Download",
    "nav.download": "Download",

    "hero.eyebrow": "AGENT RESEARCH WORKBENCH · EARLY RELEASE",
    "hero.title1": "Agent Research Workbench",
    "hero.title2": "MiracleHarness",
    "hero.tag": "People set direction; their chosen agents do the work.",
    "hero.sub": "A research workbench that runs on your own computer: a local web console, Python backend and optional MCP interface. Goals, requirements, plans, rules and deliveries stay in ordinary local files, and the agents you choose work from them — across ideas, literature, experiments, papers and showcases, and also for novels, promo videos and other DIY long-running projects.",
    "hero.cta1": "Download for Windows (ZIP)",
    "hero.cta2": "GitHub repository",
    "hero.cta3": "User guide (Chinese)",
    "hero.badge1": "MiracleHarness2 · 2026-10-07",
    "hero.badge2": "Windows first · Python 3.12",
    "hero.badge3": "No model API key for the platform",
    "hero.badge4": "Source-available · free for noncommercial use",
    "hero.note": "Early release: the core is not frozen, and there is no 1.0 or installer yet. Real research tasks and installation on a second computer have not been verified. Start with projects you can recover.",
    "hero.imageNote": "AI-generated concept art · not a screenshot",
    "alt.hero": "AI-generated concept illustration: a jade tree on a white marble platform, its golden branches holding three glass spheres with a gear, a flask and a molecule",

    "aria.facts": "Key facts",
    "fact1.title": "Runs locally",
    "fact1.desc": "The backend only listens on 127.0.0.1, and the page opens in your own browser.",
    "fact2.title": "Plain files",
    "fact2.desc": "Goals, plans, rules and deliveries are files you can open directly, so another agent can take over.",
    "fact3.title": "Your own agents",
    "fact3.desc": "Any agent that can read files works from AGENTS.md. You choose and pay for its account.",
    "fact4.title": "73 MCP tools",
    "fact4.desc": "Optional local research-console server: register, claim tasks, deliver, checkpoint, ask a human.",
    "fact5.title": "9 Chinese research skills",
    "fact5.desc": "One route entry plus eight stage skills, with method cards in each module.",

    "features.eyebrow": "WHAT IT DOES",
    "features.title": "Keep long projects legible and under control",
    "features.lead": "The platform never calls a model and does not do the agent's work. It does three things: keeps the project understandable to people, turns ideas into precise instructions, and keeps a project under control however long it runs.",
    "f1.title": "Bring your own agents, no model API key for the platform",
    "f1.desc": "Any agent that can read files starts from AGENTS.md. An optional local stdio MCP server, research-console, exposes 73 tools. The platform itself never calls a model; you choose and pay for your own agent accounts.",
    "f2.title": "Blueprint governance: goals, requirements, plans, rules, deliveries",
    "f2.desc": "S0 goal → S1 → S2 tasks, requirements with acceptance criteria, numbered plans (P), three layers of rules (general, project, module), and delivery (J) and handover (H) records — all plain files. The web UI and MCP edit the same files, with revision checks so neither overwrites the other.",
    "f3.title": "Automation dashboard, staff allocation and workflow editor",
    "f3.desc": "A project → goal → task graph, a four-column task board, an agent roster, a staff allocation chart, a workflow editor (save, validate, rehearse, enable) and seven supervision rules. Deliveries are accepted automatically only when every check passes. Full auto-start must be switched on by a person and currently drives only the local Codex CLI.",
    "f4.title": "Snapshots, world tree and recycle bin",
    "f4.desc": "Save a checkpoint at each milestone with content-deduplicated storage, then compare, restore a file or roll back fully. Grow a world-tree branch from any checkpoint and merge it back with a three-way merge. Deletions go to a restorable recycle bin.",
    "f5.title": "Literature reader and content workspaces",
    "f5.desc": "The literature library pairs each source with its notes by L number. The PDF reader supports highlights, stickers and pen annotations, plus select-to-note and ask-the-agent. Zip, audio/video, Excel, Word and PPT text preview right in the page.",
    "f6.title": "Code map and coding workbench",
    "f6.desc": "The whole project becomes a zoomable treemap: syntax-coloured lines from afar, readable code up close, plus an importance pyramid. The coding workbench gathers a task's requirement, rules, approved plan and skills into a read-only work package you can copy to an agent.",

    "workflow.eyebrow": "RESEARCH ROUTE",
    "workflow.title": "The research route: from topic to revision, every step leaves a file",
    "workflow.lead": "Research is the main entry point. A route card first works out where you are, then stage skills and method cards move the work forward. Stages that do not apply can be skipped with a stated reason, and existing work does not have to be redone.",
    "s0.title": "Research route (entry point)",
    "s0.desc": "Work out the current stage, fill a route card and plan the next task, budget and stop conditions, so another agent can take over.",
    "s1.title": "Topic and hypothesis",
    "s1.desc": "Turn an interest or observation into a topic with evidence boundaries, falsifiable predictions and a feasibility note. Candidate hypotheses are not findings.",
    "s2.title": "Literature and evidence",
    "s2.desc": "Keep search logs, literature comparisons and a claim-evidence table, separating “the source exists” from “the source actually supports the claim”.",
    "s3.title": "Data and experiment design",
    "s3.desc": "Turn claims into an experiment plan: data permissions, leakage-free splits, fair baselines, metrics and budget.",
    "s4.title": "Reproduction and runs",
    "s4.desc": "Reproduce baselines and run computational experiments within approved resources, keeping commands, versions, raw results and failures. It does not rent resources.",
    "s5.title": "Results analysis and figures",
    "s5.desc": "Compute reproducible, traceable comparisons and figures from real results, and record limitations and negative results. No fabricated data.",
    "s6.title": "Manuscript and citations",
    "s6.desc": "Write the paper from real methods, results and locatable sources, and check that citations and numbers agree. The paper workspace has nine chapter sections.",
    "s7.title": "Submission preparation",
    "s7.desc": "Check the target journal's current official requirements and build a local submission package with a list of missing declarations. No log-in, upload, payment or automatic submission.",
    "s8.title": "Revision and response",
    "s8.desc": "Map each reviewer comment to edits, extra experiments, manuscript locations and evidence-backed replies. Original comments are kept and nothing is sent automatically.",
    "s9.skill": "Report card · PPT skill",
    "s9.title": "Presentation and discussion",
    "s9.desc": "Present the question, methods, real results, limitations and next steps. There is no dedicated research-* skill for this stage; it uses the report card and the PPT skill.",
    "s10.skill": "Material cards · supporting module",
    "s10.title": "Materials and showcase",
    "s10.desc": "Record the source, permission and use of figures, tables and screenshots; quantitative figures must come from real data. The PPT results section lists exported PPTX/PDF files.",
    "workflow.note": "The nine skills are adapted from ARIS, K-Dense scientific-agent-skills and claude-scientific-writer, and are licensed separately under MIT. They are aimed mainly at computational and machine-learning research, not real clinical, animal or wet-lab work. Templates are not research results, and “accepted automatically when all checks pass” only means the listed checks passed — not that a conclusion holds or is publishable.",

    "gallery.eyebrow": "ILLUSTRATIONS",
    "gallery.title": "Concept illustrations",
    "gallery.lead": "These AI-generated concept illustrations come from the project's documentation and show what each part is for. They are not screenshots of the product, and the repository does not yet contain real UI screenshots.",
    "gallery.badge1": "AI-generated · not a screenshot",
    "gallery.badge2": "AI-generated · not a screenshot",
    "gallery.badge3": "AI-generated · not a screenshot",
    "alt.g1": "AI-generated concept illustration: two white, gold-rimmed windows on a marble desk joined by a golden handshake badge",
    "g1.title": "Agent connection",
    "g1.desc": "Different agent tools share the same project records.",
    "alt.g2": "AI-generated concept illustration: three stacked slides on a curved jade stand next to a small crystal pyramid",
    "g2.title": "PPT Preview plugin",
    "g2.desc": "Converts slides to PDF through local PowerPoint or LibreOffice for viewing in the page. Off by default.",
    "alt.g3": "AI-generated concept illustration: a translucent jade film reel and strip being cut by gold-handled scissors",
    "g3.title": "Materials and editing",
    "g3.desc": "Currently only an FFmpeg protocol and command card; the in-page editor is not built yet.",

    "agents.eyebrow": "BRING YOUR OWN AGENT",
    "agents.title": "Connect the agents you already use",
    "agents.lead": "The platform never calls a model and needs no model API key. The work is done by agents you choose, with your own accounts, quotas and costs. There are three ways in:",
    "a1.title": "Read the files and start",
    "a1.desc": "Any agent that can read files starts with AGENTS.md at the root and the research-console usage skill, then works through plain files under the collaboration protocol. Claude Code picks up AGENTS.md automatically via CLAUDE.md.",
    "a2.title": "Optional: local MCP server",
    "a2.desc": "research-console is started with python backend/mcp_server.py and has 73 tools, such as register_agent, get_overview, next_task, deliver, save_checkpoint and ask_human. .mcp.json covers compatible clients; others are configured by hand following the connection guide. One-click connection is not built yet.",
    "a3.title": "Optional: web “staff” automation",
    "a3.desc": "Off by default. After a person turns on the master switch, a local Python runner starts the Codex CLI once per round. Only Codex is supported.",
    "agents.listTitle": "Clients mentioned in the docs",
    "chip.lingma": "Tongyi Lingma",
    "chip.workbuddy": "Tencent WorkBuddy",
    "chip.codebuddy": "Tencent CodeBuddy",
    "chip.zcode": "Zhipu ZCode",
    "chip.step": "StepFun Step Code",
    "agents.caveat": "This list only means the docs describe how to connect; it does not mean every client has been tested end to end. The project's agent directory lists 27 US and 19 Chinese agents, and whether each can use MCP is a written judgment only. DeepSeek Harness's official web UI needs a model API key, and a signed-in agent uses its own cloud model, so “no key for the platform” does not mean fully offline.",

    "uses.eyebrow": "BEYOND RESEARCH",
    "uses.title": "Not just research",
    "uses.lead": "Research is only the main entry point. The general template carries no business material: you create your own modules and set requirements, rules and workflows. The release ships workflow templates and examples, not finished products.",
    "u1.title": "Novel writing",
    "u1.desc": "A seven-stage route: concept and readers → world and characters → layered outline → draft and state → consistency and first read → author-approved revision → handover and full manuscript, with a task brief and chapter handover. It is a workflow template only; the route skill is not bundled.",
    "u2.title": "Promo videos",
    "u2.desc": "The workspace has “materials” and “results” sections. The Media Edit plugin lets an agent cut, join and subtitle clips from an FFmpeg command card. The in-page editor is not built, and the promo-video stage skills are not in this release.",
    "u3.title": "Presentations",
    "u3.desc": "Materials and results sections. The PPT skill works from audience → page-by-page plan → editable build → check → delivery, and exported PPTX/PDF files are listed in the results section.",
    "u4.title": "Paper writing",
    "u4.desc": "Usable without the full research route: a task brief, an evidence ledger and a stage route.",
    "u5.title": "Any DIY long-running project",
    "u5.desc": "You define the content, requirements, rules and workflow; research is only an optional example.",
    "u6.title": "Software development management",
    "u6.desc": "The code map, coding workbench, core lock and supervision rules suit managing agents that write code.",

    "start.eyebrow": "GET STARTED ON WINDOWS",
    "start.title": "Download and start",
    "start.lead": "Only Windows launch scripts are provided for now. Install Python 3.12 first; the platform itself needs no model API key.",
    "download.title": "Windows release (ZIP)",
    "download.desc": "About 76 MB; it unpacks to 1,422 files, about 96 MB. Office, LibreOffice, Git, FFmpeg and other external programs are not included — install them yourself when needed.",
    "download.cta": "Download MiracleHarness2.zip",
    "download.release": "Release notes",
    "download.meta": "System: Windows · Requires: Python 3.12 · Address: http://127.0.0.1:8770/ (moves to the next free port if taken)",
    "step1": "Install Python 3.12 from python.org and unzip the release into a regular folder.",
    "step2": "Open PowerShell in the unzipped folder and run:",
    "step3": "Double-click 启动.bat. The black window is the backend; the page opens automatically on the Blueprint, where you write your goals, requirements and acceptance criteria.",
    "step4": "Ask your existing agent to read AGENTS.md first; MCP is optional. Staff do not start and plugins are not enabled by default.",
    "start.otherTitle": "macOS / Linux",
    "start.other": "The repository has no launch scripts, documentation or verification for macOS/Linux. You can try python3 backend/main.py, but it is untested; screenshots, recording, global hotkeys, the web terminal and the PPT preview scripts all depend on Windows.",
    "start.namesTitle": "Several names, one thing",
    "start.names": "“Agent Research Workbench · MiracleHarness” on this site, MiracleHarness2 in the release, “自动化科研交互界面” (automated research console) in the UI and skills, and the MCP server name research-console all refer to this same local workbench.",

    "status.eyebrow": "CURRENT STATUS",
    "status.title": "Current status: usable, but still an early release",
    "status.lead": "Kept apart on purpose: the left column is what the release already has; the right is what is not built, off by default or unverified.",
    "status.doneTitle": "Available now",
    "done1": "Local web page + Python (FastAPI) backend: listens only on 127.0.0.1, default port 8770, opens the browser when ready and restarts on code changes.",
    "done2": "Local MCP server research-console with 73 tools; the web page and agents read and write the same files.",
    "done3": "Blueprint: goals, requirements with acceptance, plans and rules gathered in the governance folder, editable in the page with revision-conflict checks.",
    "done4": "Automation dashboard: relationship graph, task board, agent roster, staff allocation chart, workflow editor, seven supervision rules and checks-pass auto-acceptance.",
    "done5": "Snapshots: deduplicated storage, comparison, restore, world-tree branches with three-way merge, recycle bin and full backup with a progress bar.",
    "done6": "Literature library and PDF reader; in-page previews for zip, audio/video, Excel, Word and PPT text and images.",
    "done7": "Append-only notebook, sticky note (N key), two-way Q&A, and screenshots/recordings with annotation (via the Windows Snipping Tool).",
    "done8": "Code map and a read-only coding workbench.",
    "done9": "Nine Chinese research skills (MIT), method cards per module, an index of 82 ARIS paper-method packs, and a PPT skill.",
    "done10": "Appearance: four skins (Jade Tech by default), three icon sets, five wallpapers, light/dark, and Chinese / bilingual / English UI.",
    "done11": "Two optional plugins: PPT Preview and Web Terminal (Windows only); both must be installed first and then enabled by a person.",
    "done12": "Showcase examples: a 23-page project introduction PPT/PDF, novel- and paper-writing workflow templates, one historical promo video and a demo index. They are examples, not your research results.",
    "status.todoTitle": "Not built / not verified",
    "todo1": "The in-page video editor is not built: the Media Edit plugin is currently only an FFmpeg protocol and command card.",
    "todo2": "One-click agent connection is not built; MCP must be configured by hand.",
    "todo3": "Web “staff” automation supports only the local Codex CLI; other clients are not connected to the runner.",
    "todo4": "Staff are off and plugins disabled by default; only a person can turn on full auto-start, and “auto-start allowed” does not mean staff are running.",
    "todo5": "Real research tasks, real task completion and installation on a second computer have not been verified.",
    "todo6": "The full source test suite still has legacy-layout compatibility failures; only the related startup, tool and release checks passed.",
    "todo7": "The core is not frozen: no 1.0 and no installer.",
    "todo8": "macOS / Linux have no launch scripts, docs or verification.",
    "todo9": "World-tree 3D modelling is paused; later parts of the “rebirth” feature are paused or not built.",
    "todo10": "The promo-video stage skills and the novel route skill are not included in this release.",
    "todo11": "Out of scope: long screenshots, pin-to-desktop, text extraction from images, and mobile layouts.",

    "license.eyebrow": "LICENSE",
    "license.title": "License and commercial use",
    "license.lead": "The source is public, but under a noncommercial license. It is not an OSI-approved open-source license.",
    "lic1.title": "Free for noncommercial use",
    "lic1.desc": "Original material uses the unmodified PolyForm Noncommercial 1.0.0 text. Personal study, research and experiments with no anticipated commercial application, and the noncommercial organizations listed in the license, may use it free under its terms.",
    "lic2.tag": "Written license",
    "lic2.title": "Commercial use needs written permission",
    "lic2.desc": "Any commercial use, including commercial research, requires a separate written license from the author. Contact by email:",
    "lic3.title": "Third-party parts keep their own licenses",
    "lic3.desc": "The nine Chinese research skills and upstream material such as ARIS, K-Dense and ppt-master are licensed separately under MIT; bundled web libraries use Apache-2.0, MIT and others. The noncommercial terms do not restrict your use of those parts under their original licenses.",
    "license.thirdParty": "Third-party notices",
    "license.site": "This website's own code is MIT-licensed, separately from the product. The MiracleHarness name and phoenix mark are not licensed under MIT.",

    "guestbook.eyebrow": "LEAVE A MESSAGE",
    "guestbook.title": "Leave a message for MiracleHarness",
    "guestbook.lead": "Tell me what research or long-running project you want to use it for, what problems you ran into, or what should come first. Messages are protected by Cloudflare Turnstile and limited to three per source per hour.",
    "guestbook.name": "Your name",
    "guestbook.namePlaceholder": "For example: a computational researcher",
    "guestbook.message": "Message",
    "guestbook.messagePlaceholder": "Share your research scenario, a suggestion or a problem…",
    "guestbook.submit": "Leave message",
    "guestbook.loading": "Connecting to the guestbook…",
    "guestbook.ready": "Complete the verification to submit.",
    "guestbook.verify": "Please complete the verification first.",
    "guestbook.sending": "Submitting…",
    "guestbook.success": "Message received. Thank you.",
    "guestbook.unavailable": "Production keys are not configured yet; the guestbook is read-only.",
    "guestbook.error": "Unable to submit right now. Please try again later.",
    "guestbook.rateLimited": "The limit is three messages per hour. Please return later.",
    "guestbook.invalid": "Please check the name and message lengths.",
    "guestbook.verificationError": "Verification failed. Refresh and try again.",
    "guestbook.privacy": "Privacy: raw IP addresses are never stored. Only a salted SHA-256 hash is used for the one-hour rate limit, and old rate-limit records are cleaned up.",
    "guestbook.feedTitle": "Recent messages",
    "guestbook.refresh": "Refresh",
    "guestbook.feedLoading": "Loading messages…",
    "guestbook.feedEmpty": "No public messages yet. Be the first to write one.",
    "guestbook.feedError": "Messages are temporarily unavailable.",

    "footer.name": "Agent Research Workbench · MiracleHarness",
    "footer.tagline": "People set direction, agents do the work · runs locally · plain files",
    "footer.siteSource": "Site source",
    "footer.contact": "Contact",
    "footer.email": "Email",
    "footer.wechat": "WeChat"
  }
};

(function () {
  "use strict";

  var LS_KEY = "mh-site-lang";
  var guestbookItems = [];
  var turnstileWidgetId = null;
  var turnstileToken = "";
  var guestbookSubmitting = false;

  function currentLang() {
    var saved = null;
    try { saved = localStorage.getItem(LS_KEY); } catch (e) { /* ignore */ }
    if (saved === "zh" || saved === "en") return saved;
    if (navigator.language && navigator.language.toLowerCase().indexOf("zh") === 0) return "zh";
    return "zh";
  }

  function apply(lang) {
    var dict = I18N[lang] || I18N.zh;
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute("data-i18n");
      if (key && dict[key] !== undefined) els[i].textContent = dict[key];
    }
    var alts = document.querySelectorAll("[data-i18n-alt]");
    for (var j = 0; j < alts.length; j++) {
      var akey = alts[j].getAttribute("data-i18n-alt");
      if (akey && dict[akey] !== undefined) alts[j].setAttribute("alt", dict[akey]);
    }
    var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    for (var p = 0; p < placeholders.length; p++) {
      var pkey = placeholders[p].getAttribute("data-i18n-placeholder");
      if (pkey && dict[pkey] !== undefined) placeholders[p].setAttribute("placeholder", dict[pkey]);
    }
    var labels = document.querySelectorAll("[data-i18n-aria]");
    for (var l = 0; l < labels.length; l++) {
      var lkey = labels[l].getAttribute("data-i18n-aria");
      if (lkey && dict[lkey] !== undefined) labels[l].setAttribute("aria-label", dict[lkey]);
    }
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    var toggle = document.getElementById("lang-toggle");
    if (toggle) toggle.textContent = lang === "zh" ? "EN" : "中文";
    try { localStorage.setItem(LS_KEY, lang); } catch (e) { /* ignore */ }

    var status = document.getElementById("guestbook-status");
    if (status) {
      var statusKey = status.getAttribute("data-status-key");
      if (statusKey && dict[statusKey] !== undefined) status.textContent = dict[statusKey];
    }
    renderGuestbookMessages(guestbookItems);
  }

  function translate(key) {
    var dict = I18N[currentLang()] || I18N.zh;
    return dict[key] !== undefined ? dict[key] : key;
  }

  function setGuestbookStatus(key, state) {
    var status = document.getElementById("guestbook-status");
    if (!status) return;
    status.setAttribute("data-status-key", key);
    status.setAttribute("data-state", state || "neutral");
    status.textContent = translate(key);
  }

  function formatMessageTime(value) {
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    try {
      return new Intl.DateTimeFormat(currentLang() === "zh" ? "zh-CN" : "en", {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(date);
    } catch (e) {
      return date.toLocaleString();
    }
  }

  function normalizeGuestbookItem(value) {
    if (!value || typeof value !== "object") return null;
    if (typeof value.id !== "string" || typeof value.displayName !== "string") return null;
    if (typeof value.message !== "string" || typeof value.createdAt !== "string") return null;
    return {
      id: value.id,
      displayName: value.displayName,
      message: value.message,
      createdAt: value.createdAt
    };
  }

  function renderGuestbookMessages(items) {
    var list = document.getElementById("guestbook-list");
    if (!list) return;

    while (list.firstChild) list.removeChild(list.firstChild);
    if (!items.length) {
      var empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = translate("guestbook.feedEmpty");
      list.appendChild(empty);
      return;
    }

    for (var index = 0; index < items.length; index++) {
      var item = items[index];
      var article = document.createElement("article");
      article.className = "guestbook-message";

      var head = document.createElement("div");
      head.className = "guestbook-message-head";
      var name = document.createElement("span");
      name.className = "guestbook-message-name";
      name.textContent = item.displayName;
      var time = document.createElement("time");
      time.className = "guestbook-message-time";
      time.dateTime = item.createdAt;
      time.textContent = formatMessageTime(item.createdAt);
      head.appendChild(name);
      head.appendChild(time);

      var message = document.createElement("p");
      message.className = "guestbook-message-body";
      message.textContent = item.message;

      article.appendChild(head);
      article.appendChild(message);
      list.appendChild(article);
    }
  }

  function renderFeedState(key) {
    var list = document.getElementById("guestbook-list");
    if (!list) return;
    while (list.firstChild) list.removeChild(list.firstChild);
    var state = document.createElement("p");
    state.className = "empty-state";
    state.textContent = translate(key);
    list.appendChild(state);
  }

  async function loadGuestbookMessages() {
    try {
      var response = await fetch("/api/guestbook", {
        headers: { Accept: "application/json" },
        cache: "no-store"
      });
      if (!response.ok) throw new Error("guestbook list failed");
      var payload = await response.json();
      if (!payload || payload.ok !== true || !Array.isArray(payload.items)) {
        throw new Error("guestbook list invalid");
      }
      guestbookItems = payload.items.map(normalizeGuestbookItem).filter(Boolean);
      renderGuestbookMessages(guestbookItems);
    } catch (error) {
      renderFeedState("guestbook.feedError");
    }
  }

  function resetTurnstile() {
    turnstileToken = "";
    var submit = document.getElementById("guestbook-submit");
    if (submit) submit.disabled = true;
    if (turnstileWidgetId !== null && window.turnstile) {
      window.turnstile.reset(turnstileWidgetId);
    }
  }

  function renderTurnstile(siteKey, action) {
    var container = document.getElementById("turnstile-container");
    if (!container || !window.turnstile) {
      setGuestbookStatus("guestbook.verificationError", "error");
      return;
    }

    try {
      turnstileWidgetId = window.turnstile.render(container, {
        sitekey: siteKey,
        action: action,
        theme: "light",
        callback: function (token) {
          turnstileToken = typeof token === "string" ? token : "";
          var submit = document.getElementById("guestbook-submit");
          if (submit) submit.disabled = !turnstileToken || guestbookSubmitting;
          setGuestbookStatus("guestbook.ready", "neutral");
        },
        "expired-callback": function () {
          turnstileToken = "";
          var submit = document.getElementById("guestbook-submit");
          if (submit) submit.disabled = true;
          setGuestbookStatus("guestbook.verify", "error");
        },
        "error-callback": function () {
          turnstileToken = "";
          var submit = document.getElementById("guestbook-submit");
          if (submit) submit.disabled = true;
          setGuestbookStatus("guestbook.verificationError", "error");
        }
      });
    } catch (error) {
      setGuestbookStatus("guestbook.verificationError", "error");
    }
  }

  function loadTurnstileScript(siteKey, action) {
    if (window.turnstile) {
      renderTurnstile(siteKey, action);
      return;
    }

    var script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", function () { renderTurnstile(siteKey, action); });
    script.addEventListener("error", function () {
      setGuestbookStatus("guestbook.verificationError", "error");
    });
    document.head.appendChild(script);
  }

  async function configureGuestbook() {
    try {
      var response = await fetch("/api/config", {
        headers: { Accept: "application/json" },
        cache: "no-store"
      });
      if (!response.ok) throw new Error("guestbook config failed");
      var payload = await response.json();
      var config = payload && payload.guestbook;
      if (!config || config.enabled !== true || typeof config.turnstileSiteKey !== "string") {
        setGuestbookStatus("guestbook.unavailable", "error");
        return;
      }
      loadTurnstileScript(config.turnstileSiteKey, config.turnstileAction || "guestbook_submit");
      setGuestbookStatus("guestbook.ready", "neutral");
    } catch (error) {
      setGuestbookStatus("guestbook.unavailable", "error");
    }
  }

  function submissionErrorKey(payload) {
    var code = payload && payload.error && payload.error.code;
    if (code === "rate_limited") return "guestbook.rateLimited";
    if (code === "invalid_fields") return "guestbook.invalid";
    if (code === "turnstile_failed") return "guestbook.verificationError";
    if (code === "guestbook_unavailable") return "guestbook.unavailable";
    return "guestbook.error";
  }

  async function submitGuestbook(event) {
    event.preventDefault();
    var form = document.getElementById("guestbook-form");
    var nameInput = document.getElementById("guestbook-name");
    var messageInput = document.getElementById("guestbook-message");
    var submit = document.getElementById("guestbook-submit");
    if (!form || !nameInput || !messageInput || !submit) return;
    if (!form.reportValidity()) return;
    if (!turnstileToken) {
      setGuestbookStatus("guestbook.verify", "error");
      return;
    }

    guestbookSubmitting = true;
    submit.disabled = true;
    setGuestbookStatus("guestbook.sending", "neutral");
    try {
      var response = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          displayName: nameInput.value,
          message: messageInput.value,
          turnstileToken: turnstileToken
        })
      });
      var payload = await response.json();
      if (!response.ok || !payload || payload.ok !== true) {
        setGuestbookStatus(submissionErrorKey(payload), "error");
        return;
      }

      messageInput.value = "";
      var counter = document.getElementById("guestbook-count");
      if (counter) counter.textContent = "0 / 500";
      setGuestbookStatus("guestbook.success", "success");
      await loadGuestbookMessages();
    } catch (error) {
      setGuestbookStatus("guestbook.error", "error");
    } finally {
      guestbookSubmitting = false;
      resetTurnstile();
    }
  }

  function initializeGuestbook() {
    var form = document.getElementById("guestbook-form");
    var messageInput = document.getElementById("guestbook-message");
    var refresh = document.getElementById("guestbook-refresh");
    if (!form || !messageInput) return;

    form.addEventListener("submit", submitGuestbook);
    messageInput.addEventListener("input", function () {
      var counter = document.getElementById("guestbook-count");
      if (counter) counter.textContent = messageInput.value.length + " / 500";
    });
    if (refresh) {
      refresh.addEventListener("click", function () {
        renderFeedState("guestbook.feedLoading");
        loadGuestbookMessages().catch(function () {
          renderFeedState("guestbook.feedError");
        });
      });
    }

    loadGuestbookMessages().catch(function () {
      renderFeedState("guestbook.feedError");
    });
    configureGuestbook().catch(function () {
      setGuestbookStatus("guestbook.unavailable", "error");
    });
  }

  var toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      apply(currentLang() === "zh" ? "en" : "zh");
    });
  }

  apply(currentLang());
  initializeGuestbook();
})();
