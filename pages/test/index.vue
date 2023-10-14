<template>
  <div>
    <div class="test">test</div>
  </div>
</template>

<script setup>
const firestore = inject("firestore");

const test = firestore.collection("users");

onMounted(() => {
  console.log(test);
});
</script>

<style lang="scss" scoped></style>
