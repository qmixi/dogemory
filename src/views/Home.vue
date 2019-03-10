<template>
  <div class="home">
    <div class="home__header">
      <Title text="Welcome to Dogemory!" color="white" />
      <div class="home__subtitle">
        <Subtitle text="Stretch your brain with your favorite doggos 🐶" color="white" />
      </div>
    </div>
    <div class="home__doge">
      <Doge />
    </div>
    <Button text="Get started!" :on-click="newGame" large />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Title from "@/components/Title.vue";
import Subtitle from "@/components/Subtitle.vue";
import Doge from "@/components/Doge.vue";

export default {
  name: "Home",
  components: {
    Button,
    Title,
    Subtitle,
    Doge
  },
  methods: {
    newGame() {
      this.$router.push({ name: "new" });
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  &__header {
    background: $blue;
    padding: 30px 20px;
    margin-bottom: 70px;
  }

  &__subtitle {
    padding-top: 10px;
  }

  &__doge {
    margin-bottom: 80px;
  }
}
</style>
