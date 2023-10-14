<template>
  <div class="home">home</div>
</template>

<script setup>
const config = useRuntimeConfig();

onMounted(() => {
  console.log(config.public.apiKey);
  // console.log(config.firebaseConfig.apiKey);
});
</script>

<style lang="scss" scoped></style>
