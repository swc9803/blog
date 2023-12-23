<template>
  <div>
    <article v-if="article" class="article">
      <div class="article_emoji">🐶</div>
      <h1 class="article_title">글1</h1>
      <p class="article_content">
        글1 글1 글1 글1 글1 글1 글1 글1 글1 글1 글1 글1 글1 글1 글1
      </p>
    </article>
    <p v-else>글을 찾지 못했습니다.</p>
    <NuxtLink to="/" class="home-link">목록으로 돌아가기</NuxtLink>
  </div>
</template>

<script setup>
const { params } = useRoute();
const id = Number(params.id);

definePageMeta({
  validate: (route) => {
    const id = route.params.id;
    return /^\d+$/.test(id);
  },
});
</script>

<style lang="scss" scoped>
.article {
  max-width: 600px;
  margin-inline: auto;
  padding: 80px 0;
  .article_emoji {
    font-size: 400px;
    text-align: center;
  }
  .article_title {
    font-size: 40px;
    text-align: center;
  }
  .article_content {
    font-size: 16px;
  }
}
.home-link {
  padding: 24px 0;
  display: grid;
  place-items: center;
}
</style>
