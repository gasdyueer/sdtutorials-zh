<script setup lang="ts">
import ResourceGrid from "./ResourceGrid.vue";

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");
  if (isDark) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
</script>

<template>
  <div class="bg-layer" aria-hidden="true"></div>

  <header class="site-header">
    <nav style="margin: 0 auto; max-width: 72rem; display: flex; align-items: center; justify-content: space-between; padding: 1rem 1rem;">
      <div>
        <a href="/sdtutorials-zh/" style="font-size: 1.125rem; font-weight: 600; letter-spacing: -0.025em; color: #18181b; text-decoration: none;">
          AI绘画教程资源导航
        </a>
        <p style="margin-top: 0.125rem; font-size: 0.75rem; color: #71717a;">
          Stable Diffusion / ComfyUI / FLUX 中文资源索引
        </p>
      </div>
      <div style="display: flex; align-items: center;">
        <button
          class="theme-toggle"
          aria-label="切换主题"
          title="切换主题"
          @click="toggleTheme"
        >
          <svg class="theme-sun" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          <svg class="theme-moon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>
      </div>
    </nav>
  </header>

  <main style="flex: 1; position: relative; z-index: 10;">
    <!-- Hero -->
    <section class="hero-section" style="margin: 0 auto; max-width: 72rem; padding: 5rem 1rem 3rem;">
      <h1 class="hero-title">AI绘画教程资源导航</h1>
      <p class="hero-sub">
        为中文 AI 创作者整理的资源索引，涵盖 Stable Diffusion、ComfyUI、FLUX 等工具。
        收录网站教程、B站UP主及优质文章，持续更新。
      </p>
    </section>

    <ResourceGrid />
  </main>

  <footer class="site-footer">
    <div style="margin: 0 auto; max-width: 72rem; padding: 0 1rem; text-align: center; font-size: 0.875rem; color: #a1a1aa;">
      <p>AI绘画教程资源导航 - 为中文 AI 创作者整理的资源索引</p>
      <p style="margin-top: 0.25rem;">
        资源来源于社区公开信息，如有问题请
        <a href="https://github.com/gasdyueer/sdtutorials-zh/issues" style="text-decoration: underline; text-underline-offset: 2px;">提交 Issue</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
nav a[href="/sdtutorials-zh/"] {
  color: #18181b;
}

html.dark nav a[href="/sdtutorials-zh/"] {
  color: oklch(0.967 0.001 286.375);
}
</style>
