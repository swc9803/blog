<template>
  <div class="home">home</div>
</template>

<script setup>
const config = useRuntimeConfig();

onMounted(() => {
  console.log(config.public.apiKey);
});
</script>

<style lang="scss" scoped></style>
