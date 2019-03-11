<template>
  <div>
    Game Board
    <div v-for="pair in pairs" :key="pair">
      <img :src="pair" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {
    pairs() {
      return this.$store.state.game.pairs || [];
    }
  }
};
</script>
