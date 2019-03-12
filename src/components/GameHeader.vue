<template>
  <div class="game-header">
    <Title :text="title" color="white" />
  </div>
</template>

<script>
import { toWords } from "number-to-words";
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
      return `Player ${toWords(this.currentPlayer)}'s turn`;
    }
  }
};
</script>

<style scoped lang="scss">
.game-header {
  background: $blue;
  padding: 20px 20px 110px 20px;
}
</style>
