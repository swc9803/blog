<template>
  <div>
    <h1>TOP</h1>
    <div class="articles">
      <NuxtLink to="/blog/1" class="card">
        <span class="card_emoji">🐶</span>
        <span class="card_title">글1</span>
      </NuxtLink>
      <NuxtLink to="/blog/2" class="card">
        <span class="card_emoji">🐱</span>
        <span class="card_title">글2</span>
      </NuxtLink>
      <NuxtLink to="/blog/3" class="card">
        <span class="card_emoji">🐮</span>
        <span class="card_title">글3</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.articles {
  margin-inline: auto;
  display: flex;
  justify-content: center;
  gap: 24px;
  max-width: 600px;
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
    .card_emoji {
      font-size: 48px;
    }
    .card_title {
      color: #1e293b;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
