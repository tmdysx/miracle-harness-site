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
