<template>
  <div class="summary">
    <div class="summary__header">
      <Title text="Game Over!" color="white" />
      <div class="summary__subtitle">
        <Subtitle
          :text="`Good job and let's play again ${scores.length > 1 ? 'guys' : 'dude'}. 🖖`"
          color="white"
        />
      </div>
    </div>
    <div class="summary__form">
      <SummaryStats :scores="scores" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Subtitle from "@/components/Subtitle.vue";
import SummaryStats from "@/components/SummaryStats.vue";

export default {
  name: "Home",
  components: {
    Title,
    Subtitle,
    SummaryStats
  },
  computed: {
    scores() {
      return this.$store.state.game.scores || [];
    }
  }
};
</script>

<style scoped lang="scss">
.summary {
  &__header {
    background: $blue;
    padding: 20px 8px;

    @media screen and (min-width: $breakpoint-medium) {
      padding: 30px 20px 130px 20px;
    }
  }

  &__subtitle {
    padding-top: 10px;
  }

  &__doge {
    margin-bottom: 80px;
  }

  &__form {
    @media screen and (min-width: $breakpoint-medium) {
      top: -85px;
      position: relative;
    }
  }
}
</style>
