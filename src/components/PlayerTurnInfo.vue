<template>
  <div class="info" :class="{ 'info--visible': !!text }" :style="{ color }">{{ text }}</div>
</template>

<script>
export default {
  name: "PlayerTurnInfo",
  props: {
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes show {
  0% {
    transform: translate(-50%, -50%) scale(0.2);
    opacity: 0;
    visibility: hidden;
  }

  70% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 1;
    visibility: visible;
  }

  100% {
    transform: translate(-50%, -50%) scale(3.5);
    opacity: 0;
    visibility: hidden;
  }
}

.info {
  position: fixed;
  z-index: 100;
  font-size: 20px;
  left: 50%;
  top: 50%;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(0.1);
  opacity: 0;
  visibility: hidden;
  animation: show 1.2s ease-out;
  color: $blue;
  cursor: default;

  &--visible {
    transform: translate(-50%, -50%) scale(0.1);
    opacity: 0;
    visibility: hidden;
  }

  @media screen and (min-width: $breakpoint-small) {
    font-size: 28px;
  }
}
</style>
