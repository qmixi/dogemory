import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";
import { uniqueId, shuffle } from "lodash";

import {
  FETCH_BREEDS,
  SET_BREEDS,
  START_NEW_GAME,
  SET_PAIRS,
  INITIALIZE_NEW_GAME,
  SET_SETTINGS,
  SET_NEXT_PLAYER,
  SET_MATCHED_PAIR,
  INCREASE_CURRENT_PLAYER_SCORE
} from "@/types";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "dogemory_app_v1.0.0F"
});

const initialSettings = {
  players: 0,
  pairs: 8,
  breed: "Random"
};

const initialGame = {
  currentPlayer: 1,
  scores: [],
  pairs: [],
  matchedPairs: [],
  isFinished: false
};

export default new Vuex.Store({
  state: {
    settings: initialSettings,
    game: initialGame,
    breeds: ["Random"]
  },
  mutations: {
    [INITIALIZE_NEW_GAME](state) {
      state.settings = initialSettings;
      state.game = initialGame;
    },
    [SET_SETTINGS](state, payload) {
      state.settings = payload;
      state.game = { ...initialGame, scores: new Array(payload.players).fill(0) };
    },
    [SET_PAIRS](state, pairs) {
      state.game.pairs = pairs;
    },
    [SET_BREEDS](state, breeds) {
      state.breeds = [...state.breeds, ...Object.keys(breeds)];
    },
    [SET_MATCHED_PAIR](state, pairId) {
      state.game.matchedPairs.push(pairId);
    },
    [SET_NEXT_PLAYER](state) {
      const players = state.settings.players;
      if (players > 1) {
        const next = state.game.currentPlayer + 1;
        state.game.currentPlayer = next % players ? next % players : next;
      }
    },
    [INCREASE_CURRENT_PLAYER_SCORE](state) {
      const scores = [...state.game.scores];
      const currentPlayerScoreIndex = state.game.currentPlayer - 1;
      const newPlayerScore = ++scores[currentPlayerScoreIndex];
      scores[currentPlayerScoreIndex] = newPlayerScore;
      state.game.scores = scores;
    }
  },
  actions: {
    async [START_NEW_GAME]({ commit }, settings) {
      commit(SET_SETTINGS, settings);
      let res;
      if (settings.breed === "Random") {
        res = await axios.get(`https://dog.ceo/api/breeds/image/random/${settings.pairs}`);
      } else {
        res = await axios.get(
          `https://dog.ceo/api/breed/${settings.breed}/images/random/${settings.pairs}`
        );
      }

      // generate pairs
      const images = res.data.message;
      const data = images.map(img => ({
        id: uniqueId(),
        img
      }));
      const pairs = shuffle([...data, ...data]);

      commit(SET_PAIRS, pairs);
    },
    async [FETCH_BREEDS]({ commit }) {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all");
      commit(SET_BREEDS, res.data.message);
    }
  },
  plugins: [vuexLocal.plugin]
});
