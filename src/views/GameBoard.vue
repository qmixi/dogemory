<template>
  <div class="board">
    <GameHeader />
    <div class="board__content">
      <div class="board__scores">
        <Scores />
      </div>
      <div class="board__cards">
        <CardsMatrix :cards="cards" />
      </div>
    </div>
  </div>
</template>

<script>
import GameHeader from "@/components/GameHeader";
import CardsMatrix from "@/components/CardsMatrix";
import Scores from "@/components/Scores";

import { START_NEW_GAME } from "@/types";

export default {
  name: "Home",
  components: { GameHeader, CardsMatrix, Scores },
  computed: {
    cards() {
      return this.$store.state.game.pairs || [];
    }
  },
  beforeMount() {
    this.$store.dispatch(START_NEW_GAME, {
      users: 0,
      pairs: 8,
      breed: "Random"
    });
  }
};
</script>
