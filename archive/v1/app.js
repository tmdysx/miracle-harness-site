/* ===== 奇迹 Harness 官网 · 双语切换 ===== */

const I18N = {
  zh: {
    "brand.name": "奇迹 Harness",
    "brand.sub": "MIRACLE HARNESS",
    "alt.brand": "奇迹 Harness 金绿神鸟图腾",
    "nav.features": "为什么",
    "nav.domains": "模块",
    "nav.seasons": "四季",
    "nav.local": "本地优先",
    "nav.start": "快速开始",
    "nav.download": "下载",
    "nav.guestbook": "留言",
    "nav.cta": "下载 Alpha",
    "nav.github": "GitHub",
    "search.placeholder": "搜索模块、职责或关键词（按 / 聚焦）",
    "search.empty": "没有找到匹配模块，换个关键词试试。",
    "search.count": "已显示 {count} / 13 个模块",

    "hero.eyebrow": "LONG-HORIZON AGENT HARNESS · 初代原型",
    "hero.title1": "奇迹",
    "hero.title2": "Harness",
    "hero.tag": "为超长程任务而生的本地优先 Agent Harness",
    "hero.sub": "蓝图是施工图纸与方案，戒律是施工规范；世界树管理对话，金字塔组织项目，根系吸收文件信息，四季让每个纪元在冬季主动熵减。",
    "hero.cta1": "下载 Windows 初代原型",
    "hero.cta2": "阅读完整构想 →",
    "hero.cta3": "查看 GitHub 源码 →",
    "hero.badge1": "v0.1.0-alpha.1 · Alpha",
    "hero.badge2": "Windows x64 · 便携版",
    "hero.badge3": "蓝图 + Agent 会议",
    "hero.badge4": "会话与项目状态本地保存",
    "hero.alpha": "Alpha 会持续进化，适合体验、研究与共同设计，请先用于可恢复的非关键项目。",
    "alt.hero": "奇迹 Harness 圣所俯瞰图",
    "alt.d1": "蓝图规划台",
    "alt.d2": "世界树",
    "alt.d3": "天使议会",
    "alt.d4": "众神武库",
    "alt.d5": "伊甸园",
    "alt.d6": "智慧之泉",
    "alt.d7": "戒律石板",
    "alt.d8": "雅典娜学宫",
    "alt.d9": "项目金字塔",
    "alt.d10": "项目根系",
    "alt.d11": "实验神殿",
    "alt.d12": "观星台",
    "alt.d13": "上下文胶囊",

    "features.eyebrow": "WHY MIRACLE HARNESS",
    "features.title": "它不是又一块画布，而是项目的全景驾驶舱",
    "features.lead": "长程项目最大的敌人是「失忆」与「失序」。奇迹 Harness 让人类与 Agent 始终共享同一张项目地图，无论换对话、换模型还是换工具。",
    "feat1.title": "俯瞰全局",
    "feat1.desc": "项目目标、施工层级、季节轮回与唯一任务一屏尽览，不再迷失在碎片对话里。",
    "feat2.title": "治理文件",
    "feat2.desc": "以「砖块」组织代码与文档，记录职责、依赖与决策证据，让每个模块都有自己的上下文。",
    "feat3.title": "编排提示词",
    "feat3.desc": "写入收件箱的指令，由 Agent 在任意对话中读取执行；上下文胶囊随时打包交接。",
    "feat4.title": "控制进程",
    "feat4.desc": "四层质量门 + 伊甸园人工验收：果实只有通过验收才被接受，返工、延期与堆肥都有去处。",
    "feat5.title": "主动压缩上下文",
    "feat5.desc": "切对话、换模型、换工具时，自动把关键状态压进胶囊，新 Agent 读完即续上。",

    "domains.eyebrow": "COMPOSABLE SANDBOX",
    "domains.title": "十三个模块，不是十三个孤岛",
    "domains.lead": "每个模块都有独立页面、稳定职责和清楚边界，并通过对象引用组合成可升级、可缩放、可搜索的长程工作系统。状态标签严格区分已实现、投影、候选蓝图与长期愿景。",
    "d0.title": "中控台",
    "d0.desc": "十秒看懂项目现在在哪里，以及下一步为什么是它。",
    "d1.title": "蓝图规划台",
    "d1.desc": "先确定总图，再让每一层长出自己的施工图。",
    "d2.title": "世界树",
    "d2.desc": "看见每段对话、每次执行和每颗果实从哪里生长出来。",
    "d3.title": "天使议会",
    "d3.desc": "每个 Agent 都有身份、能力边界、任务来源和可检查履历。",
    "d4.title": "众神武库",
    "d4.desc": "能力可以自由装配，但每件武器都必须说明来源、风险和权限。",
    "d5.title": "伊甸园",
    "d5.desc": "Agent 说“完成”不算完成，证据通过验收才算。",
    "d6.title": "智慧之泉",
    "d6.desc": "把外部资料消化成有来源、能下钻、可复用的项目知识。",
    "d7.title": "戒律",
    "d7.desc": "蓝图决定建什么，戒律规定可以怎样建。",
    "d8.title": "雅典娜学宫",
    "d8.desc": "让人类在驾驭 Agent 的同时，真正理解项目和技术。",
    "d9.title": "项目金字塔",
    "d9.desc": "从终极目标缩放到一个任务、一个文件和一条证据。",
    "d10.title": "项目根系",
    "d10.desc": "让本地文件、Git 和来源关系变得可搜索、可追溯、可恢复。",
    "d11.title": "实验神殿",
    "d11.desc": "失败也要留下可复现、可比较、能指导下一次施工的价值。",
    "d12.title": "观星台",
    "d12.desc": "看见 Agent 如何行动、花费多少、哪里异常，以及怎样安全恢复。",
    "d13.title": "时光胶囊",
    "d13.desc": "压缩上下文，但永远保留回到原始证据的路。",
    "channel.console": "进入中控台",
    "channel.meeting": "Agent 会议",
    "channel.vision": "十三个模块",
    "channel.siteSource": "网站源码",
    "group.governance": "施工治理",
    "group.governance.desc": "决定建什么、怎样建、如何验收，以及怎样跨纪元恢复。",
    "group.memory": "空间与记忆",
    "group.memory.desc": "把会话、语义结构、真实文件与外部知识接成可追溯地图。",
    "group.agents": "Agent 生态",
    "group.agents.desc": "管理 Agent、能力、运行观察和可复现实验。",
    "group.human": "人类学习",
    "group.human.desc": "让使用者在长期协作中真正理解技术和决定。",
    "filter.all": "全部",
    "workspace.title": "两个跨域工作面，不计入十三个 S1 模块",
    "workspace.lead": "中控台负责全局态势，Agent 会议负责统一对话与执行入口；它们连接所有模块，但不替代任何领域的权威事实。",
    "workspace.console.in": "输入",
    "workspace.console.out": "输出",
    "workspace.meeting.title": "Agent 会议",
    "workspace.meeting.desc": "把模型接进 Mission，而不是把 Mission 困在聊天框里。",
    "workspace.meeting.in": "输入",
    "workspace.meeting.out": "输出",
    "promo.eyebrow": "A TEN-SECOND WORLD",
    "promo.title": "十秒，看见一个长程项目如何生长",
    "promo.lead": "世界树承载对话，金字塔组织施工层级，Agent 会议汇集协作；这些空间最终服从同一份 Mission、蓝图与戒律。",
    "promo.fallback": "你的浏览器暂时无法播放这支概念短片。",
    "promo.note": "默认静音循环播放，可在播放器中开启声音；宣传片仅用于观看，不提供下载入口。",
    "domains.blueprint": "模块总图",
    "status.partial": "部分已实现",
    "status.candidate": "候选蓝图",
    "status.vision": "长期愿景",
    "status.foundation": "窄基础",
    "status.projection": "只读投影",
    "status.narrow": "窄切片已实现",
    "status.pending": "尚未形成模块",
    "module.detail": "打开模块设计 →",
    "boundary.title": "四条必须守住的边界",
    "boundary.1": "Agent 会议是交互面；天使议会管理身份与委派；众神武库管理模型、API、Skill、MCP 与工具。",
    "boundary.2": "智慧之泉消化知识；众神武库注册并授权可执行能力。",
    "boundary.3": "金字塔表达语义结构；根系表达真实文件、Git 与依赖。",
    "boundary.4": "戒律在行动前判断能否做；伊甸园在行动后依据证据判断是否接受。",

    "seasons.eyebrow": "SEASONS CYCLE",
    "seasons.title": "让项目像四季一样轮回",
    "seasons.lead": "四季不是界面主题，而是蓝图、戒律、果实与上下文压缩共同遵守的项目生命周期。",
    "seasons.s1.num": "S1",
    "seasons.s1.title": "春季 · 播种",
    "seasons.s1.desc": "人类冻结本轮目标、道路、施工层级、唯一任务和验收条件。",
    "seasons.s2.num": "S2",
    "seasons.s2.title": "夏季 · 生长",
    "seasons.s2.desc": "Agent 沿已批准道路直接施工、验证并接入当前项目。",
    "seasons.s3.num": "S3",
    "seasons.s3.title": "秋季 · 收获",
    "seasons.s3.desc": "候选果实进入伊甸园，通过质量门后由人类决定接受、返工、延期或堆肥。",
    "seasons.s4.num": "S4",
    "seasons.s4.title": "冬季 · 维护",
    "seasons.s4.desc": "总结信息、更新接力胶囊、清理技术债务，决定下一轮是否分裂砖块或换壳。",

    "status.eyebrow": "CURRENT STATUS",
    "status.title": "初代原型 · 从春季走向夏季",
    "status.v": "版本",
    "status.lod": "当前纪元",
    "status.lodv": "春季建 Mission · B0 批准后进入夏季",
    "status.shell": "已点亮",
    "status.shellv": "中控台、Mission/B0、治理事件与单模型 Agent 会议窄切片",
    "status.quality": "当前边界",
    "status.qualityv": "其余模块多为只读投影、候选蓝图或长期愿景；尚无工具调用与自动改写文件",
    "status.tech": "技术栈",
    "status.path": "路线",
    "status.pathv": "让戒律、秋收、冬季代谢和上下文胶囊成为可验证闭环",

    "local.eyebrow": "LOCAL-FIRST BY DESIGN",
    "local.title": "项目记忆留在本机，外部模型只接收你发出的上下文",
    "local.l1": "Mission、蓝图、会话索引与界面状态保存在你的 Windows 设备。",
    "local.l2": "模型 API Key 使用系统安全存储，不写入会话数据库与导出记录。",
    "local.l3": "初代仅开放文本对话，不自动移动、覆盖、删除或 Git 提交项目文件。",
    "local.l4": "蓝图 B0 必须由人类批准，未获批准的道路不会伪装成已施工。",
    "local.l5": "项目文件、运行证据与 Git 历史始终是最终事实来源。",
    "alt.local": "项目根系与 Git 历史",

    "start.eyebrow": "DOWNLOAD THE FIRST SEED",
    "start.title": "下载 Windows 初代原型，从一个真实 Mission 开始",
    "start.lead": "这是 v0.1.0-alpha.1 便携体验版，目标是验证「建 Mission → 批准 B0 → 接入模型 → 保持长程上下文」这条最小道路。",
    "download.title": "Windows x64 便携版",
    "download.desc": "下载 ZIP 后解压到普通文件夹，先阅读压缩包内说明再启动。Alpha 不提供自动更新与代码签名。",
    "download.cta": "下载 v0.1.0-alpha.1",
    "download.source": "GitHub 源码与发行说明",
    "download.meta": "平台：Windows 10/11 · 架构：x64 · 渠道：Alpha · 数据：默认本地",
    "step1": "解压到你有写入权限的普通文件夹，按包内 README 启动应用。",
    "step2": "选择一个项目工作区，创建 Mission；此时纪元处于春季。",
    "step3": "在蓝图中确认目标并人工批准 B0，道路进入夏季施工。",
    "step4": "在 Agent 会议中保存兼容 OpenAI 的接口、模型与 API Key，然后开始对话。",

    "guestbook.eyebrow": "LEAVE A SEED",
    "guestbook.title": "给奇迹留下一颗种子",
    "guestbook.lead": "告诉我你想用它完成怎样的长程任务，或哪一条戒律最值得先做。留言经 Cloudflare Turnstile 验证，并限制每个来源每小时最多 3 条。",
    "guestbook.name": "你的称呼",
    "guestbook.namePlaceholder": "例如：一位长期项目的建造者",
    "guestbook.message": "留言",
    "guestbook.messagePlaceholder": "写下建议、场景或你希望一起验证的道路……",
    "guestbook.submit": "提交留言",
    "guestbook.loading": "正在连接留言板……",
    "guestbook.ready": "完成人机验证后即可提交。",
    "guestbook.verify": "请先完成人机验证。",
    "guestbook.sending": "正在播下这颗种子……",
    "guestbook.success": "留言已收到，谢谢你给奇迹一颗新种子。",
    "guestbook.unavailable": "留言板尚未完成生产密钥配置，暂时只读。",
    "guestbook.error": "暂时无法提交，请稍后再试。",
    "guestbook.rateLimited": "每小时最多留言 3 次，请稍后再来。",
    "guestbook.invalid": "请检查昵称和留言长度。",
    "guestbook.verificationError": "人机验证失败，请刷新后重试。",
    "guestbook.privacy": "隐私：不保存原始 IP；仅使用带盐 SHA-256 哈希完成一小时限频，旧限频记录会自动清理。",
    "guestbook.feedTitle": "最近的种子",
    "guestbook.refresh": "刷新",
    "guestbook.feedLoading": "正在读取留言……",
    "guestbook.feedEmpty": "还没有公开留言，欢迎种下第一颗种子。",
    "guestbook.feedError": "暂时无法读取留言。",

    "footer.tagline": "本地优先 · 模型无关 · 长程项目伴生",
    "footer.contact": "联系我",
    "footer.email": "邮箱",
    "footer.wechat": "微信"
  },

  en: {
    "brand.name": "Miracle Harness",
    "brand.sub": "MIRACLE HARNESS",
    "alt.brand": "Miracle Harness gold-green bird totem",
    "nav.features": "Why",
    "nav.domains": "Modules",
    "nav.seasons": "Seasons",
    "nav.local": "Local-first",
    "nav.start": "Get started",
    "nav.download": "Download",
    "nav.guestbook": "Guestbook",
    "nav.cta": "Download Alpha",
    "nav.github": "GitHub",
    "search.placeholder": "Search modules, responsibilities, or keywords (press /)",
    "search.empty": "No matching module. Try another keyword.",
    "search.count": "Showing {count} of 13 modules",

    "hero.eyebrow": "LONG-HORIZON AGENT HARNESS · FIRST PROTOTYPE",
    "hero.title1": "Miracle",
    "hero.title2": "Harness",
    "hero.tag": "A local-first Agent Harness for tasks that outlive a chat",
    "hero.sub": "Blueprints are the construction plans; Laws are the construction code. The World Tree holds conversations, the Pyramid structures projects, Roots absorb files, and the seasons force every epoch to reduce entropy in winter.",
    "hero.cta1": "Download the Windows prototype",
    "hero.cta2": "Read the full vision →",
    "hero.cta3": "View source on GitHub →",
    "hero.badge1": "v0.1.0-alpha.1 · Alpha",
    "hero.badge2": "Windows x64 · Portable",
    "hero.badge3": "Blueprint + Agent Meeting",
    "hero.badge4": "Sessions and project state stay local",
    "hero.alpha": "This Alpha will keep evolving. Use it for exploration, research, and co-design on non-critical projects you can recover.",
    "alt.hero": "Miracle Harness sanctuary overview",
    "alt.d1": "Blueprint Board",
    "alt.d2": "World Tree",
    "alt.d3": "Angel Council",
    "alt.d4": "Pantheon Arsenal",
    "alt.d5": "Eden",
    "alt.d6": "Well of Wisdom",
    "alt.d7": "Tablets of Law",
    "alt.d8": "Athena Academy",
    "alt.d9": "Project Pyramid",
    "alt.d10": "Project Roots",
    "alt.d11": "Experiment Temple",
    "alt.d12": "Observatory",
    "alt.d13": "Context Capsule",

    "features.eyebrow": "WHY MIRACLE HARNESS",
    "features.title": "Not another canvas — a panoramic cockpit for your project",
    "features.lead": "The greatest enemies of long-running projects are amnesia and disorder. Miracle Harness keeps the human and the agent sharing one project map — no matter how often you switch conversations, models, or tools.",
    "feat1.title": "See the big picture",
    "feat1.desc": "Goals, construction tiers, season cycles, and the single active task at a glance — never lost in fragmented chats again.",
    "feat2.title": "Govern your files",
    "feat2.desc": "Organize code and docs into bricks with responsibility, dependencies, and decision evidence — every module gets its own context.",
    "feat3.title": "Orchestrate prompts",
    "feat3.desc": "Instructions dropped into the inbox are picked up by your agent in any conversation; context capsules package the handoff.",
    "feat4.title": "Control progress",
    "feat4.desc": "Four quality gates plus Eden's human acceptance: fruit is only accepted when verified — rework, deferral, and composting all have a place.",
    "feat5.title": "Compress context actively",
    "feat5.desc": "When switching chats, models, or tools, key state is packed into capsules so the next agent picks up right where you left off.",

    "domains.eyebrow": "COMPOSABLE SANDBOX",
    "domains.title": "Thirteen modules, not thirteen islands",
    "domains.lead": "Every module has its own page, stable responsibility, and explicit boundary. Stable object references compose them into a long-horizon system that can evolve, zoom, and search. Status labels distinguish implemented work from projections, candidates, and vision.",
    "d0.title": "Command Center",
    "d0.desc": "Understand where the project is and why the next action matters in ten seconds.",
    "d1.title": "Blueprint Board",
    "d1.desc": "Set the master plan first, then let each layer grow its own construction plan.",
    "d2.title": "World Tree",
    "d2.desc": "See where every conversation, run, and accepted fruit came from.",
    "d3.title": "Angel Council",
    "d3.desc": "Give every agent an identity, capability boundary, assignment source, and inspectable record.",
    "d4.title": "Pantheon Arsenal",
    "d4.desc": "Compose capabilities freely, while declaring provenance, risk, and permission for each one.",
    "d5.title": "Eden",
    "d5.desc": "An agent saying “done” is not done; evidence must pass acceptance.",
    "d6.title": "Well of Wisdom",
    "d6.desc": "Digest outside material into sourced, drillable, reusable project knowledge.",
    "d7.title": "Laws",
    "d7.desc": "Blueprints decide what to build; Laws define how building is allowed.",
    "d8.title": "Athena Academy",
    "d8.desc": "Help humans genuinely understand the project and technology while directing agents.",
    "d9.title": "Project Pyramid",
    "d9.desc": "Zoom from the ultimate mission to one task, one file, and one piece of evidence.",
    "d10.title": "Project Roots",
    "d10.desc": "Make local files, Git, and source relations searchable, traceable, and recoverable.",
    "d11.title": "Experiment Temple",
    "d11.desc": "Even failure should remain reproducible, comparable, and useful to the next build.",
    "d12.title": "Observatory",
    "d12.desc": "See how agents act, what they spend, where they drift, and how to recover safely.",
    "d13.title": "Time Capsule",
    "d13.desc": "Compress context without ever losing the path back to original evidence.",
    "channel.console": "Open Command Center",
    "channel.meeting": "Agent Meeting",
    "channel.vision": "Thirteen modules",
    "channel.siteSource": "Site source",
    "group.governance": "Construction governance",
    "group.governance.desc": "Decide what to build, how it may be built, how it is accepted, and how an epoch recovers.",
    "group.memory": "Space and memory",
    "group.memory.desc": "Connect conversations, semantic structure, real files, and outside knowledge into a traceable map.",
    "group.agents": "Agent ecosystem",
    "group.agents.desc": "Govern agents, capabilities, runtime observation, and reproducible experiments.",
    "group.human": "Human learning",
    "group.human.desc": "Help the operator understand technology and decisions through long-term collaboration.",
    "filter.all": "All",
    "workspace.title": "Two cross-domain work surfaces, outside the thirteen S1 modules",
    "workspace.lead": "Command Center owns the global view and Agent Meeting owns the shared interaction surface. They connect every module without replacing its authoritative facts.",
    "workspace.console.in": "Input",
    "workspace.console.out": "Output",
    "workspace.meeting.title": "Agent Meeting",
    "workspace.meeting.desc": "Connect a model to the Mission instead of trapping the Mission in a chat box.",
    "workspace.meeting.in": "Input",
    "workspace.meeting.out": "Output",
    "promo.eyebrow": "A TEN-SECOND WORLD",
    "promo.title": "See a long-running project grow in ten seconds",
    "promo.lead": "The World Tree carries conversations, the Pyramid structures construction, and Agent Meeting gathers collaboration — all governed by one Mission, Blueprint, and set of Laws.",
    "promo.fallback": "Your browser cannot play this concept film right now.",
    "promo.note": "The film loops silently by default. Turn on sound in the player; no download link is provided.",
    "domains.blueprint": "Module map",
    "status.partial": "Partially implemented",
    "status.candidate": "Candidate blueprint",
    "status.vision": "Long-term vision",
    "status.foundation": "Narrow foundation",
    "status.projection": "Read-only projection",
    "status.narrow": "Narrow slice live",
    "status.pending": "Module not formed",
    "module.detail": "Open module design →",
    "boundary.title": "Four boundaries we must preserve",
    "boundary.1": "Agent Meeting is the interaction surface; Angel Council governs identity and delegation; Armory governs models, APIs, Skills, MCP, and tools.",
    "boundary.2": "Wisdom Well digests knowledge; Armory registers and authorizes executable capability.",
    "boundary.3": "Pyramid models semantic structure; Roots models real files, Git, and dependencies.",
    "boundary.4": "Laws decide whether an action may begin; Eden decides whether its evidence is acceptable afterward.",

    "seasons.eyebrow": "SEASONS CYCLE",
    "seasons.title": "Let your project cycle like the seasons",
    "seasons.lead": "The seasons are not a visual theme. They are the lifecycle shared by blueprints, laws, fruit, and context compression.",
    "seasons.s1.num": "S1",
    "seasons.s1.title": "Spring · Sow",
    "seasons.s1.desc": "The human freezes this round's goals, road, construction tier, single active task, and acceptance criteria.",
    "seasons.s2.num": "S2",
    "seasons.s2.title": "Summer · Grow",
    "seasons.s2.desc": "The agent builds along the approved road, verifies, and integrates into the current project.",
    "seasons.s3.num": "S3",
    "seasons.s3.title": "Autumn · Harvest",
    "seasons.s3.desc": "Candidate fruit enters Eden; once past the quality gates, the human decides: accept, rework, defer, or compost.",
    "seasons.s4.num": "S4",
    "seasons.s4.title": "Winter · Maintain",
    "seasons.s4.desc": "Summarize learnings, refresh the relay capsule, clear technical debt, and decide whether to split bricks or swap the shell.",

    "status.eyebrow": "CURRENT STATUS",
    "status.title": "First prototype · moving from spring into summer",
    "status.v": "Version",
    "status.lod": "Current epoch",
    "status.lodv": "Create a Mission in spring · approve B0 to enter summer",
    "status.shell": "Now lit",
    "status.shellv": "Command Center, Mission/B0, governance events, and a narrow single-model Agent Meeting slice",
    "status.quality": "Current boundary",
    "status.qualityv": "Most other modules remain read-only projections, candidates, or long-term vision; no tool calls or autonomous file edits yet",
    "status.tech": "Stack",
    "status.path": "Roadmap",
    "status.pathv": "Close the loop for Laws, autumn harvest, winter metabolism, and context capsules",

    "local.eyebrow": "LOCAL-FIRST BY DESIGN",
    "local.title": "Project memory stays local; external models receive only the context you send",
    "local.l1": "Mission, blueprint, conversation indexes, and interface state live on your Windows device.",
    "local.l2": "Model API keys use the operating system's secure storage and never enter session databases or exports.",
    "local.l3": "The first prototype only enables text chat; it does not move, overwrite, delete, or git-commit project files.",
    "local.l4": "Blueprint B0 requires human approval. An unapproved road is never presented as completed work.",
    "local.l5": "Project files, run evidence, and Git history always remain the final source of truth.",
    "alt.local": "Project roots and Git history",

    "start.eyebrow": "DOWNLOAD THE FIRST SEED",
    "start.title": "Download the Windows prototype and begin with one real Mission",
    "start.lead": "v0.1.0-alpha.1 is a portable experience build for validating the smallest road: create Mission → approve B0 → connect a model → preserve long-horizon context.",
    "download.title": "Windows x64 portable build",
    "download.desc": "Download the ZIP, extract it to a regular folder, and read the bundled instructions before launch. The Alpha has no auto-update or code signing.",
    "download.cta": "Download v0.1.0-alpha.1",
    "download.source": "GitHub source and release notes",
    "download.meta": "Platform: Windows 10/11 · Architecture: x64 · Channel: Alpha · Data: local by default",
    "step1": "Extract to a regular folder you can write to, then launch as described in the bundled README.",
    "step2": "Choose a project workspace and create a Mission; the epoch begins in spring.",
    "step3": "Confirm the goal in Blueprint and approve B0 to move the road into summer construction.",
    "step4": "In Agent Meeting, save an OpenAI-compatible endpoint, model, and API key, then start chatting.",

    "guestbook.eyebrow": "LEAVE A SEED",
    "guestbook.title": "Leave a seed for Miracle",
    "guestbook.lead": "Tell me what long-running task you want it to carry, or which Law should come first. Messages are protected by Cloudflare Turnstile and limited to three per source per hour.",
    "guestbook.name": "Your name",
    "guestbook.namePlaceholder": "For example: a long-project builder",
    "guestbook.message": "Message",
    "guestbook.messagePlaceholder": "Share a suggestion, use case, or road you want to validate together…",
    "guestbook.submit": "Leave message",
    "guestbook.loading": "Connecting to the guestbook…",
    "guestbook.ready": "Complete the verification to submit.",
    "guestbook.verify": "Please complete the verification first.",
    "guestbook.sending": "Planting this seed…",
    "guestbook.success": "Message received. Thank you for giving Miracle a new seed.",
    "guestbook.unavailable": "Production keys are not configured yet; the guestbook is read-only.",
    "guestbook.error": "Unable to submit right now. Please try again later.",
    "guestbook.rateLimited": "The limit is three messages per hour. Please return later.",
    "guestbook.invalid": "Please check the name and message lengths.",
    "guestbook.verificationError": "Verification failed. Refresh and try again.",
    "guestbook.privacy": "Privacy: raw IP addresses are never stored. Only a salted SHA-256 hash is used for the one-hour rate limit, and old rate-limit records are cleaned up.",
    "guestbook.feedTitle": "Recent seeds",
    "guestbook.refresh": "Refresh",
    "guestbook.feedLoading": "Loading messages…",
    "guestbook.feedEmpty": "No public messages yet. Plant the first seed.",
    "guestbook.feedError": "Messages are temporarily unavailable.",

    "footer.tagline": "Local-first · Model-agnostic · Companion for long projects",
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
  var moduleActiveGroup = "all";
  var moduleSearchTerm = "";

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
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    var toggle = document.getElementById("lang-toggle");
    if (toggle) toggle.textContent = lang === "zh" ? "EN" : "中文";
    try { localStorage.setItem(LS_KEY, lang); } catch (e) { /* ignore */ }

    var status = document.getElementById("guestbook-status");
    if (status) {
      var statusKey = status.getAttribute("data-status-key");
      if (statusKey && dict[statusKey] !== undefined) status.textContent = dict[statusKey];
    }
    applyModuleFilter();
    renderGuestbookMessages(guestbookItems);
  }

  function translate(key) {
    var dict = I18N[currentLang()] || I18N.zh;
    return dict[key] !== undefined ? dict[key] : key;
  }

  function applyModuleFilter() {
    var cards = document.querySelectorAll("[data-module-card]");
    if (!cards.length) return;

    var visibleCount = 0;
    for (var index = 0; index < cards.length; index++) {
      var card = cards[index];
      var group = card.getAttribute("data-group") || "";
      var haystack = (card.getAttribute("data-search") || card.textContent || "").toLocaleLowerCase();
      var groupMatches = moduleActiveGroup === "all" || group === moduleActiveGroup;
      var termMatches = !moduleSearchTerm || haystack.indexOf(moduleSearchTerm) !== -1;
      var visible = groupMatches && termMatches;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    }

    var groups = document.querySelectorAll("[data-module-group]");
    for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
      groups[groupIndex].hidden = !groups[groupIndex].querySelector("[data-module-card]:not([hidden])");
    }

    var empty = document.getElementById("module-empty");
    if (empty) empty.hidden = visibleCount !== 0;
    var searchStatus = document.getElementById("module-search-status");
    if (searchStatus) {
      searchStatus.textContent = translate("search.count").replace("{count}", String(visibleCount));
    }
  }

  function initializeModuleExplorer() {
    var search = document.getElementById("module-search");
    var filters = document.querySelectorAll("[data-module-filter]");
    if (!search && !filters.length) return;

    if (search) {
      moduleSearchTerm = search.value.trim().toLocaleLowerCase();
      search.addEventListener("input", function () {
        moduleSearchTerm = search.value.trim().toLocaleLowerCase();
        applyModuleFilter();
      });
      search.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && search.value) {
          search.value = "";
          moduleSearchTerm = "";
          applyModuleFilter();
        }
      });
    }

    for (var index = 0; index < filters.length; index++) {
      filters[index].addEventListener("click", function (event) {
        moduleActiveGroup = event.currentTarget.getAttribute("data-module-filter") || "all";
        for (var buttonIndex = 0; buttonIndex < filters.length; buttonIndex++) {
          var selected = filters[buttonIndex].getAttribute("data-module-filter") === moduleActiveGroup;
          filters[buttonIndex].classList.toggle("is-active", selected);
          filters[buttonIndex].setAttribute("aria-pressed", selected ? "true" : "false");
        }
        applyModuleFilter();
      });
    }

    document.addEventListener("keydown", function (event) {
      if (!search || event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey) return;
      var target = event.target;
      var tagName = target && target.tagName ? target.tagName.toLowerCase() : "";
      if (tagName === "input" || tagName === "textarea" || (target && target.isContentEditable)) return;
      event.preventDefault();
      search.focus();
      search.select();
    });

    applyModuleFilter();
  }

  function initializePromoVideo() {
    var video = document.getElementById("promo-video");
    if (!video || typeof window.matchMedia !== "function") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("autoplay");
      video.pause();
    }
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

  initializeModuleExplorer();
  initializePromoVideo();
  apply(currentLang());
  // 历史存档：留言板在新版首页，这里不再连留言接口（2026-10）
})();
