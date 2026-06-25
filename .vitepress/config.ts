import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/sdtutorials-zh/",
  lang: "zh-CN",
  title: "AI绘画教程资源导航",
  description: "为中文 AI 创作者整理的 AI 绘画教程资源索引 — Stable Diffusion / ComfyUI / FLUX",
  cleanUrls: true,
  outDir: "./dist",
  srcDir: "./docs",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/sdtutorials-zh/favicon.svg" }],
    ["meta", { name: "title", content: "AI绘画教程资源导航" }],
    ["meta", { name: "description", content: "为中文 AI 创作者整理的 AI 绘画教程资源索引，涵盖 Stable Diffusion、ComfyUI、FLUX。收录网站教程、B站UP主及优质文章，持续更新。" }],
    ["meta", { property: "og:title", content: "AI绘画教程资源导航" }],
    ["meta", { property: "og:description", content: "为中文 AI 创作者整理的 AI 绘画教程资源索引 — Stable Diffusion / ComfyUI / FLUX" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://gasdyueer.github.io/sdtutorials-zh/" }],
    ["meta", { name: "robots", content: "index, follow" }],
    [
      "script",
      {},
      `(function(){var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")})()`,
    ],
  ],
  themeConfig: {
    nav: [],
    sidebar: false,
    search: false,
  },

  // CSP header via meta tag (GitHub Pages doesn't support custom HTTP headers)
  transformHtml(code) {
    return code.replace(
      /<head>/,
      `<head><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'">`
    );
  },
});
