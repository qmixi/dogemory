import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";
import { uniqueId, shuffle } from "lodash";

import { colors } from "@/consts";

import {
  FETCH_BREEDS,
  SET_BREEDS,
  START_NEW_GAME,
  SET_PAIRS,
  INITIALIZE_NEW_GAME,
  SET_SETTINGS,
  SET_NEXT_PLAYER,
  SET_MATCHED_PAIR,
  SET_EMPTY_SCORES,
  INCREASE_CURRENT_PLAYER_SCORE
} from "@/types";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "dogemory_app_v1.0.0F"
});

const initialSettings = {
  players: 0,
  pairs: 4,
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
      state.game = { ...initialGame, scores: [], matchedPairs: [] };
    },
    [SET_PAIRS](state, pairs) {
      state.game.pairs = pairs;
    },
    [SET_BREEDS](state, breeds) {
      state.breeds = Object.keys(breeds);
    },
    [SET_EMPTY_SCORES](state, players) {
      for (let i = 0; i < players; i++) {
        state.game.scores.push({
          player: i + 1,
          pairs: 0,
          color: colors[i]
        });
      }
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
      const currentPlayerScore = state.game.scores.find(
        score => score.player === state.game.currentPlayer
      );
      currentPlayerScore.pairs++;
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
      commit(SET_EMPTY_SCORES, settings.players);
    },
    async [FETCH_BREEDS]({ commit }) {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all");
      commit(SET_BREEDS, res.data.message);
    }
  },
  plugins: [vuexLocal.plugin]
});
