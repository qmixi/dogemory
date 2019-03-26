<template>
  <button
    class="button"
    :class="{ 'button--large': large, 'button--medium': medium }"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: ""
    },
    large: Boolean,
    medium: Boolean,
    onClick: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  text-align: center;
  border: 0px solid transparent;
  color: $text-button;
  padding: 5px 25px;
  border-radius: 20px;
  font-size: 16px;
  background: $blue;
  box-shadow: 0px 3px 25px 5px #2e73ff73;
  cursor: pointer;
  transition: all 0.2s ease-out;
  outline: none;

  &--large {
    padding: 12px 85px;
    border-radius: 25px;
    font-size: 20px;
  }

  &--medium {
    padding: 8px 50px;
    border-radius: 25px;
    font-size: 18px;
  }

  &:hover {
    box-shadow: 0px 3px 15px 4px #2e73ff73;
    color: white;
  }
}
</style>
