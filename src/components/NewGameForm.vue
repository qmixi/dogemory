<template>
  <div class="new-form">
    <div class="new-form__stage">
      <label class="new-form__label">Players:</label>
      <div class="new-form__item">
        <vue-slider v-model="players" :data="['1', '2', '3', '4']" :marks="true" />
      </div>
    </div>
    <div class="new-form__stage">
      <label class="new-form__label">Pairs:</label>
      <div class="new-form__item">
        <vue-slider v-model="pairs" :min="4" :max="32" :interval="4" :marks="true" />
      </div>
    </div>
    <div class="new-form__stage">
      <label class="new-form__label">Breed:</label>
      <div class="new-form__item">
        <v-select
          v-model="breed"
          :options="breeds"
          :clearable="false"
          max-height="200px"
        ></v-select>
      </div>
      <div v-if="players > 1" class="new-form__stage new-form__stage-notification">
        <label class="new-form__label">
          <input v-model="showNotification" type="checkbox" class="switcher" />
          Show notification on player change
        </label>
      </div>
    </div>
    <div class="new-form__submit">
      <Button text="Start game" large :on-click="startGame" />
    </div>
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
  data() {
    return {
      players: "2",
      pairs: 4,
      breed: "Random",
      showNotification: true
    };
  },
  methods: {
    startGame() {
      this.onGameStart(parseInt(this.players, 10), this.pairs, this.breed, this.showNotification);
    }
  }
};
</script>

<style lang="scss">
.new-form {
  max-width: 500px;
  margin: auto;
  background: white;
  padding: 10px 20px;
  text-align: left;
  box-shadow: 0px 0px 61px 6px rgba(100, 100, 100, 0.17);

  @media screen and (min-width: $breakpoint-medium) {
    padding: 30px;
  }

  &__stage {
    padding: 25px 0;

    input[type="checkbox"] {
      font-size: 26px;
      margin-right: 10px;
    }
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
