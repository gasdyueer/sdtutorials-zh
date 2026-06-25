import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/sdtutorials-zh/",
  lang: "zh-CN",
  title: "AI绘画教程资源导航",
  description: "Stable Diffusion / ComfyUI / FLUX 中文资源索引",
  cleanUrls: true,
  outDir: "./dist",
  srcDir: "./docs",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/sdtutorials-zh/favicon.svg" }],
    [
      "script",
      {},
      `(function(){var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")})()`,
    ],
  ],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "网站资源", link: "/website-resources" },
      { text: "UP主推荐", link: "/creators" },
      { text: "文章推荐", link: "/articles" },
    ],
    sidebar: false,
    search: {
      provider: "local",
    },
  },

  // CSP header via meta tag (GitHub Pages doesn't support custom HTTP headers)
  transformHtml(code) {
    return code.replace(
      /<head>/,
      `<head><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'">`
    );
  },
});
