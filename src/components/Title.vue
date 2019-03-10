<template>
  <div class="title" :style="{ color }">{{ text }}</div>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  font-size: 32px;
  color: $text-dark;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>
