<template>
  <div class="scores">
    <div
      v-for="(score, index) in scores"
      :key="`scores-${index}`"
      class="scores__item"
      :class="{ 'scores__item--active': currentPlayer === index + 1 }"
    >
      <div class="scores__item-title">
        <i class="scores__item-point" :style="{ background: score.color }"></i>
        <i class="scores__item-line" :style="{ background: score.color }"></i>
        Player {{ index + 1 }}:
      </div>
      <div class="scores__item-points">
        {{ score.pairs }} {{ score.pairs === 1 ? "pair" : "pairs" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scores",
  props: {
    scores: {
      type: Array,
      default: () => [0, 0, 0]
    },
    currentPlayer: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style scoped lang="scss">
.scores {
  @media screen and (min-width: $breakpoint-medium) {
    position: fixed;
    top: 139px;
    left: 0;
    z-index: 99;
  }

  font-size: 21px;
  color: $text-dark;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;

  background: white;
  padding: 30px 15px 30px 35px;
  box-shadow: 0px 0px 61px 6px rgba(100, 100, 100, 0.17);

  &__item {
    display: flex;
  }
}

.scores__item {
  display: flex;
  position: relative;

  &-point {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: -22px;
    top: 9px;
    position: absolute;
  }

  &:not(:last-child) {
    padding-bottom: 20px;
  }

  &-title {
    color: $text-light;
    width: 100px;
    text-align: left;
  }

  &-points {
    font-weight: bold;
    width: 83px;
    text-align: left;
  }

  &-line {
    width: 0%;
    display: block;
    height: 2px;
    position: absolute;
    top: 31px;
    left: 0px;
    transition: all 0.35s ease-out;
  }

  &--active .scores__item-line {
    width: 100%;
  }
}
</style>
