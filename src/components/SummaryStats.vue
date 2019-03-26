<template>
  <div class="summary-stats">
    <div v-if="otherPlayers.length">
      <div class="summary-stats__header">
        <div class="summary-stats__header-title">The winner is</div>
        <div class="summary-stats__header-player">player {{ winner }}</div>
        <div class="summary-stats__header-player">
          finding <b>{{ winnerScore }}</b> pairs!
        </div>
      </div>
      <div class="summary-stats__other">
        <div class="summary-stats__other-title">Other players results:</div>
        <div class="summary-stats__items">
          <div
            v-for="(score, index) in otherPlayers"
            :key="`scores-${index}`"
            class="summary-stats__item"
          >
            <div class="summary-stats__item-title">Player {{ index + 1 }}</div>
            <div class="summary-stats__item-points">{{ score }} pairs</div>
          </div>
        </div>
      </div>
    </div>
    <div class="summary-stats__submit">
      <Button text="Let's play again 🔥" medium :on-click="startNewGame" />
    </div>
  </div>
</template>

<script>
import { maxBy } from "lodash";
import { INITIALIZE_NEW_GAME } from "@/types";
import Button from "@/components/Button.vue";

export default {
  name: "SummaryStats",
  components: { Button },
  props: {
    scores: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    winner() {
      return this.getWinnerIndex(this.scores) + 1;
    },
    winnerScore() {
      return this.scores[this.getWinnerIndex(this.scores)];
    },
    otherPlayers() {
      const scores = [...this.scores];
      scores.splice(this.getWinnerIndex(this.scores), 1);
      return scores;
    }
  },
  methods: {
    getWinnerIndex(scores) {
      return scores.indexOf(maxBy(this.scores));
    },
    startNewGame() {
      this.$store.commit(INITIALIZE_NEW_GAME);
      this.$router.push({ name: "new" });
    }
  }
};
</script>

<style scoped lang="scss">
.summary-stats {
  width: 500px;
  margin: auto;
  background: white;
  padding: 30px;
  text-align: left;
  box-shadow: 0px 0px 61px 6px rgba(100, 100, 100, 0.17);
  color: $text-dark;

  &__header {
    display: flex;
    font-size: 22px;
    justify-content: center;
    border-bottom: 1px solid $blue;
    padding-bottom: 20px;
    position: relative;

    &:before,
    &:after {
      content: "🥇";
      position: absolute;
      font-size: 32px;
      top: -4px;
    }

    &:before {
      left: 12px;
    }

    &:after {
      right: 12px;
    }

    &-player {
      padding: 0 5px;
    }
  }

  &__other {
    margin-top: 40px;
    margin-bottom: 50px;

    &-title {
      padding-bottom: 20px;
      font-size: 20px;
      color: $text-light;
    }
  }

  &__items {
    padding: 0 0 0 25px;
    font-size: 20px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid $border-light;

    &:before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      left: -22px;
      top: 9px;
      position: absolute;
    }

    &:nth-child(1):before,
    &:nth-child(1):after {
      background: $red;
    }

    &:nth-child(2):before,
    &:nth-child(2):after {
      background: $orange;
    }

    &:nth-child(3):before,
    &:nth-child(3):after {
      background: $violet;
    }

    &:nth-child(4):before,
    &:nth-child(4):after {
      background: $blue;
    }

    &:not(:last-child) {
    }

    &-title {
      color: $text-light;
      width: 100px;
      text-align: left;
    }

    &-points {
      font-weight: bold;
    }

    &:after {
      content: "";
      width: 0%;
      display: block;
      height: 2px;
      position: absolute;
      top: 31px;
      left: 0px;
      transition: all 0.35s ease-out;
    }

    &--active:after {
      width: 100%;
    }
  }

  &__submit {
    text-align: center;
  }
}
</style>
