# AI绘画教程资源导航

为中文 AI 创作者整理的 AI 绘画教程资源索引，涵盖 **Stable Diffusion**、**ComfyUI**、**FLUX** 等主流工具。

收录网站教程、B站 UP主推荐及优质文章，持续更新。

## 功能

- 23 个精选资源，按「网站资源」「UP主推荐」「文章推荐」分类
- 实时搜索（标题、描述、标签）
- 分类筛选，SPA 无刷新切换
- 浅色 / 暗色双主题，跟随系统偏好 + 手动切换
- 毛玻璃卡片 + 渐变背景 + bg.png 装饰图层
- 完全静态输出，零 JS bundle（仅 ~3KB 交互脚本）

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:4321/sdtutorials-zh`。

## 添加资源

编辑 `src/data/resources.ts`：

```ts
{
  title: "资源名称",
  url: "https://...",
  description: "简短描述",
  category: "website" | "creator" | "article",
  tags: ["标签1", "标签2"],
}
```

## 部署到 GitHub Pages

1. Fork 本仓库
2. 修改 `astro.config.mjs` 中的 `site` 和 `base` 为你的仓库地址：
   ```js
   site: "https://<你的用户名>.github.io",
   base: "/<仓库名>",
   ```
3. GitHub 仓库 `Settings > Pages` → Source 选择 `GitHub Actions`
4. Push 到 `main` 分支，自动部署

## 背景图片

将你的背景图放到 `public/bg.png`，CSS 会自动引用。推荐 1920×1080 以上分辨率。

## 技术栈

| 技术 | 用途 |
|---|---|
| [Astro 5](https://astro.build) | 静态站点生成，零 JS 默认输出 |
| [Tailwind CSS v4](https://tailwindcss.com) | 原子化样式 |
| GitHub Pages + Actions | 免费托管 + 自动部署 |

## License

MIT
