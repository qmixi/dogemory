<template>
  <div
    class="cards"
    :class="{
      'cards--small': cards.length < 17,
      'cards--medium': cards.length > 16 && cards.length < 25
    }"
  >
    <div
      v-for="(card, index) in cards"
      :key="`card-${index}`"
      class="card"
      :class="{ flipped: isFlipped(index, card.id) }"
      @click="() => onCardSelect(index)"
    >
      <div class="card__flipper">
        <div class="card__placeholder">Dogemory</div>
        <div class="card__img" :style="{ 'background-image': `url('${card.img}')` }" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsMatrix",
  components: {},
  props: {
    cards: {
      type: Array,
      default: () => []
    },
    isFlipped: {
      type: Function,
      default: () => false
    },
    onCardSelect: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      selected: []
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, 125px);
  margin-left: 250px;
  padding: 30px 0;
  position: relative;
  top: -100px;

  &--small {
    grid-template-columns: repeat(4, 125px);
  }

  &--medium {
    grid-template-columns: repeat(6, 125px);
  }
}

.card {
  -webkit-perspective: 1000;
  box-shadow: 0px 0px 61px 6px rgba(100, 100, 100, 0.17);
  background: rgba(100, 100, 100, 0.1);
  cursor: pointer;
}

.card.flipped .card__flipper {
  -webkit-transform: rotateY(180deg);
}

.card,
.card__placeholder,
.card__img {
  width: 125px;
  height: 125px;
}

.card__flipper {
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  position: relative;
}

.card__placeholder,
.card__img {
  -webkit-backface-visibility: hidden;
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
}

.card__placeholder {
  z-index: 2;
  background: white;
  color: $blue;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__img {
  -webkit-transform: rotateY(180deg);
  background-size: cover;
  background-position: center;
}
</style>
