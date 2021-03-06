<template>
  <div class="summary-stats">
    <div v-if="otherPlayers.length">
      <div class="summary-stats__header">
        <div class="summary-stats__header-title">The winner is</div>
        <div class="summary-stats__header-player" :style="{ color: winner.color }">
          Player {{ winner.player }},
        </div>
        <div class="summary-stats__header-pairs">
          finding <b>{{ winner.pairs }}</b> pairs!
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
            <div class="summary-stats__item-title">
              <i class="summary-stats__item-point" :style="{ background: score.color }"></i>
              Player {{ score.player }}
            </div>
            <div class="summary-stats__item-points">{{ score.pairs }} pairs</div>
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
      return maxBy(this.scores, "pairs");
    },
    otherPlayers() {
      const scores = [...this.scores];
      scores.splice(this.getWinnerIndex(this.scores), 1);
      return scores;
    }
  },
  methods: {
    getWinnerIndex(scores) {
      return scores.indexOf(maxBy(this.scores, "pairs"));
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
  max-width: 500px;
  margin: auto;
  background: white;
  padding: 50px 10px;
  text-align: left;
  box-shadow: 0px 0px 61px 6px rgba(100, 100, 100, 0.17);
  color: $text-dark;

  @media screen and (min-width: $breakpoint-medium) {
    padding: 30px;
  }

  &__header {
    display: flex;
    font-size: 18px;
    justify-content: center;
    border-bottom: 1px solid $blue;
    padding-bottom: 20px;
    position: relative;

    @media screen and (min-width: $breakpoint-medium) {
      font-size: 22px;
    }

    &:before,
    &:after {
      content: "🥇";
      position: absolute;
      font-size: 32px;
      top: -4px;
    }

    &:before {
      left: 50%;
      transform: translate(-50%, 0);
      top: -43px;
      font-size: 35px;

      @media screen and (min-width: $breakpoint-medium) {
        left: 25px;
        top: -4px;
        font-size: 32px;
      }
    }

    &:after {
      display: none;

      @media screen and (min-width: $breakpoint-medium) {
        display: block;
        right: 12px;
      }
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
      font-size: 18px;
      color: $text-light;

      @media screen and (min-width: $breakpoint-medium) {
        font-size: 20px;
      }
    }
  }

  &__items {
    padding: 0 0 0 25px;
    font-size: 18px;

    @media screen and (min-width: $breakpoint-medium) {
      font-size: 20px;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid $border-light;

    &-point {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      left: -22px;
      top: 9px;
      position: absolute;
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
