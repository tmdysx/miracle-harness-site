const GITHUB_VISION_URL =
  "https://github.com/tmdysx/miracle-harness/blob/main/MIRACLE_HARNESS_VISION.md";
const WINDOWS_DOWNLOAD_URL =
  "https://github.com/tmdysx/miracle-harness/releases/latest/download/Miracle-Harness-v0.1.0-alpha.1-win-x64.zip";

const requiredModuleIds = [
  "MH.COMMAND",
  "MH.LAW",
  "MH.CAPSULE",
  "MH.EDEN",
  "MH.TREE",
  "MH.PYRAMID",
  "MH.ROOT",
  "MH.WELL",
  "MH.ACADEMY",
  "MH.EXPERIMENTS",
  "MH.ANGELS",
  "MH.ARMORY",
  "MH.OBSERVATORY",
];

export const moduleCatalog = [
  {
    id: "MH.COMMAND",
    slug: "blueprint",
    name: "蓝图规划台",
    subtitle: "Mission, Blueprint & Work",
    lede: "把一个长期使命变成可批准、可施工、可验收的蓝图树，并始终给出唯一、可解释的下一步。",
    illustration: "assets/illustrations/human-planner-v1.png",
    terminology: [
      {
        term: "Mission（使命）",
        definition: "跨越多次 Session、模型切换和文件变化仍然有效的长期工作单元，保存最终成果、范围、边界、验收与停止条件。",
      },
      {
        term: "Blueprint（蓝图）",
        definition: "版本化的施工方案；B0 是总蓝图，B1/B2+ 在父层边界内逐层细化，不能用一次对话里的 Plan 代替。",
      },
      {
        term: "WorkItem（工作项）",
        definition: "由蓝图分解出的可跟踪工作；只有目标、范围、依赖、验收和停止条件完整的叶节点才可进入执行。",
      },
      {
        term: "Decision Ledger（决定账本）",
        definition: "记录关键选择、被放弃方案、依据和影响范围的长期账本，让后续 Agent 不必重新猜测旧决定。",
      },
      {
        term: "Execution Envelope（执行信封）",
        definition: "一次 Run 的不可变开工确认单，绑定准确任务、蓝图、戒律、上下文、工具、预算、权限和停止条件。",
      },
      {
        term: "Next Action（唯一下一步）",
        definition: "由 Kernel 根据权威快照计算并附带理由、阻塞与对象引用的一个推荐动作，不由页面或模型自行猜测。",
      },
    ],
    designPrinciples: [
      "蓝图规划台把长期工程的治理状态放在聊天之上：Session 可以结束，Mission、决定和验收边界不能随之消失。它先冻结塔尖，再允许子蓝图和叶任务在已批准边界内生长。",
      "模块只拥有施工意图与任务状态，不直接运行 Agent，也不替戒律授权或替伊甸园验收。Goal、Plan、Todo 只是 Engine 内单次执行的镜像和草稿，不能反向覆盖 Kernel 中的长期事实。",
    ],
    responsibility: [
      "拥有 Mission、Blueprint、WorkItem、Decision 的权威状态与版本关系。",
      "坚持先 B0 总蓝图、再 B1/B2 局部蓝图；只有边界完整的叶任务才进入执行。",
      "把目标、范围、戒律、上下文、工具、预算与停止条件封装为执行信封。",
    ],
    notResponsible: [
      "不直接运行模型、工具或文件操作，也不把聊天中的完成声明当作任务关闭。",
      "不批准适用于自己的戒律；权限判断归戒律，成果质量判断归伊甸园。",
      "不复制会话谱系、物理文件或运行轨迹的原始事实。",
    ],
    inputs: [
      "人类给出的使命种子、边界、最终成果与停止条件。",
      "戒律版本、根系文件投影、智慧之泉来源与伊甸园验收结论。",
      "执行中的决定、阻塞、技术债和冬季候选差异。",
    ],
    outputs: [
      "精确版本的 Mission 与 B0→B∞ Blueprint 树。",
      "T0→T∞ WorkItem 树、Decision Ledger、Execution Envelope 与唯一 Next Action。",
      "可供金字塔、世界树、天使议会和观星台引用的稳定 ID。",
    ],
    coreObjects: [
      "Mission",
      "Blueprint",
      "WorkItem",
      "Decision",
      "ExecutionEnvelope",
      "NextAction",
    ],
    levels: [
      "S1 是蓝图规划台；S2 展开使命、蓝图树、任务树、决定账本、执行信封和下一步。",
      "B0/B1/B2+ 表示施工意图的逐层分解，T0/T1/T2+ 表示工作的逐层分解，两者不混用。",
      "LOD0 看使命、纪元和总进度，LOD1 看蓝图/任务节点，LOD2+ 下钻决定、条件与证据引用。",
    ],
    seasons: {
      spring: "建立 Mission，审阅 B0、边界、验收条件与戒律，并由人类冻结准确版本。",
      summer: "按冻结基线拆出可执行叶任务；变更以 Decision 和新版候选记录，不悄悄改基线。",
      autumn: "读取伊甸园的接受或退回结论，只有证据满足完成定义时才关闭 WorkItem。",
      winter: "汇总偏差、技术债与失败决定，提出下一纪元蓝图差异，但不自行激活。",
    },
    upstream: ["laws", "time-capsule", "roots", "wisdom-well", "eden"],
    downstream: ["pyramid", "world-tree", "agent-council", "observatory"],
    status: {
      current: "v0.1 已真实实现本地 Workspace/Mission 建档、B0 生成与修订、精确版本批准、重启恢复，以及批准后的春入夏边界。",
      candidate: "第二层候选蓝图加入 B1/WorkItem、Decision Ledger、Execution Envelope、上下文预览和受戒律约束的下一步。",
      vision: "长期形成可缩放的 B∞/T∞ 施工网络，让每次执行、成果、证据和纪元都能沿稳定引用返回总使命。",
    },
    nextStage: "先让一个批准后的 B0 长出一个信息完整的 B1 和叶 WorkItem，并将其绑定到一次真实、受限的模型运行。",
    acceptance: [
      "重启后仍能读取同一 Mission、批准版本、Decision 与叶任务状态。",
      "未批准的蓝图版本不能启动执行，已批准版本不能被静默覆盖。",
      "运行能够证明自己绑定了准确的 Mission、Blueprint、WorkItem 和戒律版本。",
    ],
  },
  {
    id: "MH.LAW",
    slug: "laws",
    name: "戒律",
    subtitle: "Policy, Authorization & Guardrails",
    lede: "在行动发生之前回答“能不能做、做到哪里、何时必须停”，把红线、例外和人类批准变成可审计的施工规范。",
    illustration: "assets/illustrations/covenant-rules-sanctuary-v1.png",
    terminology: [
      {
        term: "Constitution（宪章）",
        definition: "Mission 不可被下层规则放宽的顶层红线，例如人类最终批准权、证据不可覆盖和唯一恢复点不可删除。",
      },
      {
        term: "RuleVersion（戒律版本）",
        definition: "带内容、修订号、哈希、批准者和生效区间的不可变规则版本；冬季提案必须到下一春季批准后才成为权威。",
      },
      {
        term: "PolicyScope（政策作用域）",
        definition: "规则适用的 Project、Agent、Tool、Path、Network 或 Run 范围；下层可以收窄权限，但不能越过上层红线。",
      },
      {
        term: "PreflightDecision（执行前决定）",
        definition: "执行信封启动或高风险调用发生前给出的 allow、deny 或 require-approval 结论，并解释命中了哪些规则。",
      },
      {
        term: "ApprovalGrant（批准凭据）",
        definition: "人类针对准确版本、范围和期限作出的授权证据，不是一句脱离对象与时间的口头同意。",
      },
      {
        term: "ExceptionGrant（例外授权）",
        definition: "对特定规则的临时、最小范围例外，必须记录申请原因、批准者、失效条件和审计事件。",
      },
    ],
    designPrinciples: [
      "戒律是施工规范而不是成果评分表，所以它在行动之前工作：先解析有效规则包，再决定允许、拒绝或请求人类批准。成果是否合格要留给伊甸园在行动后判断。",
      "规则采用版本化、分层作用域和默认最小权限设计。Agent 可以提出修订或例外，但不能批准适用于自己的规则；真正的沙盒执行由 Engine 落实，戒律负责提供可解释、可审计的治理决定。",
    ],
    responsibility: [
      "管理顶层宪章、项目规则、Agent 有效规则包与工具/路径/网络政策。",
      "解析作用域、版本与冲突，在执行信封启动前给出允许、拒绝或需批准的决定。",
      "保存例外申请、人类批准、失效时间和完整审计记录。",
    ],
    notResponsible: [
      "不评价成果是否优秀；行动后的证据与接受结论归伊甸园。",
      "Agent 不能修改适用于自己的戒律，也不能通过更换模型或工具绕过戒律。",
      "不替代操作系统沙盒；它声明政策，并由受保护的执行层落实。",
    ],
    inputs: [
      "Mission 边界、风险偏好、数据与目录敏感级别。",
      "众神武库提供的工具能力、权限需求、Provider 健康状态和版本。",
      "观星台事件、伊甸园退回原因、人工例外申请和安全事故。",
    ],
    outputs: [
      "不可变 RuleVersion、适用范围、优先级、冲突解释与有效 RuleBundle。",
      "PreflightDecision、ApprovalRequest、ExceptionGrant 与 AuditEvent。",
      "供执行层落实的最小文件、网络、工具和凭据权限。",
    ],
    coreObjects: [
      "Constitution",
      "Rule",
      "RuleVersion",
      "PolicyScope",
      "PreflightDecision",
      "ApprovalGrant",
    ],
    levels: [
      "S1 是戒律领域；S2 分为宪章、项目规则、Agent 规则、工具与路径政策、预检和例外审计。",
      "规则作用域从 Constitution → Project → Agent → Tool/Path → Run 逐层收窄；下层不能放宽上层红线。",
      "LOD0 显示当前风险与阻塞，LOD1 显示有效规则包，LOD2+ 显示规则来源、冲突推导和批准证据。",
    ],
    seasons: {
      spring: "人类审议首套戒律或冬季候选差异，解决冲突并冻结当前纪元的准确版本。",
      summer: "每次运行与高风险工具调用先做预检；例外必须有范围、期限和批准者。",
      autumn: "对照执行证据审计越权、遗漏与规则有效性，但不替伊甸园给成果打分。",
      winter: "依据事故和误报提出新增、废弃或收紧规则的候选 Diff，保留旧版本和回滚路径。",
    },
    upstream: ["blueprint", "armory", "observatory", "eden"],
    downstream: ["blueprint", "agent-council", "roots", "time-capsule"],
    status: {
      current: "v0.1 已定义戒律语义与安全边界，但尚未实现可编辑、可版本化、可运行时解析的戒律系统；当前模型会话没有工具或文件权限。",
      candidate: "第二层候选蓝图实现最小 Constitution、ProjectRule、RuleVersion、预检与人工批准链，并把准确版本绑定到执行信封。",
      vision: "长期形成可解释的政策图谱，支持分层作用域、冲突求解、临时例外、仿真检查与跨纪元安全演化。",
    },
    nextStage: "以“默认拒绝写文件与联网、显式允许纯文本模型调用”为第一套最小戒律，完成版本、批准和预检闭环。",
    acceptance: [
      "同一执行信封在同一规则版本下得到确定、可解释的预检结果。",
      "Agent 无法自行扩大权限或激活自己提出的新规则，所有例外都有人工证据。",
      "规则变更保留前后 Diff、适用范围、失效条件与可验证回滚。",
    ],
  },
  {
    id: "MH.CAPSULE",
    slug: "time-capsule",
    name: "时光胶囊",
    subtitle: "Epoch, Context & Recovery Lifecycle",
    lede: "把四季、上下文预算、压缩、代谢与恢复组织成一个有来源的纪元循环，让项目变长时仍然可继续。",
    illustration: "assets/illustrations/seasons-cycle-sanctuary-v1.png",
    terminology: [
      {
        term: "ProjectEpoch（项目纪元）",
        definition: "Kernel 管理的 Mission 级春夏秋冬生命周期；它与 Blueprint、WorkItem 和 Run 状态正交，不复制它们的状态机。",
      },
      {
        term: "Working Set（活动工作集）",
        definition: "当前叶任务正在使用的规则、决定、文件、知识和历史引用，是全部项目记忆中最小的活跃部分。",
      },
      {
        term: "Context Manifest（上下文清单）",
        definition: "发送给模型前可见、可裁剪的对象清单，记录稳定引用、版本、来源、优先级、token 估算以及被省略内容。",
      },
      {
        term: "Micro-compaction（微压缩）",
        definition: "夏季在单次 Run 的 token 压力下进行的可追溯压缩；摘要必须能返回原消息、文件、决定或工具结果。",
      },
      {
        term: "Metabolism Report（代谢报告）",
        definition: "冬季对重复、过期、孤立内容和技术债的分析，以及归档、修订或淘汰建议，不等同于自动删除。",
      },
      {
        term: "Capsule / Handoff（胶囊与交接）",
        definition: "带稳定来源和恢复清单的有界工作记忆，使新 Session、不同模型或重启后的系统能从准确状态继续。",
      },
    ],
    designPrinciples: [
      "时光胶囊的核心不是缩短文字，而是控制长期项目的活动熵：夏季只做可追溯微压缩，冬季才跨 Session 去重、归档、清债和提出下一纪元候选。原始证据可以转入冷层，但不能失去返回路径。",
      "四季属于 Kernel 的权威生命周期，模块负责上下文与恢复投影，不私自批准新蓝图或戒律。任何冬季候选都必须经过下一春季的人类版本批准，才可以成为新的执行基线。",
    ],
    responsibility: [
      "管理 ProjectEpoch、春夏秋冬转换、季节快照与当前 Working Set。",
      "建立带稳定引用、来源、版本和优先级的 Context Manifest，并管理 token 预算。",
      "执行可追溯微压缩、冬季代谢、跨会话交接与恢复演练。",
    ],
    notResponsible: [
      "不把无来源的聊天摘要升级为项目事实，也不覆盖原始会话、文件或证据。",
      "不自行批准蓝图或戒律候选，不静默删除唯一恢复点。",
      "不拥有任务、文件或运行事件的原始状态，只保存稳定引用和生命周期投影。",
    ],
    inputs: [
      "已批准的 Blueprint/Rule 版本、当前 WorkItem 与执行预算。",
      "世界树会话引用、观星台运行事件、伊甸园证据和根系检查点。",
      "人类标注的关键决定、未决问题、技术债与保留期限。",
    ],
    outputs: [
      "SeasonSnapshot、ContextManifest、Capsule、MetabolismReport 和 Handoff。",
      "可回到原文的压缩摘要、冷层引用、淘汰候选与恢复清单。",
      "下一春季可审查的蓝图/戒律候选差异，而不是自动生效的新基线。",
    ],
    coreObjects: [
      "ProjectEpoch",
      "SeasonSnapshot",
      "ContextManifest",
      "Capsule",
      "MetabolismReport",
      "Handoff",
    ],
    levels: [
      "S1 是时光胶囊；S2 展开纪元轴、Working Set、上下文清单、预算、压缩、代谢与恢复。",
      "压缩分为 Run 级夏季微压缩与 Mission 级冬季全局代谢，二者都必须保留来源。",
      "LOD0 看季节和预算，LOD1 看上下文分组与变化，LOD2+ 回到原始消息、文件、决定和证据。",
    ],
    seasons: {
      spring: "从种子或旧胶囊恢复，核验来源后装载最小上下文，并等待人类冻结新纪元基线。",
      summer: "维护 Working Set；在 token 压力下做带引用的微压缩和大结果卸载。",
      autumn: "固定果实、证据、评审与未完成项，为代谢提供可检查输入。",
      winter: "跨 Session 去重、归档、登记技术债、验证恢复点，并生成下一纪元胶囊与候选差异。",
    },
    upstream: ["blueprint", "world-tree", "roots", "eden", "observatory"],
    downstream: ["blueprint", "laws", "agent-council", "wisdom-well"],
    status: {
      current: "v0.1 已持久化批准 B0 后的春入夏边界与会话恢复，但完整季节快照、Context Manifest、秋季和冬季代谢尚未实现。",
      candidate: "候选蓝图先加入 Working Set、发送前上下文预览、预算管理、稳定引用和单次 Run 的可追溯微压缩。",
      vision: "长期实现完整四季循环、冷热分层、冬季熵减、恢复演练，以及经人类批准后才进入下一春季的自我迭代。",
    },
    nextStage: "为一次真实模型对话生成可查看、可裁剪的 Context Manifest，并在压缩前后证明每条摘要都能返回来源。",
    acceptance: [
      "上下文清单明确显示发送给模型的对象、版本、来源、优先级和 token 估算。",
      "压缩后仍可沿稳定引用回到原始内容，失败、异议和未决问题不会消失。",
      "重启或更换 Provider 后能从胶囊恢复，不把未批准候选误作当前基线。",
    ],
  },
  {
    id: "MH.EDEN",
    slug: "eden",
    name: "伊甸园",
    subtitle: "Artifact Review & Acceptance",
    lede: "让 Agent 留下的果实接受证据、Diff 和人类评审，而不是凭一句“已完成”进入项目历史。",
    illustration: "assets/illustrations/harvest-orchard-v1.png",
    terminology: [
      {
        term: "Artifact / Fruit（成果 / 果实）",
        definition: "Agent 实际留下、具有准确版本和来源的可检查结果；生成了文件不代表它已经被项目接受。",
      },
      {
        term: "EvidenceRef（证据引用）",
        definition: "指向测试、截图、Diff、日志、指标或人工观察的稳定引用，使验收结论能够回到原始证据。",
      },
      {
        term: "Evidence Bundle（证据包）",
        definition: "围绕一个准确 Artifact 版本聚合完成定义、复现步骤、测试结果、已知限制与来源的验收材料。",
      },
      {
        term: "Quality Gate（质量门）",
        definition: "从文件、模块、集成到项目逐层设置的可检查条件；低层通过不会自动证明高层完成。",
      },
      {
        term: "Review / Verdict（评审 / 结论）",
        definition: "人类或受信验证器对证据作出的接受、退回或补证据决定，COMMAND 据此关闭或重开 WorkItem。",
      },
      {
        term: "RollbackRef（回滚引用）",
        definition: "连接已接受成果与可验证文件或 Git 检查点的恢复锚点，确保集成以后仍可撤回。",
      },
    ],
    designPrinciples: [
      "伊甸园坚持“声明不等于完成”：Agent 最多提交候选成果和证据，只有准确版本通过预先冻结的质量门并产生 Verdict，任务才有资格被规划台关闭。",
      "它与戒律构成前后两道不同的门。戒律回答行动能否开始，伊甸园回答行动留下的结果能否接受；验收结论只引用证据，不改写测试、Diff、日志等原始事实。",
    ],
    responsibility: [
      "接收 Artifact，聚合测试、截图、Diff、日志、指标和来源为 Evidence Bundle。",
      "按文件级、模块级、集成级和项目级质量门执行行动后复核。",
      "记录接受、退回、补证据与集成/回滚决定，并把结论返还蓝图规划台。",
    ],
    notResponsible: [
      "不决定行动前是否允许；许可和预检归戒律。",
      "不直接关闭 WorkItem，也不把生成文件等同于已验收果实。",
      "不改写原始测试、Diff 或日志；评审必须引用可重放证据。",
    ],
    inputs: [
      "蓝图中的完成定义、验收条件和适用戒律。",
      "根系文件/Diff、观星台 Run/Tool 事件、实验指标与人工观察。",
      "Agent 提交的 Artifact Manifest、复现步骤和已知限制。",
    ],
    outputs: [
      "Artifact、EvidenceRef、Review、Verdict 与补证据要求。",
      "接受后的集成建议、检查点和回滚引用，或退回后的明确缺口。",
      "供 COMMAND 关闭/重开任务、CAPSULE 收获/代谢的权威验收结论。",
    ],
    coreObjects: [
      "Artifact",
      "EvidenceRef",
      "QualityGate",
      "Review",
      "Verdict",
      "RollbackRef",
    ],
    levels: [
      "S1 是伊甸园；S2 展开成果收件箱、证据包、质量门、评审决定与集成/回滚。",
      "验收层级从文件 → 模块 → 集成 → 项目逐层升级，低层通过不自动代表高层通过。",
      "LOD0 看待验收数量和结论，LOD1 看成果与质量门，LOD2+ 查看原始 Diff、日志和证据。",
    ],
    seasons: {
      spring: "从蓝图冻结验收标准和证据要求，避免施工结束后临时改口径。",
      summer: "持续收集候选成果和证据，但不提前宣布最终接受。",
      autumn: "执行主要收获流程：验证、复现、接受、退回或要求补证据。",
      winter: "归档已接受果实，保留失败与退回记录，把质量债务交给代谢报告。",
    },
    upstream: ["blueprint", "roots", "experiments", "observatory", "laws"],
    downstream: ["blueprint", "time-capsule", "pyramid", "athena-academy"],
    status: {
      current: "v0.1 已定义果实与证据语义，但 Artifact Inbox、质量门、秋季评审和接受/退回状态机尚未实现。",
      candidate: "第三层候选蓝图交付最小成果清单、Evidence Bundle、人工接受/退回与检查点绑定。",
      vision: "长期提供从局部 Diff 到项目级结果的分层验收、可复现实验关联和可回滚集成。",
    },
    nextStage: "选择一次真实桌面端改动作为首个 Artifact，让测试、Diff、版本和人工结论进入同一证据包。",
    acceptance: [
      "每个 Verdict 都引用准确 Artifact 版本、验收条件和不可变 EvidenceRef。",
      "未验收成果不能让 COMMAND 自动关闭任务，退回后原证据仍然可查。",
      "接受与回滚都能定位到可验证的文件/Git 检查点。",
    ],
  },
  {
    id: "MH.TREE",
    slug: "world-tree",
    name: "世界树",
    subtitle: "Conversation & Execution Graph",
    lede: "把对话、分支 Session、Subagent、运行、输入与成果连接成可搜索的谱系，让长程项目看得见自己从哪里长出来。",
    illustration: "assets/illustrations/yggdrasil-task-tree-v1.png",
    terminology: [
      {
        term: "Session（会话）",
        definition: "Engine 中一段可持久化、可重放的 Agent 交互记录；一个 Mission 可以有多个 Session，但不能依赖其中一个聊天历史充当全部记忆。",
      },
      {
        term: "RunBinding（运行绑定）",
        definition: "把 Session/Run 与准确 Mission、WorkItem 和 Execution Envelope 连接起来的稳定关系。",
      },
      {
        term: "RelationEdge（关系边）",
        definition: "记录对话、任务、Agent、输入文件、工具、成果与证据之间关系及其来源事件的领域事实。",
      },
      {
        term: "LineageNode（谱系节点）",
        definition: "世界树中的可寻址对象投影，可代表主线程、分支、Subagent、Run 或成果，并保留稳定 ID。",
      },
      {
        term: "Fork / Subagent Lineage（分支谱系）",
        definition: "记录子会话从哪里分出、为哪个任务服务、如何汇报和回到主线的关系，而不是另开无边界主任务。",
      },
      {
        term: "Conversation Projection（会话投影）",
        definition: "由 append-only Session 事件确定性生成的可搜索、可折叠视图；界面布局本身不是权威历史。",
      },
    ],
    designPrinciples: [
      "世界树把长程工作的情节记忆做成关系图，但不抢夺原始事实：消息和运行事件仍在 Engine Session log，任务状态仍在 COMMAND，世界树只拥有可追溯的 RelationEdge 与谱系投影。",
      "关系采用稳定 ID 和来源事件，而不是标题、路径或画布坐标。这样用户可以把复杂枝叶折叠、缩放或重新布局，同时仍能从成果回到产生它的对话、任务、文件和证据。",
    ],
    responsibility: [
      "投影当前 Mission 的主对话、分支 Session、fork 来源与 Subagent 汇报关系。",
      "建立 Conversation、WorkItem、Run、ExecutionEnvelope、文件、成果和证据之间的稳定 RelationEdge。",
      "支持按时间、任务、Agent、引用和关系路径检索历史。",
    ],
    notResponsible: [
      "不拥有任务状态或关闭决定；这些事实归蓝图规划台。",
      "不改写 append-only Session 事件，也不把可视化布局当作权威关系。",
      "不替代观星台的运行诊断或根系的物理文件索引。",
    ],
    inputs: [
      "DSH Session、message、fork、subagent 和 durable event。",
      "COMMAND 的 WorkItem/Envelope 引用、ROOT 的 FileRef 与 EDEN 的 ArtifactRef。",
      "Agent 会议的上下文选择、模型绑定与交接关系。",
    ],
    outputs: [
      "RelationEdge、RunBinding、LineageNode 与可重放 Conversation Projection。",
      "从任意对话节点返回任务、输入、工具、输出、证据和父分支的路径。",
      "供时光胶囊选择上下文、金字塔缩放与全局搜索使用的关系索引。",
    ],
    coreObjects: [
      "SessionRef",
      "RelationEdge",
      "RunBinding",
      "LineageNode",
      "ConversationProjection",
      "SearchResult",
    ],
    levels: [
      "S1 是世界树；S2 展开主线程、分支 Session、Run 绑定、谱系和会话搜索。",
      "关系可从 Mission → Session → Turn/Run → Tool/Artifact 逐层展开，但原始事件仍保存在执行日志。",
      "LOD0 看主干和活跃分支，LOD1 看节点/边，LOD2+ 重放原始消息与事件证据。",
    ],
    seasons: {
      spring: "从种子或旧胶囊恢复主干，标出继承、废弃和待确认的历史分支。",
      summer: "随着每次对话、fork 和运行追加关系；任何连接都保留来源事件。",
      autumn: "把被验收的成果和决定接回产生它们的对话与任务路径。",
      winter: "折叠低价值枝叶、生成可追溯摘要和冷层索引，但不删除原始谱系。",
    },
    upstream: ["blueprint", "agent-council", "observatory", "roots", "eden"],
    downstream: ["time-capsule", "pyramid", "wisdom-well", "athena-academy"],
    status: {
      current: "v0.1 提供明确标注的只读会话/任务投影与 transcript 重放；真实关系图、跨分支谱系和会话搜索尚未实现。",
      candidate: "候选蓝图先建立 Session↔WorkItem↔Run 的稳定绑定和可重放节点，再接入分支与文件/成果关系。",
      vision: "长期成为可像图片一样缩放、折叠、搜索和回溯的执行世界树，覆盖多 Agent 会议与跨纪元谱系。",
    },
    nextStage: "为现有单模型 Session 建立 append-only RelationEdge，并从界面上的一次消息下钻到绑定的 B0 和运行事件。",
    acceptance: [
      "每条关系都能指出来源事件和稳定对象 ID，重启后不因标题或布局变化而断裂。",
      "世界树显示的任务状态始终来自 COMMAND，不产生第二份可写状态。",
      "从成果可回溯至对话/运行，从对话可前往输入、输出和证据。",
    ],
  },
  {
    id: "MH.PYRAMID",
    slug: "pyramid",
    name: "金字塔",
    subtitle: "Semantic Project Topology",
    lede: "用 S、B/T 与 LOD 三条坐标轴组织项目语义，从塔尖总使命缩放到小蓝图、任务、文件和证据。",
    illustration: "assets/illustrations/egypt-project-pyramid-v2.png",
    terminology: [
      {
        term: "S Axis（系统所有权层级）",
        definition: "S0 中控台、S1 领域、S2 工作面与 S3+ 具体能力的系统结构，回答“这项事实或能力属于哪里”。",
      },
      {
        term: "B/T Axis（施工分解层级）",
        definition: "B0→B∞ 蓝图与 T0→T∞ WorkItem 的两棵施工树，回答“计划和工作被分到了哪一层”。",
      },
      {
        term: "LOD（显示分辨率）",
        definition: "同一事实从全景摘要、节点卡片到原始证据的展示密度；缩放不会改变对象的版本、权限或状态。",
      },
      {
        term: "Stable UID（稳定标识）",
        definition: "不随标题、路径、模型或画布位置变化的对象身份，使跨模块引用和长期搜索不会断裂。",
      },
      {
        term: "SemanticNode（语义节点）",
        definition: "对 Mission、模块、蓝图、任务、文件或成果在项目意义结构中的投影，不等同于物理目录。",
      },
      {
        term: "DependencyEdge（依赖边）",
        definition: "说明模块、蓝图、任务和成果在语义上的前置、消费或影响关系，并可下钻到权威来源。",
      },
    ],
    designPrinciples: [
      "金字塔把“系统归属”“施工层级”和“视觉缩放”严格拆成 S、B/T、LOD 三条坐标轴，避免用户缩放页面时误以为项目状态或权限也发生了变化。",
      "它是一张共享事实的语义地图，而不是文件管理器或第二套任务数据库。节点通过稳定 UID 引用 COMMAND、ROOT、TREE 和 EDEN 的权威对象，因此能从塔尖连续下钻，也能从局部结果安全返回总使命。",
    ],
    responsibility: [
      "投影 S0→S1→S2+ 的系统/领域结构，以及 B0→B∞、T0→T∞ 的施工语义层级。",
      "为模块、蓝图、任务、成果与依赖分配稳定 UID，并提供多分辨率视图。",
      "显示语义依赖和上下文关系，让用户从全景连续下钻或返回。",
    ],
    notResponsible: [
      "不移动、重命名或删除真实文件；物理目录、Git 和依赖归根系。",
      "不拥有蓝图或任务状态，只投影 COMMAND 的权威事实。",
      "视觉缩放不改变对象权限、版本或完成状态。",
    ],
    inputs: [
      "COMMAND 的 Mission、Blueprint、WorkItem 与 Decision。",
      "十三领域目录、ROOT FileRef、TREE RelationEdge 和 EDEN Artifact。",
      "人类给出的语义归类、依赖修正与显示偏好。",
    ],
    outputs: [
      "SemanticNode、StableUID、BlueprintProjection、WorkProjection 与 DependencyEdge。",
      "LOD0 全景、LOD1 节点卡片和 LOD2+ 原始引用入口。",
      "供中控台、全局搜索和上下文选择使用的统一语义地图。",
    ],
    coreObjects: [
      "SemanticNode",
      "StableUID",
      "BlueprintProjection",
      "WorkProjection",
      "DependencyEdge",
      "LODView",
    ],
    levels: [
      "S 轴表示所有权：S0 中控台 → S1 领域 → S2 工作面 → S3+ 对象。",
      "B/T 轴表示施工分解：总蓝图/任务根向可执行叶节点生长。",
      "LOD 轴只改变信息密度：LOD0 全景、LOD1 关系、LOD2+ 原始事实；三轴保持正交。",
    ],
    seasons: {
      spring: "呈现种子、B0 和领域边界，帮助人类确认新纪元从塔尖向哪一层施工。",
      summer: "随真实蓝图和任务增长投影新节点、依赖和状态，不预先铺满空层。",
      autumn: "把果实和验收结论挂回对应蓝图/任务，显示哪些层真正闭环。",
      winter: "标出废弃层、重复节点和技术债，保留旧纪元地图并生成下一版候选拓扑。",
    },
    upstream: ["blueprint", "world-tree", "roots", "eden"],
    downstream: ["time-capsule", "observatory", "athena-academy", "wisdom-well"],
    status: {
      current: "v0.1 只有明确标注的只读金字塔投影；稳定语义 UID、真实依赖图和连续 LOD 缩放尚未实现。",
      candidate: "候选蓝图先投影 B0、一个 B1、一个叶 WorkItem 及其文件/运行/果实引用，并统一三条坐标轴。",
      vision: "长期提供像地图或图片一样的平移、缩放、搜索和跨域跳转，从 Mission 全景直达一条证据。",
    },
    nextStage: "用同一批 Kernel 对象生成 LOD0 总览与 LOD1 节点视图，证明缩放没有复制或改写状态。",
    acceptance: [
      "S、B/T、LOD 三轴在数据模型和界面标签中不混用。",
      "标题、路径或布局变化后稳定 UID 和关系仍然有效。",
      "任意投影状态都能追溯到 COMMAND、ROOT、TREE 或 EDEN 的权威来源。",
    ],
  },
  {
    id: "MH.ROOT",
    slug: "roots",
    name: "根系",
    subtitle: "Repository Explorer & Git",
    lede: "扎进本地仓库、Git、物理文件与依赖，提供可解释的搜索和恢复引用，但默认不替用户整理或删除文件。",
    illustration: "assets/illustrations/git-roots-v1.png",
    terminology: [
      {
        term: "Workspace（工作区）",
        definition: "当前 Mission 绑定的真实本地项目目录，是文件内容和目录结构的权威来源，而不是 Kernel 数据库的副本。",
      },
      {
        term: "FileRef（文件引用）",
        definition: "带稳定 UID、当前路径、类型、哈希和更新时间的文件索引记录；路径改变后身份仍可追踪。",
      },
      {
        term: "Content Hash（内容哈希）",
        definition: "用于识别准确文件版本、重命名与重复内容的摘要，是追溯上下文和证据版本的重要锚点。",
      },
      {
        term: "GitBinding（Git 绑定）",
        definition: "把文件或治理检查点连接到仓库、分支、提交和工作树状态的引用，不复制 Git 历史。",
      },
      {
        term: "ModuleBinding（模块投影绑定）",
        definition: "文件到十三领域的可解释分类，记录规则版本、理由、置信度和人工修正；它只建立索引，不移动文件。",
      },
      {
        term: "Checkpoint Projection（检查点投影）",
        definition: "ROOT 对 Kernel 检查点中的 Git 锚点和文件恢复信息的显示；检查点本身仍由 Kernel 统一拥有。",
      },
    ],
    designPrinciples: [
      "根系遵守“先索引、后建议、经授权再变更”。真实文件系统与 Git 是物理事实源，模块默认只读扫描并建立 FileRef、哈希、依赖和风险投影，不因自动分类而改名、移动或删除用户文件。",
      "稳定身份不绑定路径，搜索也不只依赖向量召回。精确路径、全文、Git、来源和权限过滤始终保留；语义或向量检索只是可选补充，并且每个结果都必须回到真实文件版本。",
    ],
    responsibility: [
      "按忽略规则只读扫描 Workspace，建立稳定 FileRef、内容哈希、类型和更新时间索引。",
      "提供文本/图片/PDF 预览、上下文勾选、依赖图、Git 分支/Diff/工作树风险。",
      "把文件可解释地投影到十三领域，并保存 Git 锚点与检查点投影。",
    ],
    notResponsible: [
      "默认不自动移动、重命名或删除用户文件，也不把向量相似度当作权威路径。",
      "不拥有项目的语义蓝图；金字塔负责语义地图，COMMAND 负责任务状态。",
      "不绕过戒律读取敏感路径或扩大写入范围。",
    ],
    inputs: [
      "真实文件系统、Git repository、忽略规则、LSP/依赖信息与用户选择。",
      "戒律提供的可读/可写范围和 COMMAND 提供的任务上下文。",
      "文件路径变化、内容哈希、Diff、提交与恢复验证结果。",
    ],
    outputs: [
      "RepositoryNode、FileRef、GitBinding、DependencyRef 和 CheckpointProjection。",
      "精确路径/文本搜索结果、可选语义召回、预览和上下文选择清单。",
      "供金字塔、世界树、伊甸园和时光胶囊引用的物理事实索引。",
    ],
    coreObjects: [
      "RepositoryNode",
      "FileRef",
      "GitBinding",
      "DependencyRef",
      "FileSelection",
      "CheckpointProjection",
    ],
    levels: [
      "S1 是根系；S2 展开工作区扫描、文件索引、预览选择、模块投影、Git 状态和检查点。",
      "物理层级从 Workspace → Repository → Directory/File → Chunk/Reference 展开。",
      "LOD0 看仓库健康与规模，LOD1 看目录/依赖，LOD2+ 看内容、Diff、哈希和 Git 原始证据。",
    ],
    seasons: {
      spring: "扫描工作区、确认忽略/敏感范围、记录初始 Git 状态和恢复锚点。",
      summer: "增量更新文件、依赖和 Diff 索引，为每次运行提供显式上下文选择。",
      autumn: "固定成果对应的文件版本、测试与 Git 证据，支持伊甸园验收。",
      winter: "生成重复、过期、孤立和技术债候选；任何归档/删除先展示影响、Diff 与回滚。",
    },
    upstream: ["laws", "blueprint", "armory"],
    downstream: ["pyramid", "world-tree", "eden", "time-capsule", "wisdom-well"],
    status: {
      current: "v0.1 提供明确标注的只读根系投影与本地 Workspace 绑定；真实文件索引、依赖图、Git 工作面和向量检索尚未实现。",
      candidate: "第二层候选蓝图先交付遵守忽略规则的只读扫描、FileRef、文本预览、Git 状态和发送前文件勾选。",
      vision: "长期形成可搜索的本地根网，结合精确检索、可选向量召回、依赖分析、检查点和受治理的冬季文件代谢。",
    },
    nextStage: "只读扫描一个已授权 Workspace，为文件建立稳定 ID/哈希，并把显式选择安全地送入一次模型上下文。",
    acceptance: [
      "扫描严格遵守忽略规则与戒律，默认不会写入、移动或删除文件。",
      "文件改名后可通过稳定 ID/哈希保持关系；内容变化能显示新旧版本。",
      "每个搜索结果和上下文片段都能返回精确路径、版本与选取原因。",
    ],
  },
  {
    id: "MH.WELL",
    slug: "wisdom-well",
    name: "智慧之泉",
    subtitle: "Knowledge Ingestion & Retrieval",
    lede: "消化论文、网页、仓库、数据集与外部 Skill 的知识来源，保留许可证、版本、引用和可信度。",
    illustration: "assets/illustrations/wisdom-well-v1.png",
    terminology: [
      {
        term: "ContextResource（上下文资源）",
        definition: "不同本地或外部 Provider 统一返回的 Miracle 知识对象，包含内容层级、来源、版本、许可和稳定引用。",
      },
      {
        term: "Source Registry（来源登记）",
        definition: "记录论文、网页、仓库、数据集、API 或外部 Skill 的原始位置、固定版本和使用状态。",
      },
      {
        term: "Provenance（来源链）",
        definition: "从摘要或检索片段返回原文、哈希、许可证、抽取步骤与引用关系的可审计链路。",
      },
      {
        term: "Ingestion Queue（摄取队列）",
        definition: "对资源执行解析、抽取、摘要、索引和失败重试的可跟踪流程，不把未完成处理伪装成可用知识。",
      },
      {
        term: "Hierarchical Catalog（分层目录）",
        definition: "以 L0 摘要、L1 概览、L2 原文组织同一资源，便于按 token 预算逐级展开而不丢失出处。",
      },
      {
        term: "Retrieval（检索）",
        definition: "结合目录、关键词、可选语义召回和重排寻找相关资源，并在返回前应用来源、许可与权限过滤。",
      },
    ],
    designPrinciples: [
      "智慧之泉把“找到资料”和“可信地使用资料”视为同一件事：任何摘要或检索结果都必须带来源、版本、许可证和回到原文的路径，外部知识不会仅凭模型总结升级为项目事实。",
      "模块采用 Provider 中立、本地优先的 ContextResource 契约。可选外部服务可以替换摄取或检索实现，但不能绑架 Mission 数据；可执行 Skill 只在这里作为知识来源登记，实际启用与权限仍归众神武库。",
    ],
    responsibility: [
      "登记外部来源、许可证、固定版本、哈希、可信度和完整 provenance。",
      "编排解析、抽取、摘要与索引，提供 L0 摘要、L1 概览、L2 原文。",
      "组合目录浏览、关键词、语义召回与重排，并把知识关联到 Mission、任务、文件和成果。",
    ],
    notResponsible: [
      "不把网络摘要或模型推断直接当作项目权威事实，引用必须回到来源。",
      "不负责启用或授权可执行 Skill；可执行能力归众神武库和戒律。",
      "不取代根系的本地物理文件/Git 索引。",
    ],
    inputs: [
      "经允许的网页、论文、仓库、数据集、API、附件和 Skill 文档。",
      "来源许可证、抓取时间、固定版本/哈希、解析器输出和人工可信度标注。",
      "Mission/WorkItem 查询、ROOT 本地资源引用与检索反馈。",
    ],
    outputs: [
      "ContextResource、SourceRecord、Provenance、LicenseRef、IngestionJob 与 RetrievalHit。",
      "分层摘要、原文引用、关系边和可裁剪的上下文候选。",
      "供 COMMAND 规划、ACADEMY 学习和 CAPSULE 上下文装载的有源知识。",
    ],
    coreObjects: [
      "ContextResource",
      "SourceRecord",
      "Provenance",
      "LicenseRef",
      "IngestionJob",
      "RetrievalHit",
    ],
    levels: [
      "S1 是智慧之泉；S2 展开来源登记、许可/谱系、摄取队列、分层目录、检索和关系。",
      "内容分辨率采用 L0 摘要 → L1 概览 → L2 原文/片段，并始终保留稳定引用。",
      "LOD0 看来源覆盖与健康，LOD1 看资源卡和关系，LOD2+ 查看原文、许可、版本和提取证据。",
    ],
    seasons: {
      spring: "为新使命登记关键来源、许可和可信度，确定允许联网与摄取的边界。",
      summer: "按任务增量摄取、检索和反馈，发送前显示哪些外部内容进入模型。",
      autumn: "核验成果引用是否准确、可访问、版本固定，并把有用来源关联到果实。",
      winter: "去重、标记失效来源、更新索引和保留策略，旧材料进入冷层而不丢 provenance。",
    },
    upstream: ["laws", "roots", "armory", "blueprint"],
    downstream: ["blueprint", "athena-academy", "time-capsule", "experiments"],
    status: {
      current: "v0.1 尚未实现外部知识摄取、来源目录或向量检索；模型对话也没有自动 Web、Skill 或 MCP 上下文。",
      candidate: "候选蓝图先实现本地 Source Registry、许可/哈希、L0/L1/L2 文本资源与精确关键词检索，再评估可选 Provider。",
      vision: "长期成为可替换 Provider 的本地优先知识层，支持多模态摄取、混合检索、重排、可信度和跨纪元项目消化。",
    },
    nextStage: "摄取一份固定版本的公开文档，生成带许可证和段落引用的分层资源，并把用户选择的片段送入上下文预览。",
    acceptance: [
      "任何摘要和检索命中都能返回原始来源、固定版本/时间、许可和精确片段。",
      "未授权网络与可执行 Skill 不会因“知识摄取”名义被启用。",
      "替换检索 Provider 不改变 Miracle 的 ContextResource 契约和稳定引用。",
    ],
  },
  {
    id: "MH.ACADEMY",
    slug: "athena-academy",
    name: "雅典娜学宫",
    subtitle: "Human Learning Workspace",
    lede: "把项目中的 AI、代码和技术栈翻译成人类能理解、能质疑、能复习的学习路径，让人始终掌握方向盘。",
    illustration: "assets/illustrations/athena-learning-academy-v1.png",
    terminology: [
      {
        term: "Concept Inbox（概念收件箱）",
        definition: "从当前 Mission 中收集人类尚未理解、需要解释或验证的术语与技术决定，不自动标记为已掌握。",
      },
      {
        term: "Glossary Entry（术语卡）",
        definition: "带来源、白话解释、工程含义和相关对象引用的学习条目，帮助人理解项目自己的技术语言。",
      },
      {
        term: "Learning Path（学习路径）",
        definition: "围绕当前 Mission 目标和前置知识排列的渐进学习序列，避免把所有 AI 知识一次性灌给用户。",
      },
      {
        term: "Study Note（学习笔记）",
        definition: "人类保存的例子、疑问、理解和反驳，属于学习材料，不自动成为戒律、决定或项目事实。",
      },
      {
        term: "Knowledge Check（理解检查）",
        definition: "用自测、复述或小任务检查概念是否真正掌握，并记录待复习项，而不是以阅读次数推断理解。",
      },
      {
        term: "Human Annotation（人类注释）",
        definition: "人类对概念、来源或 Agent 解释添加的判断与上下文，必须与模型生成内容和权威治理事实区分。",
      },
    ],
    designPrinciples: [
      "雅典娜学宫服务的是人类理解，而不是替 Agent 增加一份隐形记忆。神话名称降低认知门槛，白话解释、工程术语、来源和对象引用则确保用户能够质疑并验证系统。",
      "学习采用与当前 Mission 相关的渐进披露：先解释眼前决定所需的概念，再沿学习路径展开。学习笔记与掌握状态属于人类，不能未经批准变成戒律、蓝图或模型可用的权威事实。",
    ],
    responsibility: [
      "收集尚未理解的概念，建立带来源的术语卡、示例和项目语境。",
      "为当前 Mission 组织学习路径、个人笔记、问题、自测与复习状态。",
      "把 Agent 的技术决定解释为可验证的因果、权衡与替代方案。",
    ],
    notResponsible: [
      "人类学习笔记不会自动成为项目事实、蓝图或 Agent 戒律。",
      "不替代智慧之泉的来源治理，也不替代伊甸园的成果验收。",
      "不以分数或术语数量冒充理解，关键结论必须能回到来源和项目实例。",
    ],
    inputs: [
      "项目中出现的术语、代码、架构决定、失败原因和人类问题。",
      "智慧之泉的来源、根系文件示例、实验结果与伊甸园评审反馈。",
      "人类自评、学习目标、笔记、知识检查和复习反馈。",
    ],
    outputs: [
      "ConceptCard、GlossaryTerm、LearningPath、StudyNote 与 KnowledgeCheck。",
      "带来源的简明解释、项目内示例、待追问清单和复习节奏。",
      "供人类决策使用的理解证据，而不是自动执行指令。",
    ],
    coreObjects: [
      "ConceptCard",
      "GlossaryTerm",
      "LearningPath",
      "StudyNote",
      "KnowledgeCheck",
      "ReviewQueue",
    ],
    levels: [
      "S1 是雅典娜学宫；S2 展开概念收件箱、术语表、学习路径、笔记和知识检查。",
      "学习路径从 Mission 目标 → 当前技术主题 → 概念 → 项目实例 → 自测逐层展开。",
      "LOD0 看学习地图和阻塞，LOD1 看概念卡，LOD2+ 查看来源、代码例子、问题和个人笔记。",
    ],
    seasons: {
      spring: "识别新纪元必须理解的概念与决策，建立最短学习路径。",
      summer: "从真实工作捕获困惑、解释和例子，安排轻量自测与复习。",
      autumn: "用成果评审反查人类是否理解关键权衡，补齐错误心智模型。",
      winter: "合并重复笔记、标记过期资料、保留成长记录并规划下一纪元学习种子。",
    },
    upstream: ["wisdom-well", "roots", "experiments", "eden", "blueprint"],
    downstream: ["blueprint", "laws", "time-capsule"],
    status: {
      current: "v0.1 尚未实现持久化概念卡、学习路径或知识检查；网站和构想文档目前只承担公开解释。",
      candidate: "候选蓝图从与当前 B1 绑定的概念收件箱、来源化术语卡和个人 Markdown 笔记开始。",
      vision: "长期形成以项目为教材的人机共学空间，能缩放技术栈、追踪理解变化并帮助人类审查 Agent 决策。",
    },
    nextStage: "围绕首个 B1 自动提出三个待理解概念，由人类选择其一，生成带来源、代码位置和自测题的概念卡。",
    acceptance: [
      "每张概念卡至少有来源、项目内实例、简明解释和人类可编辑笔记。",
      "学习内容不会自动改写蓝图、戒律或项目事实。",
      "删除/更新来源时能提示受影响的卡片和待复核结论。",
    ],
  },
  {
    id: "MH.EXPERIMENTS",
    slug: "experiments",
    name: "实验神殿",
    subtitle: "Experiment Registry & Evaluation",
    lede: "把真正的实验与普通工具调用分开，保存假设、数据、配置、种子、指标、失败和复现命令。",
    illustration: "assets/illustrations/renaissance-alchemy-experiment-lab-v1.png",
    terminology: [
      {
        term: "Hypothesis（假设）",
        definition: "运行前登记、能够被结果支持或反驳的明确问题与预期判断，避免看到结果后倒推目标。",
      },
      {
        term: "Config Fingerprint（配置指纹）",
        definition: "由模型、代码、参数、环境和依赖版本生成的准确配置身份，用于判断两次运行是否真正可比较。",
      },
      {
        term: "Dataset Version（数据版本）",
        definition: "实验输入、划分、过滤规则与哈希的固定引用，使指标不会脱离准确数据集解释。",
      },
      {
        term: "Experiment Run（实验运行）",
        definition: "绑定假设、配置、数据、随机种子、资源消耗和原始产物的一次可复现运行；普通工具调用不自动属于实验。",
      },
      {
        term: "Metric Definition（指标定义）",
        definition: "在比较前说明计算方法、方向、聚合规则和适用范围的评价契约，不只保存一个脱离口径的数字。",
      },
      {
        term: "Reproduction Command（复现入口）",
        definition: "连同环境与输入引用重新运行实验的明确步骤或命令，是成果进入可复现结论的最低门槛之一。",
      },
    ],
    designPrinciples: [
      "实验神殿设置明确准入门槛：只有绑定假设、准确输入、配置指纹、结果和复现入口的运行才叫实验。这样观星台中的普通 Run 和工具调用不会被包装成科学证据。",
      "模块保留失败、负结果和不确定性，并要求指标口径先于比较。它拥有实验记录与比较，不替伊甸园接受成果，也不让一次漂亮数字直接改写蓝图或戒律。",
    ],
    responsibility: [
      "预注册 Hypothesis、判断标准、数据版本、配置指纹、环境和随机种子。",
      "记录可重复 ExperimentRun、原始指标、资源消耗、失败与完整产物。",
      "生成公平的基线、消融、敏感性比较和由原始结果派生的报告。",
    ],
    notResponsible: [
      "普通模型回合或工具调用不自动成为实验；缺少配置、输入、结果和复现命令的运行不入账。",
      "不挑选对自己有利的指标，也不覆盖失败、异常值或无效实验。",
      "不替代伊甸园的项目成果验收；实验结论仍需绑定目标和证据。",
    ],
    inputs: [
      "预注册假设、评价问题、数据集/划分、配置、环境与资源预算。",
      "众神武库的模型/工具版本、观星台运行事实和根系代码/Git 版本。",
      "原始指标、日志、产物、失败分类和人工复核。",
    ],
    outputs: [
      "Hypothesis、ExperimentConfig、DatasetRef、ExperimentRun 与 MetricDefinition。",
      "Comparison、ReproductionRecipe、失败档案和可追溯 Report。",
      "供 COMMAND 决策、EDEN 验收、ACADEMY 学习的可复现实证。",
    ],
    coreObjects: [
      "Hypothesis",
      "DatasetRef",
      "ExperimentConfig",
      "ExperimentRun",
      "MetricDefinition",
      "ComparisonReport",
    ],
    levels: [
      "S1 是实验神殿；S2 展开假设、数据/配置、实验运行、指标、比较和报告。",
      "实验层级从研究问题 → 假设 → 运行组 → 单次 Run → 原始产物/指标展开。",
      "LOD0 看实验矩阵与结论，LOD1 看运行比较，LOD2+ 查看命令、环境、日志和原始值。",
    ],
    seasons: {
      spring: "预注册问题、假设、成功/失败判断、基线和预算，避免看完结果再改目标。",
      summer: "执行可重复运行，实时记录版本、配置、资源和失败，不隐藏负结果。",
      autumn: "核验指标定义、比较公平性与复现，形成可提交伊甸园的证据。",
      winter: "归档无效配置、提炼失败模式、保留最佳基线和下一轮实验候选。",
    },
    upstream: ["blueprint", "roots", "armory", "observatory", "wisdom-well"],
    downstream: ["eden", "athena-academy", "time-capsule", "blueprint"],
    status: {
      current: "v0.1 尚未实现实验登记、评测或对照系统；现有模型对话不应被宣传为可复现实验。",
      candidate: "后续候选蓝图先支持手工登记假设、配置指纹、一个可重放命令和原始指标，再增加批量执行。",
      vision: "长期成为模型、Agent、Skill 和实现方案的可复现评测层，支持公平对照、消融、失败复用与证据出版。",
    },
    nextStage: "用桌面端一次可重复 smoke run 建立最小实验记录，固定提交、环境、命令、预期和原始结果。",
    acceptance: [
      "换一台受支持机器可按记录复现运行或明确解释不可复现原因。",
      "报告中的每个数字都能返回 MetricDefinition 和原始结果。",
      "失败运行与不支持假设的结果不会被删除或从比较中静默排除。",
    ],
  },
  {
    id: "MH.ANGELS",
    slug: "agent-council",
    name: "天使议会",
    subtitle: "Agent Registry & Delegation",
    lede: "管理 Agent 身份、能力、角色装配、任务指派与交接，让多 Agent 协作有边界、有谱系，而不是人数表演。",
    illustration: "assets/illustrations/agent-registry-council-v1.png",
    terminology: [
      {
        term: "AgentProfile（Agent 档案）",
        definition: "记录 Agent 的稳定身份、来源、生命周期和责任边界；它描述“谁在工作”，不等于底层 Agent Loop。",
      },
      {
        term: "CapabilityProfile（能力画像）",
        definition: "对 Agent 可用模型、Skill、工具、限制和适用任务的声明，实际能力仍需从众神武库和健康状态核验。",
      },
      {
        term: "Preset（角色装配）",
        definition: "为编码、研究、验证等角色组合 Agent、模型与能力的可版本化模板，不会自动获得超出戒律的权限。",
      },
      {
        term: "Assignment（任务指派）",
        definition: "把准确 WorkItem、职责、交付物、截止或停止条件分派给一个 Agent 的治理记录。",
      },
      {
        term: "Subagent Lineage（子 Agent 谱系）",
        definition: "记录受治理分支 Agent 的父级、任务范围、Session 和汇报关系，防止子 Agent 自行开启第二条主线。",
      },
      {
        term: "Performance Record（执行评价）",
        definition: "依据观星台轨迹和伊甸园 Verdict 形成的适用范围、完成质量与失败模式记录，不是模型自我评分。",
      },
    ],
    designPrinciples: [
      "天使议会把“Agent 是谁、被派去做什么”与“Agent 怎样推理和调用工具”分开。它治理身份、装配与委派，复用 Engine 的 Agent Registry、Session fork 和 Subagent 能力，不重新实现 Agent Loop 或沙盒。",
      "多 Agent 的价值来自可解释分工而非数量。每次指派绑定准确 WorkItem 和边界，能力从武库装配、权限由戒律裁决、谱系写入世界树、表现依据可重放证据评价。",
    ],
    responsibility: [
      "登记 Agent 身份、来源、生命周期、能力限制和适用工作类型。",
      "把模型、Skill、工具和戒律装配为 Preset，并将明确 WorkItem 指派给 Agent。",
      "管理受治理的 Subagent 分支、会议角色、交接关系和可证据化的表现记录。",
    ],
    notResponsible: [
      "不重写 Agent Loop、Session fork 或底层执行引擎。",
      "Agent 不能给自己分配更高权限、改变 Mission，或宣布自己的成果已验收。",
      "不把模型品牌当作能力证明；能力必须由版本、限制与测试描述。",
    ],
    inputs: [
      "COMMAND 的 WorkItem/Envelope、LAW 有效规则包与人类委派决定。",
      "ARMORY 的模型/Skill/Tool 能力和 Provider 健康状态。",
      "TREE 的谱系、OBSERVATORY 的运行证据与 EDEN 的质量结论。",
    ],
    outputs: [
      "AgentProfile、CapabilityProfile、Preset、Assignment 与 SubagentRelation。",
      "会议角色、任务交接包、能力缺口和 PerformanceRecord。",
      "供世界树、观星台和中控台使用的身份与责任来源。",
    ],
    coreObjects: [
      "AgentProfile",
      "CapabilityProfile",
      "Preset",
      "Assignment",
      "SubagentRelation",
      "PerformanceRecord",
    ],
    levels: [
      "S1 是天使议会；S2 展开 Agent Registry、能力档案、Preset、指派、Subagent 和表现。",
      "组织层级从会议 → 角色/Agent → Assignment → Subagent/Run 展开，并保留父子汇报关系。",
      "LOD0 看会议与责任，LOD1 看 Agent/任务，LOD2+ 查看模型版本、能力测试、戒律与运行证据。",
    ],
    seasons: {
      spring: "根据蓝图选定最小 Agent 阵容、角色、能力和权限，冻结指派边界。",
      summer: "按叶任务委派、fork 和交接；每个分支保持父任务、上下文和停止条件。",
      autumn: "依据伊甸园结论和观星台证据评价适用范围，不用主观“聪明度”排名。",
      winter: "淘汰失效 Preset、修订能力档案、归档表现与失败模式，提出下一纪元装配候选。",
    },
    upstream: ["blueprint", "laws", "armory", "eden", "observatory"],
    downstream: ["world-tree", "time-capsule", "observatory"],
    status: {
      current: "v0.1 的 Agent 会议已支持一个 OpenAI-compatible 模型的纯文本流式对话、停止与重放，但没有 Agent Registry、多 Agent 或工具委派。",
      candidate: "候选蓝图先把单模型绑定提升为可版本化 AgentProfile/Preset，并将一次 Session 绑定到明确 WorkItem 和规则版本。",
      vision: "长期支持可自由组合但受治理的多 Agent 会议、Subagent 委派、能力评测和跨模型可靠交接。",
    },
    nextStage: "为当前单模型会话建立真实 AgentProfile、CapabilityProfile 和 Assignment，不增加第二个 Agent 就先跑通治理闭环。",
    acceptance: [
      "每次运行都能指出准确 Agent、模型版本、能力、任务、戒律和 Provider 绑定。",
      "Agent 无法自行扩大 Assignment 或权限，Subagent 始终可追溯到父任务。",
      "表现记录引用运行与验收证据，并明确适用范围和失败模式。",
    ],
  },
  {
    id: "MH.ARMORY",
    slug: "armory",
    name: "众神武库",
    subtitle: "Tool, Skill, MCP & API Registry",
    lede: "把模型 API、Tool、Skill、MCP 与连接器做成可替换、可测试、最小权限的能力零件，并把凭据留在安全边界内。",
    illustration: "assets/illustrations/tool-registry-gateway-v1.png",
    terminology: [
      {
        term: "Provider / Connector（提供方 / 连接器）",
        definition: "把模型 API、REST、SSE、Webhook 或 WebSocket 服务映射为受控能力的版本化适配器。",
      },
      {
        term: "ToolProfile（工具档案）",
        definition: "声明工具名称、JSON Schema、执行 Provider、数据访问、网络访问、风险和所需权限的注册记录。",
      },
      {
        term: "Skill（技能）",
        definition: "可发现、可装配的工作方法与配套资源；登记或阅读 Skill 不等于获得执行其工具的权限。",
      },
      {
        term: "MCP Connector（MCP 连接器）",
        definition: "登记 MCP Server 的来源、能力、版本、健康和授权范围，使外部工具可替换且可撤销。",
      },
      {
        term: "CredentialRef（凭据引用）",
        definition: "指向操作系统安全存储中密钥的非明文标识；Renderer、日志、数据库和胶囊不得保存或回显真实密钥。",
      },
      {
        term: "PolicyBinding（政策绑定）",
        definition: "把某项能力与适用戒律、允许路径、网络范围和批准要求连接起来的治理关系。",
      },
      {
        term: "Health Check（健康检查）",
        definition: "验证连接、版本、能力、速率和失败降级是否可用的探测结果；可用性不会自动代表本次 Run 已获授权。",
      },
    ],
    designPrinciples: [
      "众神武库是能力目录和安全网关，不是工具调用历史。它让模型、API、Tool、Skill 与 MCP 像沙盒零件一样独立组合、升级和撤销，同时把每项能力的来源、版本、Schema、风险和健康状态暴露给治理层。",
      "安全边界采用凭据引用与最小权限：明文密钥只进入操作系统安全存储和受限代理；真正启用能力还要通过戒律预检。工具实际怎样被调用、耗时与结果如何，则由观星台从原始事件投影。",
    ],
    responsibility: [
      "登记工具 Schema、风险、执行 Provider，Skill 来源/版本，以及 MCP/API 能力和健康状态。",
      "管理 DeepSeek、OpenAI-compatible、Anthropic、Gemini 等模型 Provider 的能力差异和连接测试。",
      "只保存凭据引用与可用性，通过操作系统安全存储和受限代理使用密钥。",
    ],
    notResponsible: [
      "不在 Renderer、日志、仓库或导出文件中保存明文 API Key。",
      "登记能力不等于授权调用；实际权限仍由戒律和执行信封决定。",
      "不拥有工具调用历史；运行事实和错误归观星台。",
    ],
    inputs: [
      "Tool JSON Schema、Skill 清单、MCP Server 描述、API 协议和 Provider 元数据。",
      "用户配置的端点、模型、能力声明与操作系统安全存储中的凭据引用。",
      "健康检查、速率限制、版本变化、错误和戒律风险分类。",
    ],
    outputs: [
      "ToolSpec、SkillRef、MCPConnector、ModelProvider、CredentialRef 与 HealthCheck。",
      "供 Agent Preset 装配的能力清单、风险标签、失败降级和可撤销绑定。",
      "不含秘密的连接状态与发送前能力/权限摘要。",
    ],
    coreObjects: [
      "ToolSpec",
      "SkillRef",
      "MCPConnector",
      "ModelProvider",
      "CredentialRef",
      "HealthCheck",
    ],
    levels: [
      "S1 是众神武库；S2 展开 Tool、Skill、MCP、Model Provider、HTTP API、CredentialRef 与健康/政策。",
      "能力层级从 Provider/Connector → Capability → Version/Schema → CredentialRef/PolicyBinding 展开。",
      "LOD0 看可用性和风险，LOD1 看连接/能力，LOD2+ 看 Schema、版本、测试和权限来源，永不显示明文密钥。",
    ],
    seasons: {
      spring: "为新纪元选择最小能力组合，测试连接，确认版本、风险、费用和撤销方式。",
      summer: "监控健康和速率，按执行信封提供能力；错误重绑保留旧会话证据。",
      autumn: "核对实际使用、成本、失败与产出，向伊甸园和观星台提供版本关联。",
      winter: "撤销闲置凭据、升级或淘汰失效组件，保留旧组合清单和兼容/回滚说明。",
    },
    upstream: ["laws", "blueprint", "observatory"],
    downstream: ["agent-council", "experiments", "roots", "wisdom-well", "observatory"],
    status: {
      current: "v0.1 已实现单个 OpenAI-compatible Provider 配置、连接后对话、系统安全存储凭据和错误配置后的证据保留式重绑；没有 Tool、Skill 或 MCP 权限。",
      candidate: "候选蓝图把 Provider 配置升级为版本化 ModelProvider/CapabilityProfile/HealthCheck，并继续保持纯文本最小权限。",
      vision: "长期形成沙盒式能力市场，允许模型、Agent、Skill、MCP、工具和索引器独立组合、升级、卸载与审计。",
    },
    nextStage: "完成 Provider 能力探测和连接健康检查，让发送前明确显示文本/工具/视觉、上下文、费用与本次权限。",
    acceptance: [
      "明文凭据只进入操作系统安全存储和受限代理，不出现在 Renderer、日志或仓库。",
      "错误重绑不会改写旧会话、错误或模型来源；撤销后连接立即不可用。",
      "任何能力启用都能指出版本、Schema、风险、适用戒律和健康状态。",
    ],
  },
  {
    id: "MH.OBSERVATORY",
    slug: "observatory",
    name: "观星台",
    subtitle: "Run Observability & Recovery",
    lede: "把 Agent 的输出流、步骤、工具、Token、成本、异常和恢复投影成可检查信号，并始终链接到原始事件。",
    illustration: "assets/illustrations/run-observatory-trace-explorer-v1.png",
    terminology: [
      {
        term: "Session Event（会话事件）",
        definition: "Engine append-only 日志中的 Turn、Step、Tool、stream、error 或 lifecycle 原始执行事实，观星台只能读取和关联。",
      },
      {
        term: "RunBinding（运行绑定）",
        definition: "把运行事件连接到准确 Mission、WorkItem、Execution Envelope、Provider 与 Agent 的稳定关系。",
      },
      {
        term: "Observation（观测）",
        definition: "从原始事件中提取的状态、耗时、错误或行为信号，必须保留事件引用并与治理判决区分。",
      },
      {
        term: "TraceProjection（轨迹投影）",
        definition: "将 Turn、Step、Tool、Artifact 和 Review 按时间及关系组织成的可重放视图，不另造运行历史。",
      },
      {
        term: "UsageSnapshot（用量快照）",
        definition: "绑定准确 Run 和 Provider 的 token、成本、延迟与上下文占用记录，用于预算和跨运行比较。",
      },
      {
        term: "Alert（异常信号）",
        definition: "对越权、循环、漂移、长时间无检查点或可疑幻觉迹象的可检查提示，不是 Agent“作弊”的自动定罪。",
      },
      {
        term: "RecoveryRecord（恢复记录）",
        definition: "记录崩溃、中断、停止、对账和恢复过程及其检查点，让失败不会从项目历史中消失。",
      },
    ],
    designPrinciples: [
      "观星台以 Engine 的 durable Session events 为原始执行事实，所有时间线、用量和告警都只是带来源的投影。刷新或重启后应能确定性重建，而不是维护第二份容易漂移的运行历史。",
      "可观测性服务于理解与恢复，不充当裁判。异常与幻觉/作弊只能显示为信号，再交给戒律、验证器、伊甸园或人类判断；观星台自身不处罚 Agent、不验收成果，也不改写规则。",
    ],
    responsibility: [
      "显示当前 Run 状态、输出流、暂停/取消，以及 Turn/Step/Tool/Artifact/Review 时间线。",
      "聚合工具输入摘要、结果、耗时、错误、token、成本、延迟和上下文占用。",
      "发现越权、循环、漂移、长期无检查点和崩溃信号，并提供对账与恢复入口。",
    ],
    notResponsible: [
      "不声称能判定 Agent“绝对诚实”；告警是可检查信号，必须链接原始事件和证据。",
      "不另造运行历史；DSH durable Session events 是执行原始事实。",
      "不自行处罚 Agent、改写戒律或验收成果。",
    ],
    inputs: [
      "Engine/Session 的 append-only Turn、Step、Tool、stream、error 和 lifecycle event。",
      "COMMAND 的 RunBinding、LAW 决定、ARMORY 能力版本和 ROOT/EDEN 引用。",
      "Provider usage、时延/成本信息、心跳、崩溃检测和人工标注。",
    ],
    outputs: [
      "RunBinding、Observation、TraceProjection、ToolTrace、UsageSnapshot 与 Alert。",
      "带原始事件链接的轨迹、预算仪表、异常解释和 RecoveryRecord。",
      "供 LAW 审计、ANGELS 评价、EDEN 验收和 CAPSULE 代谢的运行证据。",
    ],
    coreObjects: [
      "RunBinding",
      "Observation",
      "TraceProjection",
      "ToolTrace",
      "UsageSnapshot",
      "RecoveryRecord",
    ],
    levels: [
      "S1 是观星台；S2 展开 Live Run、事件时间线、工具轨迹、用量、风险告警与恢复。",
      "运行层级从 Mission/WorkItem → Session/Run → Turn/Step → Tool/Event 展开。",
      "LOD0 看健康、预算和告警，LOD1 看时间线，LOD2+ 查看原始事件、输入摘要、结果与错误。",
    ],
    seasons: {
      spring: "建立预算、风险阈值、检查点频率和首个 Run 的基线。",
      summer: "实时投影流、步骤、用量和异常，支持停止与恢复，避免无边界运行。",
      autumn: "把可重放轨迹、成本和错误交给伊甸园验收与实验比较。",
      winter: "归并重复告警、分析漂移/循环和恢复失败，为规则与蓝图修订提供证据。",
    },
    upstream: ["blueprint", "world-tree", "armory", "laws"],
    downstream: ["eden", "time-capsule", "agent-council", "laws", "experiments"],
    status: {
      current: "v0.1 已保留纯文本流式会话、停止、重放和连接错误证据；完整 Step/Tool 轨迹、token/成本面板、告警与崩溃恢复尚未实现。",
      candidate: "候选蓝图先将现有 Session event 投影为 Run 时间线、状态、错误和基础 usage，并绑定准确 WorkItem/Provider。",
      vision: "长期成为可缩放的运行星图，支持多 Agent、工具轨迹、成本预算、异常证据、作弊/幻觉信号与安全恢复。",
    },
    nextStage: "把一次现有流式对话的开始、增量、停止、完成或错误投影为不可变 Run 时间线，并显示来源 Provider 与任务。",
    acceptance: [
      "刷新和重启后时间线可由原始事件确定性重建，不产生第二份运行事实。",
      "停止、错误、用量和告警都绑定准确 Run/Session/Provider，并能下钻证据。",
      "告警明确标为信号而非判决，任何治理动作仍需规则、验证器或人类决定。",
    ],
  },
];

const requiredListFields = [
  "designPrinciples",
  "responsibility",
  "notResponsible",
  "inputs",
  "outputs",
  "coreObjects",
  "levels",
  "upstream",
  "downstream",
  "acceptance",
];

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function validateModuleCatalog(catalog = moduleCatalog) {
  if (!Array.isArray(catalog) || catalog.length !== requiredModuleIds.length) {
    throw new Error(`Expected exactly ${requiredModuleIds.length} modules`);
  }

  const ids = catalog.map((module) => module.id);
  if (JSON.stringify(ids) !== JSON.stringify(requiredModuleIds)) {
    throw new Error(`Unexpected module order or ids: ${ids.join(", ")}`);
  }

  const slugs = new Set();
  for (const module of catalog) {
    if (!/^[a-z][a-z0-9-]*$/u.test(module.slug) || slugs.has(module.slug)) {
      throw new Error(`Invalid or duplicate module slug: ${module.slug}`);
    }
    slugs.add(module.slug);

    for (const field of ["id", "name", "subtitle", "lede", "illustration", "nextStage"]) {
      if (typeof module[field] !== "string" || module[field].trim() === "") {
        throw new Error(`${module.id} is missing ${field}`);
      }
    }
    if (!/^assets\/illustrations\/[a-z0-9-]+\.png$/u.test(module.illustration)) {
      throw new Error(`${module.id} has an invalid illustration path`);
    }
    for (const field of requiredListFields) {
      if (!Array.isArray(module[field]) || module[field].length === 0) {
        throw new Error(`${module.id} is missing ${field}`);
      }
      if (module[field].some((item) => typeof item !== "string" || item.trim() === "")) {
        throw new Error(`${module.id} has invalid ${field} content`);
      }
    }
    if (!Array.isArray(module.terminology) || module.terminology.length < 4 || module.terminology.length > 7) {
      throw new Error(`${module.id} must define between 4 and 7 Agent Harness terms`);
    }
    const terminologyNames = new Set();
    for (const item of module.terminology) {
      if (
        typeof item !== "object" ||
        item === null ||
        typeof item.term !== "string" ||
        item.term.trim() === "" ||
        typeof item.definition !== "string" ||
        item.definition.trim() === ""
      ) {
        throw new Error(`${module.id} has an invalid Agent Harness term`);
      }
      if (terminologyNames.has(item.term)) {
        throw new Error(`${module.id} has a duplicate Agent Harness term: ${item.term}`);
      }
      terminologyNames.add(item.term);
    }
    for (const season of ["spring", "summer", "autumn", "winter"]) {
      if (typeof module.seasons?.[season] !== "string" || !module.seasons[season]) {
        throw new Error(`${module.id} is missing season ${season}`);
      }
    }
    for (const phase of ["current", "candidate", "vision"]) {
      if (typeof module.status?.[phase] !== "string" || !module.status[phase]) {
        throw new Error(`${module.id} is missing status ${phase}`);
      }
    }
  }

  for (const module of catalog) {
    for (const relatedSlug of [...module.upstream, ...module.downstream]) {
      if (!slugs.has(relatedSlug) || relatedSlug === module.slug) {
        throw new Error(`${module.id} has an invalid relation: ${relatedSlug}`);
      }
    }
  }

  return true;
}

function renderList(items, className = "module-page-list") {
  return `<ul class="${className}">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function renderSection(title, items, kicker = "模块契约", wide = false) {
  return `<section class="module-page-section${wide ? " module-page-section-wide" : ""}">
    <p class="module-page-section-kicker">${escapeHtml(kicker)}</p>
    <h2>${escapeHtml(title)}</h2>
    ${renderList(items)}
  </section>`;
}

function renderRelations(title, slugs, catalogBySlug) {
  const links = slugs
    .map((slug) => {
      const related = catalogBySlug.get(slug);
      return `<a class="module-page-relation-link" href="/modules/${escapeHtml(related.slug)}/"><span>${escapeHtml(related.id)}</span>${escapeHtml(related.name)}</a>`;
    })
    .join("");
  return `<div class="module-page-relation-group"><h3>${escapeHtml(title)}</h3><div class="module-page-relation-list">${links}</div></div>`;
}

function renderDesignPrinciples(paragraphs) {
  return `<div class="module-page-design-copy">${paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("")}</div>`;
}

function renderTerminology(terminology) {
  return `<dl class="module-page-terminology-grid">${terminology
    .map(
      ({ term, definition }) => `<div class="module-page-term-card">
        <dt class="module-page-term">${escapeHtml(term)}</dt>
        <dd class="module-page-term-definition">${escapeHtml(definition)}</dd>
      </div>`,
    )
    .join("")}</dl>`;
}

export function renderModulePage(module, catalog = moduleCatalog) {
  const catalogBySlug = new Map(catalog.map((item) => [item.slug, item]));
  const phases = [
    ["current", "v0.1 事实", module.status.current],
    ["candidate", "候选蓝图", module.status.candidate],
    ["vision", "长期愿景", module.status.vision],
  ];
  const seasons = [
    ["春", "Spring", module.seasons.spring],
    ["夏", "Summer", module.seasons.summer],
    ["秋", "Autumn", module.seasons.autumn],
    ["冬", "Winter", module.seasons.winter],
  ];
  const moduleNavigation = catalog
    .map(
      (item) =>
        `<a class="module-page-catalog-link" href="/modules/${escapeHtml(item.slug)}/"${item.slug === module.slug ? ' aria-current="page"' : ""}><span>${escapeHtml(item.id)}</span>${escapeHtml(item.name)}</a>`,
    )
    .join("");

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(module.lede)}">
  <title>${escapeHtml(module.name)} · ${escapeHtml(module.id)} · Miracle Harness</title>
  <link rel="icon" href="/assets/brand/miracle-bird-mark-v1.png">
  <link rel="stylesheet" href="/styles.css">
</head>
<body class="module-page">
  <header class="module-page-header">
    <div class="module-page-header-inner">
      <a class="module-page-brand" href="/" aria-label="返回 Miracle Harness 首页">
        <img class="module-page-brand-mark" src="/assets/brand/miracle-bird-mark-v1.png" alt="Miracle Harness 品牌图标">
        <span class="module-page-brand-copy"><strong class="module-page-brand-name">Miracle Harness</strong><span class="module-page-brand-kicker">十三领域手册</span></span>
      </a>
      <nav class="module-page-actions" aria-label="页面操作">
        <a class="module-page-button module-page-button-secondary" href="${GITHUB_VISION_URL}">GitHub 完整构想</a>
        <a class="module-page-button" href="${WINDOWS_DOWNLOAD_URL}">下载 Windows Alpha</a>
      </nav>
    </div>
  </header>

  <main class="module-page-main">
    <section class="module-page-hero">
      <div class="module-page-hero-copy">
        <p class="module-page-eyebrow">S1 领域 · ${escapeHtml(module.id)}</p>
        <h1 class="module-page-title">${escapeHtml(module.name)}</h1>
        <p class="module-page-subtitle">${escapeHtml(module.subtitle)}</p>
        <p class="module-page-lede">${escapeHtml(module.lede)}</p>
      </div>
      <figure class="module-page-hero-art">
        <img class="module-page-hero-image" src="/${escapeHtml(module.illustration)}" alt="${escapeHtml(module.name)}模块插图">
      </figure>
    </section>

    <section class="module-page-section module-page-section-wide module-page-status" aria-labelledby="module-status-title">
      <p class="module-page-section-kicker">诚实边界</p>
      <h2 id="module-status-title">当前状态</h2>
      <div class="module-page-phase-strip">
        ${phases
          .map(
            ([key, label, text]) => `<article class="module-page-phase-card module-page-phase-${key}">
              <p class="module-page-phase-label">${escapeHtml(label)}</p>
              <h3 class="module-page-phase-title">${escapeHtml(module.name)}的${escapeHtml(label)}</h3>
              <p class="module-page-phase-text">${escapeHtml(text)}</p>
            </article>`,
          )
          .join("")}
      </div>
    </section>

    <div class="module-page-grid">
      <section class="module-page-section module-page-section-wide module-page-design" aria-labelledby="module-design-title">
        <p class="module-page-section-kicker">为什么这样设计</p>
        <h2 id="module-design-title">设计理念</h2>
        ${renderDesignPrinciples(module.designPrinciples)}
      </section>
      <section class="module-page-section module-page-section-wide module-page-terminology" aria-labelledby="module-terminology-title">
        <p class="module-page-section-kicker">Miracle × Agent Harness</p>
        <h2 id="module-terminology-title">Agent Harness 术语</h2>
        <p class="module-page-terminology-intro">这些词描述本模块真正拥有或消费的产品对象；它们与底层 Engine 的 Session、Agent Loop 和工具执行保持清晰边界。</p>
        ${renderTerminology(module.terminology)}
      </section>
      ${renderSection("职责", module.responsibility, "它拥有的事实")}
      ${renderSection("明确不负责", module.notResponsible, "边界先于能力")}
      ${renderSection("输入", module.inputs, "进入模块")}
      ${renderSection("输出", module.outputs, "离开模块")}
      <section class="module-page-section">
        <p class="module-page-section-kicker">数据语言</p>
        <h2>核心对象</h2>
        ${renderList(module.coreObjects, "module-page-object-list")}
      </section>
      ${renderSection("层级与 LOD", module.levels, "缩放而不改事实")}
      <section class="module-page-section module-page-section-wide">
        <p class="module-page-section-kicker">ProjectEpoch</p>
        <h2>四季行为</h2>
        <div class="module-page-season-grid">
          ${seasons
            .map(
              ([name, english, text]) => `<article class="module-page-season">
                <p class="module-page-season-name"><span>${escapeHtml(name)}</span>${escapeHtml(english)}</p>
                <p>${escapeHtml(text)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </section>
      <section class="module-page-section module-page-section-wide">
        <p class="module-page-section-kicker">一套事实，多个工作面</p>
        <h2>上下游关系</h2>
        <div class="module-page-relations">
          ${renderRelations("上游输入", module.upstream, catalogBySlug)}
          ${renderRelations("下游消费", module.downstream, catalogBySlug)}
        </div>
      </section>
      <section class="module-page-section module-page-section-wide module-page-next">
        <p class="module-page-section-kicker">先塔尖，后第二层</p>
        <h2>下一阶段与验收</h2>
        <p class="module-page-next-copy">${escapeHtml(module.nextStage)}</p>
        <h3>可检查的验收条件</h3>
        ${renderList(module.acceptance, "module-page-acceptance")}
      </section>
    </div>

    <nav class="module-page-catalog" aria-label="十三模块目录">
      <div class="module-page-catalog-heading">
        <p class="module-page-section-kicker">S1 DOMAIN MAP</p>
        <h2>继续查看十三模块</h2>
      </div>
      <div class="module-page-catalog-grid">${moduleNavigation}</div>
    </nav>
  </main>

  <footer class="module-page-footer">
    <div class="module-page-footer-inner">
      <p class="module-page-footer-note">十三领域共享同一套 Kernel 事实；页面是公开设计说明，不是已完成功能的宣传。</p>
      <nav class="module-page-footer-links" aria-label="页脚链接">
        <a href="/">返回首页</a>
        <a href="${GITHUB_VISION_URL}">阅读完整构想</a>
        <a href="${WINDOWS_DOWNLOAD_URL}">下载 Windows Alpha</a>
      </nav>
    </div>
  </footer>
</body>
</html>
`;
}

validateModuleCatalog();
