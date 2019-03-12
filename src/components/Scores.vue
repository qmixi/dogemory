<template>
  <div class="scores" :style="{ color }">{{ text }}</div>
</template>

<script>
export default {
  name: "Scores",
  props: {
    scores: {
      type: Array,
      default: () => [0, 0, 0]
    }
  }
};
</script>

<style scoped lang="scss">
.scores {
  font-size: 32px;
  color: $text-dark;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>
