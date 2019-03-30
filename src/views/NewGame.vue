<template>
  <div class="new-game">
    <div class="new-game__header">
      <Title text="New Game!" color="white" />
      <div class="new-game__subtitle">
        <Subtitle
          text="Add players, set number of pairs and choose your favorite breed 🎉"
          color="white"
        />
      </div>
    </div>
    <div class="new-game__form">
      <NewGameForm :breeds="breeds" :on-game-start="onGameStart" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Subtitle from "@/components/Subtitle.vue";
import NewGameForm from "@/components/NewGameForm.vue";

import { FETCH_BREEDS, START_NEW_GAME } from "@/types";

export default {
  name: "Home",
  components: {
    Title,
    Subtitle,
    NewGameForm
  },
  computed: {
    breeds() {
      return this.$store.state.breeds || [];
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
    padding: 20px 8px;

    @media screen and (min-width: $breakpoint-medium) {
      padding: 30px 20px 130px 20px;
    }
  }

  &__subtitle {
    padding-top: 10px;
  }

  &__doge {
    margin-bottom: 80px;
  }

  &__form {
    @media screen and (min-width: $breakpoint-medium) {
      top: -85px;
      position: relative;
    }
  }
}
</style>
