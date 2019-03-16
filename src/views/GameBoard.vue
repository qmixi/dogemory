<template>
  <div class="board">
    <GameHeader :current-player="currentPlayer" />
    <div class="board__content">
      <div class="board__scores">
        <Scores />
        <div style="text-align: left">{{ scores }}</div>
      </div>
      <div class="board__cards">
        <CardsMatrix :cards="cards" :on-card-select="selectCard" :is-flipped="isCardFlipped" />
      </div>
    </div>
  </div>
</template>

<script>
import GameHeader from "@/components/GameHeader";
import CardsMatrix from "@/components/CardsMatrix";
import Scores from "@/components/Scores";

import {
  START_NEW_GAME,
  SET_NEXT_PLAYER,
  INCREASE_CURRENT_PLAYER_SCORE,
  SET_MATCHED_PAIR
} from "@/types";

export default {
  name: "Home",
  components: { GameHeader, CardsMatrix, Scores },
  data() {
    return {
      selectedCards: []
    };
  },
  computed: {
    cards() {
      return this.$store.state.game.pairs || [];
    },
    matchedPairs() {
      return this.$store.state.game.matchedPairs || [];
    },
    currentPlayer() {
      return this.$store.state.game.currentPlayer || 1;
    },
    scores() {
      return this.$store.state.game.scores.toString() || [].toString();
    }
  },
  // beforeMount() {
  //   this.$store.dispatch(START_NEW_GAME, {
  //     players: 4,
  //     pairs: 8,
  //     breed: "Random"
  //   });
  // },
  methods: {
    selectCard(index) {
      if (this.selectedCards.length < 2) {
        this.selectedCards.push(index);
      }

      if (this.selectedCards.length === 2) {
        const firstCard = this.cards[this.selectedCards[0]];
        const secondCard = this.cards[this.selectedCards[1]];

        if (firstCard.id === secondCard.id) {
          this.setMatchedPair(firstCard.id);
          this.increaseCurrentPlayerScore();
        } else {
          this.changePlayer();
        }
        setTimeout(() => {
          this.clearSelectedCards();
        }, 1000);
      }
    },
    clearSelectedCards() {
      this.selectedCards = [];
    },
    changePlayer() {
      this.$store.commit(SET_NEXT_PLAYER);
    },
    increaseCurrentPlayerScore() {
      this.$store.commit(INCREASE_CURRENT_PLAYER_SCORE);
    },
    setMatchedPair(pairId) {
      this.$store.commit(SET_MATCHED_PAIR, pairId);
    },
    isCardFlipped(index, id) {
      return this.matchedPairs.includes(id) || this.selectedCards.includes(index);
    }
  }
};
</script>