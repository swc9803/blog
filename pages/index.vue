<template>
  <div>home</div>
</template>

<script setup>
const config = useRuntimeConfig();

onMounted(() => {
  console.log(config.public.stagingUri);
});
</script>

<style lang="scss" scoped></style>
