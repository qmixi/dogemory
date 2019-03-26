<template>
  <div class="new-game">
    <div class="new-game__header">
      <Title text="Game Over!" color="white" />
      <div class="new-game__subtitle">
        <Subtitle text="Good job and let's play again dude. 🖖" color="white" />
      </div>
    </div>
    <div class="new-game__form">
      <SummaryStats :scores="scores" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Subtitle from "@/components/Subtitle.vue";
import SummaryStats from "@/components/SummaryStats.vue";

import { FETCH_BREEDS, START_NEW_GAME } from "@/types";

export default {
  name: "Home",
  components: {
    Title,
    Subtitle,
    SummaryStats
  },
  computed: {
    scores() {
      console.log("this.$store.state.game.scores", this.$store.state.game.scores);
      return this.$store.state.game.scores || [];
    }
  },
  beforeMount() {
    this.$store.dispatch(FETCH_BREEDS);
  },
  methods: {
    onGameStart(players, pairs, breed) {
      this.$store.dispatch(START_NEW_GAME, { players, pairs, breed });
      this.$router.push({ name: "board" });
    }
  }
};
</script>

<style scoped lang="scss">
.new-game {
  &__header {
    background: $blue;
    padding: 30px 20px 130px 20px;
  }

  &__subtitle {
    padding-top: 10px;
  }

  &__doge {
    margin-bottom: 80px;
  }

  &__form {
    position: relative;
    top: -85px;
  }
}
</style>
