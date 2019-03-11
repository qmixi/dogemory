<template>
  <div class="new-game">
    <div class="new-game__header">
      <Title text="New Game!" color="white" />
      <div class="new-game__subtitle">
        <Subtitle
          text="Add players, set pairs amount and choose your favorite breed 🎉"
          color="white"
        />
      </div>
    </div>
    <div class="new-game__form">
      <NewGameForm  breeds={breeds} :on-game-start="onGameStart"/>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Subtitle from "@/components/Subtitle.vue";
import NewGameForm from "@/components/NewGameForm.vue";

export default {
  name: "Home",
  components: {
    Title,
    Subtitle,
    NewGameForm
  },
  computed: {
    breeds() {
      console.log('this.$store.state.breeds', this.$store.state.breeds)
      return this.$store.state.breeds || [];
    }
  },
  methods: {
    onGameStart() {
      this.$router.push({ name: "new" });
    
    }
  },
};
</script>

<style scoped lang="scss">
.new-game {
  &__header {
    background: $blue;
    padding: 30px 20px 130px 20px;
  }

  &__subtitle {
    padding-top: 10px;
  }

  &__doge {
    margin-bottom: 80px;
  }

  &__form {
    position: relative;
    top: -85px;
  }
}
</style>
