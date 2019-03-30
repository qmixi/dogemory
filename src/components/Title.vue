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
  font-size: 23px;
  color: $text-dark;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;

  @media screen and (min-width: $breakpoint-small) {
    font-size: 32px;
  }
}
</style>
