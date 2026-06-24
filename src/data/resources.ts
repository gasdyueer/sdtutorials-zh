export interface Resource {
  title: string;
  url: string;
  description: string;
  category: "website" | "creator" | "article";
  tags: string[];
}

export const resources: Resource[] = [
  {
    title: "OpenModelDB",
    url: "https://openmodeldb.info/",
    description:
      "超分辨率模型库，收录多种神经网络架构的图像超分辨率放大模型，支持按 anime、manga、realistic 等标签筛选。",
    category: "website",
    tags: ["超分辨率", "模型库", "Upscale"],
  },
  {
    title: "Civitai",
    url: "https://civitai.com/",
    description:
      "全球最大的 AI 图像生成模型社区，总模型容量超 500TB。提供 Checkpoint、LoRA、ComfyUI 工作流、教程等，海量免费模型可下载。",
    category: "website",
    tags: ["模型下载", "社区", "LoRA", "Checkpoint"],
  },
  {
    title: "Civitai Archive",
    url: "https://civitaiarchive.com/",
    description: "Civitai 模型备份站点，收录已下架的 Civitai 模型。",
    category: "website",
    tags: ["模型备份", "存档"],
  },
  {
    title: "ComfyUI Wiki（中文）",
    url: "https://comfyui-wiki.com/zh/",
    description:
      "ComfyUI 非官方中文知识库，涵盖安装指南、节点文档、工作流示例、常见问题等，持续更新。",
    category: "website",
    tags: ["ComfyUI", "教程", "中文", "工作流"],
  },
  {
    title: "复制机器 LoRA 学习方法",
    url: "https://rentry.co/kopiki_lora",
    description:
      "通过过拟合单张图像创建「复制型」LoRA 模型的技术教程，含二次训练、合并脚本及实验对比。",
    category: "website",
    tags: ["LoRA", "训练", "教程", "技术"],
  },
  {
    title: "StableDiffusionBook",
    url: "https://draw.dianas.cyou/paint/",
    description:
      "专注于 Stable Diffusion 的开源 Wiki 知识库，涵盖提示词工程、参数调优、ControlNet 及 Danbooru 标签参考库。",
    category: "website",
    tags: ["Stable Diffusion", "Wiki", "提示词", "ControlNet"],
  },
  {
    title: "ComfyUI 官方中文文档",
    url: "https://docs.comfy.org/zh-CN",
    description:
      "ComfyUI 官方中文文档，涵盖入门指南、界面说明、节点文档、API 参考及故障排除。",
    category: "website",
    tags: ["ComfyUI", "官方文档", "中文", "API"],
  },
  {
    title: "AUTOMATIC1111 WebUI 功能维基",
    url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features",
    description:
      "AUTOMATIC1111 开发的 Stable Diffusion WebUI 功能详解，含 img2img、Inpainting、LoRA 等完整特性参考。",
    category: "website",
    tags: ["WebUI", "Stable Diffusion", "功能", "GitHub"],
  },
  {
    title: "NoobAI-XL 画师风格库",
    url: "https://www.downloadmost.com/NoobAI-XL/danbooru-artist/",
    description:
      "收录 NoobAI-XL 所支持数千种 Danbooru 画师风格，提供提示词触发器及固定角色的对比预览图。",
    category: "website",
    tags: ["画师风格", "提示词", "NoobAI", "Danbooru"],
  },
  {
    title: "Illustrious XL 艺术家风格指南",
    url: "https://civitai.com/articles/9309/artists-for-illustrious-xl",
    description:
      "Civitai 上的艺术家风格测试指南，含上百位艺术家标签在 Illustrious XL 上的效果对比与权重建议。",
    category: "website",
    tags: ["Illustrious", "画师风格", "提示词", "测试"],
  },
  {
    title: "Danbooru 标签超市",
    url: "https://tags.novelai.dev/",
    description:
      "收录 3000+ 带配图标签的在线提示词构建工具，支持拖拽排序、权重调整、导入导出，开源。",
    category: "website",
    tags: ["标签", "提示词", "Danbooru", "工具"],
  },
  // --- B站 UP主 ---
  {
    title: "秋葉aaaki",
    url: "https://space.bilibili.com/12566101",
    description:
      "165 万粉丝，发布各类「解压即用」AI 绘画整合包（SD WebUI、ComfyUI、SD-Forge）及模型训练器，极大降低上手门槛。",
    category: "creator",
    tags: ["整合包", "Stable Diffusion", "ComfyUI", "入门"],
  },
  {
    title: "Nenly同学",
    url: "https://space.bilibili.com/1814756990",
    description:
      "近 70 万粉丝，专注 Stable Diffusion、ComfyUI 零基础入门与进阶训练（LoRA），含 AI 虚拟男团创作。",
    category: "creator",
    tags: ["Stable Diffusion", "ComfyUI", "LoRA", "入门"],
  },
  {
    title: "青龙圣者",
    url: "https://space.bilibili.com/219296",
    description:
      "深度解析悬疑/科幻动画，分享 Sora 视频生成、Suno 音乐创作、LoRA 训练等前沿 AI 技术教程。",
    category: "creator",
    tags: ["视频生成", "音乐生成", "LoRA", "深度解析"],
  },
  {
    title: "叫狐狸的少年呀",
    url: "https://space.bilibili.com/479755595",
    description:
      "汽车设计师背景，聚焦 SD1.5/SDXL/FLUX 的 LoRA 和 Dreambooth 全流程教学，含秋叶训练器实操。",
    category: "creator",
    tags: ["LoRA", "Dreambooth", "训练", "FLUX"],
  },
  {
    title: "雪音万象",
    url: "https://space.bilibili.com/489635022",
    description:
      "10 年世界 500 强信息化背景，精通 ComfyUI 工作流构建、局部重绘技术（ControlNet、Inpaintcrop）及采样器详解。",
    category: "creator",
    tags: ["ComfyUI", "工作流", "ControlNet", "采样器"],
  },
  {
    title: "蓝波球的球",
    url: "https://space.bilibili.com/17280004",
    description:
      "「ComfyUI 小玩家」，JIDU 三等奖，专注于 ComfyUI 高级技巧、插件开发与光影控制、3D 视角转换等实战教程。",
    category: "creator",
    tags: ["ComfyUI", "高级", "插件", "光影"],
  },
  {
    title: "啦啦啦的小黄瓜",
    url: "https://space.bilibili.com/219572544",
    description:
      "AI 硕士 & 创业者，5.2 万粉丝，ComfyUI 零基础到商业闭环教程，含 FLUX+LoRA、数字人制作等。",
    category: "creator",
    tags: ["ComfyUI", "LoRA", "数字人", "商业"],
  },
  {
    title: "刘悦的技术博客",
    url: "https://space.bilibili.com/3031494",
    description:
      "聚焦 AI 技术落地应用，含 LLM、语音克隆、数字人驱动、低显存优化方案及一键部署整合包。",
    category: "creator",
    tags: ["LLM", "语音克隆", "数字人", "低显存"],
  },
  {
    title: "T8star-Aix",
    url: "https://space.bilibili.com/385085361",
    description:
      "多行业创业背景，分享 ComfyUI 工作流、数字人制作、AI 视频生成及自研 AI 产品「AIX 公司」系列工具。",
    category: "creator",
    tags: ["ComfyUI", "数字人", "视频生成", "AI工具"],
  },
  {
    title: "惫懒の欧阳川",
    url: "https://space.bilibili.com/33956397",
    description:
      "中戏毕业，20 年文艺经验，15 万粉丝。SD/ComfyUI/Flux 全流程保姆级教程，含 n8n 自动化、RAG 部署。",
    category: "creator",
    tags: ["Stable Diffusion", "ComfyUI", "Flux", "自动化"],
  },
  // --- B站文章 ---
  {
    title: "秋葉aaaki - AI绘画知识合集",
    url: "https://www.bilibili.com/read/readlist/rl670536",
    description:
      "6 篇专栏文章，系统介绍 SD 入门、模型种类、工作原理、论文资源，纠正 VAE 和模型大小常见误区。",
    category: "article",
    tags: ["Stable Diffusion", "入门", "知识合集", "原理"],
  },
  {
    title: "细节修复（Detailer）原理与操作",
    url: "https://www.bilibili.com/opus/1037542722974515205",
    description:
      "详解 AI 绘画中细节崩坏原因（像素不足）及解决方案：潜空间放大与 Detailer 节点，含 guide_size、max_size 参数解读。",
    category: "article",
    tags: ["Detailer", "修复", "参数", "技巧"],
  },
];

export const categories = [
  { key: "website", label: "网站资源", badge: "badge-website" },
  { key: "creator", label: "UP主推荐", badge: "badge-creator" },
  { key: "article", label: "文章推荐", badge: "badge-article" },
] as const;

export type CategoryKey = (typeof categories)[number]["key"];
