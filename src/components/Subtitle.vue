<template>
  <div class="subtitle" :style="{ color }">{{ text }}</div>
</template>

<script>
export default {
  name: "Subtitle",
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
.subtitle {
  color: white;
  font-size: 19px;
  font-weight: 300;

  @media screen and (min-width: $breakpoint-small) {
    font-size: 25px;
  }
}
</style>
