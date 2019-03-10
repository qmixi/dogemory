<template>
  <div class="cards">
    <div v-for="card in cards" :key="card"></div>
  </div>
</template>

<script>
export default {
  name: "CardsMatrix",
  components: {},
  props: {
    cards: {
      default: () => [],
      type: Array
    }
  }
};
</script>

<style scoped lang="scss">
.cards {
}
</style>
