import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {
  FETCH_BREEDS,
  SET_BREEDS,
  START_NEW_GAME,
  SET_PAIRS,
  INITIALIZE_NEW_GAME,
  SET_SETTINGS
} from "@/types";

Vue.use(Vuex);

const initialSettings = {
  users: 0,
  pairs: 8,
  breed: "random"
};

const initialGame = {
  currentUser: 1,
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
      state.game.settings = payload;
    },
    [SET_PAIRS](state, pairs) {
      state.game.pairs = pairs;
    },
    [SET_BREEDS](state, breeds) {
      state.breeds = [...state.breeds, ...Object.keys(breeds)];
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
      commit(SET_PAIRS, res.data.message);
    },
    async [FETCH_BREEDS]({ commit }) {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all");
      commit(SET_BREEDS, res.data.message);
    }
  }
});
