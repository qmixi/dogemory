<template>
  <div class="nav">
    <div class="nav__logo">
      <router-link to="/">Dogemory</router-link>
    </div>
    <div class="nav__new-game" @click="setNewGame">New Game</div>
  </div>
</template>

<script>
import { INITIALIZE_NEW_GAME } from "@/types";

export default {
  name: "Nav",
  methods: {
    setNewGame() {
      this.$store.dispatch(INITIALIZE_NEW_GAME);
      this.$router.push({ name: "new" });
    }
  }
};
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  background: white;
  height: $nav-height;
  align-items: center;
  padding: 0 20px;

  &__logo {
    color: $blue;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
  }

  &__new-game {
    cursor: pointer;
    color: $text-light;
    transition: all 0.2s ease-out;

    &:hover {
      color: $text-dark;
    }
  }
}
</style>
