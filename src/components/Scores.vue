<template>
  <div class="scores">
    <div
      v-for="(score, index) in scores"
      :key="`scores-${index}`"
      class="scores__item"
      :class="{ 'scores__item--active': currentPlayer === index + 1 }"
    >
      <div class="scores__item-title">Player {{ index + 1 }}:</div>
      <div class="scores__item-points">{{ score }} pairs</div>
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
  position: fixed;
  top: 139px;
  left: 0;

  font-size: 22px;
  color: $text-dark;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;

  background: white;
  padding: 30px 15px 30px 40px;
  box-shadow: 0px 0px 61px 6px rgba(100, 100, 100, 0.17);

  &__item {
    display: flex;
  }
}

.scores__item {
  display: flex;
  position: relative;

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
    padding-bottom: 20px;
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
</style>
