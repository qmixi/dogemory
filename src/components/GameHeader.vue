<template>
  <div class="game-header">
    <Title :text="title" color="white" />
  </div>
</template>

<script>
import Title from "@/components/Title";

export default {
  name: "GameHeader",
  components: {
    Title
  },
  props: {
    currentPlayer: {
      type: Number,
      default: 1
    }
  },
  computed: {
    title() {
      return `Player ${this.currentPlayer} - your turn! ${this.getUserEmoji()}`;
    }
  },
  methods: {
    getUserEmoji() {
      const emojis = ["👨🏻‍🚀", "🎅🏿", "👨‍🎤", "🧙"];
      return emojis[this.currentPlayer - 1];
    }
  }
};
</script>

<style scoped lang="scss">
.game-header {
  background: $blue;
  padding: 20px 8px;

  @media screen and (min-width: $breakpoint-medium) {
    padding: 20px 20px 110px 20px;
  }
}
</style>
