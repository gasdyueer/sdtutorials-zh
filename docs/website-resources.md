---
title: 网站资源
description: AI绘画相关网站资源索引 — Stable Diffusion / ComfyUI / FLUX
---

# 网站资源

- [OpenModelDB](https://openmodeldb.info/)
  - 超分辨率模型库，收录多种神经网络架构的图像超分辨率放大模型，支持按 anime、manga、realistic 等标签筛选。
- [Civitai](https://civitai.com/) 与 [civitai.red](https://civitai.red/)
  - 即通常所说的 C 站。Civitai 现已拆分为两个域名：civitai.com 仅展示 SFW（安全工作）内容，更为健全纯净；civitai.red 则同时包含 SFW 与 NSFW 内容，模型和数据更全。网站包含各种社区自发上传的图像生成模型、ComfyUI 工作流、教程文章，总模型容量已超过 500TB。大部分模型可免费下载，少部分有限制。
- [Civitai Archive](https://civitaiarchive.com/)
  - C 站模型的第三方备份网站，收录了一部分 C 站下架的模型。
- [ComfyUI Wiki（中文）](https://comfyui-wiki.com/zh/)
  - 这是一个名为"ComfyUI Wiki"的非官方中文在线知识库网站，旨在为用户提供关于 ComfyUI（一款用于 AI 图像生成的节点式工作流工具）的全面教程、安装指南、界面说明、节点文档、工作流示例及常见问题解答，帮助用户快速上手和深入掌握 AIGC 相关技能，内容持续更新中。
- [复制机器 LoRA 学习方法](https://rentry.co/kopiki_lora)
  - 该网站是一篇关于"复制机器 LoRA 学习方法"的技术教程备忘录，详细介绍了一种通过过拟合单张图像创建"复制型"LoRA 模型，再将其与经过特定处理（如轮廓化、高对比度、海报化等）的图像结合进行二次训练，从而生成能够微调图像风格或特征（如线条粗细、细节增强）的新 LoRA 模型的方法；文章不仅提供了从环境设置、训练参数到合并脚本（merge_lora.py, svd_merge_lora.py）的具体操作步骤和命令示例，还记录了不同处理方式下的实验结果与效果对比，并补充了利用差分提取法优化风格变化以及避免过拟合美术风格的实用建议。
- [StableDiffusionBook](https://draw.dianas.cyou/paint/)
  - StableDiffusionBook 是一个专注于 AI 绘画（特别是 Stable Diffusion）的开源 Wiki 知识库与实战工作台，旨在为用户提供从入门安装、环境配置到高级模型训练的全流程指南；该网站核心特色在于其详尽的"工作台"板块，不仅系统解析了提示词工程（Prompt Engineering）、参数调优（如采样器、CFG Scale、种子等）及 ControlNet 等工作流原理，还整合了丰富的实用资源，包括 Danbooru 标签参考库、风格化艺术家研究、在线工具集（如提示词生成器、图像放大工具）以及作品灵感库，帮助用户通过科学的词汇选择、语法强调和布局控制来优化生成效果，是 AI 绘画爱好者和技术人员查阅资料、提升创作效率的一站式中文社区平台。
- [ComfyUI 官方中文文档](https://docs.comfy.org/zh-CN)
  - ComfyUI 的官方中文文档网站。
  - ComfyUI 官方文档是一个全面介绍 ComfyUI 这一最强大的开源节点式生成式 AI 应用程序的资源平台，旨在帮助用户从入门到精通。网站内容涵盖了开始使用指南（包括本地安装和 Comfy Cloud）、基础概念解析（如工作流、节点、连线等）、详细的界面功能说明以及丰富的教程示例（涉及图像、3D、视频、音频等多种任务）。此外，该站点还为开发者提供了深入的内置节点文档、自定义节点开发指南、API 参考（本地与云端）以及故障排除和社区支持资源，充分体现了 ComfyUI 作为由社区驱动、高度可定制且可在本地运行的 AI 推理引擎的特性。
- [AUTOMATIC1111 WebUI 功能维基](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features)
  - 该网站是 AUTOMATIC1111 开发的 Stable Diffusion Web UI 的功能展示维基页面，详细介绍了该工具支持的多种先进图像生成与编辑特性。内容涵盖了对 SD-XL、SD 2.0、InstructPix2Pix 等多种模型架构的原生支持，以及 LoRA、Hypernetworks、Textual Inversion 等扩展网络的集成使用方法；重点阐述了强大的 img2img 功能，包括局部重绘（Inpainting）、外绘（Outpainting）、高清修复（Hires. fix）及多种放大算法；同时深入解析了提示词工程的高级技巧，如权重调整、动态提示词编辑、组合扩散（Composable Diffusion）及 CLIP 反推提示词功能，并提供了针对低显存设备的优化方案、自定义脚本接口及详细的参数设置指南，旨在为用户提供从基础安装到高级创作的全方位技术参考。
- [NoobAI-XL 画师风格库](https://www.downloadmost.com/NoobAI-XL/danbooru-artist/)
  - 该网站是一个专为AI绘画爱好者打造的资源库，主要收录并展示了NoobAI-XL（NAI-XL）、Illustrious及Pony等Stable Diffusion模型所支持的数千种Danbooru画师艺术风格；页面按参考图片数量降序排列了包括ebifurya、hammer、haruyama_kazunori在内的众多画师列表，为每个风格提供了具体的提示词触发器（如"by \[画师名\]"），且所有预览图均基于"Tifa Lockhart"和"Harry Potter"两个固定角色生成以便直观对比，同时图片内嵌了完整的生成参数，方便用户下载后直接在Stable Diffusion中复现相同的艺术效果。
- [Illustrious XL 艺术家风格指南](https://civitai.com/articles/9309/artists-for-illustrious-xl)
  - 该网站是Civitai平台上的一篇技术分享文章，由用户"gonewelp"发布，旨在为"Illustrious XL"AI绘画模型提供一份详尽的艺术家风格提示词（prompt）测试指南；作者因不满其他模型（如Pony XL）的灵活性限制，耗时两天整理了大量Danbooru数据，测试了包括Guweiz、Sakimichan、Ilya Kuvshinov等在内的上百位艺术家的风格标签在Illustrious XL及其衍生模型（如SmoothFT、WAI-NSFW）上的表现效果，文中不仅提供了具体的生成参数设置（如采样器、步数、分辨率）、标准提示词模板和负面提示词，还针对每位艺术家的风格特点给出了权重调整建议（如"降低权重"、"需使用ADetailer修复手部"等），并附带了测试用的图片档案资源，以帮助社区用户更精准地控制生成图像的艺术风格。
- [Danbooru 标签超市](https://tags.novelai.dev/)
  - Danbooru 标签超市是一个专为 AI 绘画爱好者设计的在线工具，旨在帮助用户高效构建和优化用于 Danbooru 风格模型的提示词（Prompt）；该网站收录了超过 3000 个带配图的标签及多组预设模型，提供可视化的"购物车"界面让用户通过点击添加正向或负向标签、拖拽调整权重顺序，并支持在 Stable-Diffusion-WebUI 与 NovelAI 两种格式间切换强调符号；此外，它还具备高级功能如创建标签替换、轮转等混合组，内置新旧两种语法解析器以导入现有提示词，且作为遵循 GNU AGPL-3.0 协议的开源项目，其源码与数据均在 GitHub 上公开供社区贡献。
- [NovelAI 元数据解析](https://spell.novelai.dev/)
  - NovelAI 官方推出的图像元数据解析工具，上传带元数据的 AI 生成图即可自动反推其完整提示词、模型、采样参数等生成信息，方便逆向学习他人的出图配置。
- [Danbooru](https://danbooru.donmai.us/)
  - Danbooru 本家图站，虽然存在语言（英文/日文标签）和网络（需翻墙）双重门槛，但绝对是目前最全面的标签来源——收录标签量级远超任何衍生工具，且绝大多数标签配有详细 Wiki 说明，帮助创作者准确理解每个标签的具体含义与用法。
- [AITag](https://aitag.win/)
  - 抓取了 Pixiv 上大量带元数据的 AI 生成图像，方便直接参考别人实际使用的提示词。注意：网站上 R18 内容占比较高，浏览时请留意场合。
