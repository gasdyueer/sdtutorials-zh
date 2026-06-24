<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { resources, categories, type CategoryKey } from "../../resources";

const searchTerm = ref("");
const activeCategory = ref<CategoryKey | "all">("all");

const categoryLabel: Record<string, string> = {
  website: "网站",
  creator: "UP主",
  article: "文章",
};

const filteredResources = computed(() => {
  const term = searchTerm.value.toLowerCase().trim();
  return resources.filter((r) => {
    if (activeCategory.value !== "all" && r.category !== activeCategory.value) return false;
    if (!term) return true;
    return (
      r.title.toLowerCase().includes(term) ||
      r.description.toLowerCase().includes(term) ||
      r.tags.some((t) => t.toLowerCase().includes(term))
    );
  });
});

function setCategory(key: CategoryKey | "all") {
  activeCategory.value = key;
  const query = key === "all" ? "" : `?category=${key}`;
  window.history.pushState({}, "", query || window.location.pathname);
}

onMounted(() => {
  const url = new URL(window.location.href);
  const cat = url.searchParams.get("category");
  if (cat && categories.some((c) => c.key === cat)) {
    activeCategory.value = cat as CategoryKey;
  }
});
</script>

<template>
  <!-- Filters -->
  <section style="margin: 0 auto; max-width: 72rem; padding: 0 1rem 1.5rem;">
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <!-- Category pills -->
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem;">
        <button
          :class="['filter-pill', { active: activeCategory === 'all' }]"
          @click="setCategory('all')"
        >
          全部
        </button>
        <button
          v-for="cat in categories"
          :key="cat.key"
          :class="['filter-pill', { active: activeCategory === cat.key }]"
          @click="setCategory(cat.key)"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Search bar -->
      <div style="position: relative; max-width: 20rem;">
        <svg
          style="position: absolute; left: 0.875rem; top: 50%; transform: translateY(-50%); width: 1rem; height: 1rem; color: #a1a1aa; pointer-events: none;"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          v-model="searchTerm"
          class="search-input"
          type="text"
          placeholder="搜索资源名称、描述、标签..."
        />
      </div>
    </div>
  </section>

  <!-- Results -->
  <section style="margin: 0 auto; max-width: 72rem; padding: 0 1rem 5rem;">
    <p class="result-count">共 {{ filteredResources.length }} 个资源</p>

    <!-- Grid -->
    <div
      v-if="filteredResources.length > 0"
      style="display: grid; gap: 1rem; grid-template-columns: repeat(1, 1fr);"
      :style="{
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
      }"
    >
      <a
        v-for="r in filteredResources"
        :key="r.url"
        :href="r.url"
        target="_blank"
        rel="noopener noreferrer"
        class="card card-link"
      >
        <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.75rem;">
          <h3 class="card-title">{{ r.title }}</h3>
          <span :class="['badge', `badge-${r.category}`]">{{ categoryLabel[r.category] }}</span>
        </div>
        <p class="card-desc line-clamp-3">{{ r.description }}</p>
        <div style="margin-top: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.375rem;">
          <span
            v-for="tag in r.tags"
            :key="tag"
            class="tag-chip"
          >{{ tag }}</span>
        </div>
      </a>
    </div>

    <!-- Empty state -->
    <div v-else class="empty-state">
      <p class="empty-title">没有找到匹配的资源</p>
      <p class="empty-sub">试试调整搜索词或筛选条件</p>
    </div>
  </section>
</template>
