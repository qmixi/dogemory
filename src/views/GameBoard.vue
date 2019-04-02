<template>
  <div class="board">
    <GameHeader :current-player="currentPlayer" />
    <div class="board__content">
      <div class="board__scores">
        <Scores :scores="scores" :current-player="currentPlayer" />
      </div>
      <div class="board__cards">
        <CardsMatrix :cards="cards" :on-card-select="selectCard" :is-flipped="isCardFlipped" />
      </div>
    </div>
    <PlayerTurnInfo
      v-if="playersCount > 1 && isInfoVisible"
      :text="`Player ${currentPlayer}'s turn!`"
      :color="getCurrentPlayerColor()"
    />
  </div>
</template>

<script>
import GameHeader from "@/components/GameHeader";
import CardsMatrix from "@/components/CardsMatrix";
import Scores from "@/components/Scores";
import PlayerTurnInfo from "@/components/PlayerTurnInfo";

import { SET_NEXT_PLAYER, INCREASE_CURRENT_PLAYER_SCORE, SET_MATCHED_PAIR } from "@/types";

export default {
  name: "Home",
  components: { GameHeader, CardsMatrix, Scores, PlayerTurnInfo },
  data() {
    return {
      selectedCards: [],
      isInfoVisible: false
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
    playersCount() {
      return this.$store.state.settings.players;
    },
    scores() {
      return this.$store.state.game.scores || [];
    },
    totalPairsCount() {
      return this.$store.state.settings.pairs;
    }
  },
  methods: {
    selectCard(index) {
      if (this.selectedCards.length === 2) {
        return;
      } else if (this.selectedCards.length < 2 && !this.selectedCards.includes(index)) {
        this.selectedCards.push(index);
      }

      if (this.selectedCards.length === 2) {
        this.checkPair();
      }
    },
    checkPair() {
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
    },
    clearSelectedCards() {
      this.selectedCards = [];
    },
    changePlayer() {
      setTimeout(() => {
        this.isInfoVisible = true;
      }, 1000);
      this.$store.commit(SET_NEXT_PLAYER);
      setTimeout(() => {
        this.isInfoVisible = false;
      }, 2500);
    },
    increaseCurrentPlayerScore() {
      this.$store.commit(INCREASE_CURRENT_PLAYER_SCORE);
    },
    setMatchedPair(pairId) {
      this.$store.commit(SET_MATCHED_PAIR, pairId);
      if (this.matchedPairs.length === this.totalPairsCount) {
        setTimeout(() => {
          this.$router.push({ name: "summary" });
        }, 1500);
      }
    },
    isCardFlipped(index, id) {
      return this.matchedPairs.includes(id) || this.selectedCards.includes(index);
    },
    getCurrentPlayerColor() {
      return this.scores.find(score => score.player === this.currentPlayer).color;
    }
  }
};
</script>
