<template>
  <div class="scores">
    <div v-for="(score, index) in scores" :key="`scores-${index}`" class="scores__item">
      <div class="scores__item-title">Player {{ index + 1 }}:</div>
      <div class="scores__item-points">{{ score }} pts</div>
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

  &:nth-child(1):before {
    background: $red;
  }

  &:nth-child(2):before {
    background: $orange;
  }

  &:nth-child(3):before {
    background: $violet;
  }

  &:nth-child(4):before {
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
}
</style>
