<template>
  <div>
    <h1>TOP</h1>
    <div class="articles">
      <NuxtLink
        v-for="article in articles"
        :key="article.id"
        :to="`/blog/${article.id}`"
        class="card"
        :class="{ active: articleStore.id === article.id }"
        @click="articleStore.setActiveArticle(article)"
      >
        <span class="card_emoji">{{ article.emoji }}</span>
        <span class="card_title">{{ article.title }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useArticleStore } from "~/stores/article.js";

const articleStore = useArticleStore();

const { data: articles } = useFetch("/articles.json", {
  transform: (data) => data.articles,
});
</script>

<style lang="scss" scoped>
.articles {
  margin-inline: auto;
  display: flex;
  justify-content: center;
  gap: 24px;
  max-width: 600px;
}
.card .card_emoji {
  view-transition-name: article-emoji;
}
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 16px;
}
.card_emoji {
  font-size: 48px;
}
.card_title {
  color: #1e293b;
  font-size: 16px;
  font-weight: bold;
}
</style>
