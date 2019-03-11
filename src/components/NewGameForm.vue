<template>
  <div class="new-form">
    <div class="new-form__stage">
      <label class="new-form__label">Users:</label>
      <div class="new-form__item">
        <vue-slider v-model="players" :data="['1', '2', '3', '4']" :marks="true" />
      </div>
    </div>
    <div class="new-form__stage">
      <label class="new-form__label">Cards:</label>
      <div class="new-form__item">
        <vue-slider v-model="pairs" :min="8" :max="30" :interval="2" :marks="true" />
      </div>
    </div>
    <div class="new-form__stage">
      <label class="new-form__label">Breed:</label>
      <div class="new-form__item">
        <v-select v-model="breed" :options="breeds" :clearable="false"></v-select>
      </div>
    </div>
    <div class="new-form__submit">
      <Button text="Start game" @click="onGameStart" large />
    </div>

    {{breeds.length}}
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import VSelect from "vue-select";
import "vue-slider-component/theme/antd.css";
import Button from "@/components/Button";

export default {
  name: "NewGameForm",
  components: {
    VueSlider,
    VSelect,
    Button
  },
  data() {
    return {
      players: 1,
      pairs: 8,
      breed: "Random"
    };
  },
  props: {
    breeds: {
      type: Array,
      default: () => []
    },
    onGameStart: {
      type: Function,
      default: () => {}
    }
  },
  beforeMount() {
    this.$store.dispatch("fetchBreeds");
  }
};
</script>

<style lang="scss">
.new-form {
  width: 500px;
  margin: auto;
  background: white;
  padding: 30px;
  text-align: left;

  &__stage {
    padding: 25px 0;
  }

  &__label {
    font-size: 16px;
    margin-bottom: 7px;
    color: $text-light;
    display: inline-block;
  }

  &__submit {
    text-align: center;
    padding: 30px 0 30px;
  }
}
</style>
