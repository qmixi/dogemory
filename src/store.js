import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: {
      users: 0,
      pairs: 8,
      breed: "random"
    },
    game: {
      currentUser: 1,
      scores: [],
      pairs: [],
      matchedPairs: [],
      isFinished: false
    },
    breeds: []
  },
  mutations: {
    FETCH_DOGGOS(state, doggos) {
      state.game.pairs = doggos;
    },
    SET_BREEDS(state, breeds) {
      console.log("Object.keys(breeds)", Object.keys(breeds));
      state.breeds = Object.keys(breeds);
    }
  },
  actions: {
    async fetchRandomDoggos({ commit }) {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random/20");
      console.log("dogs", res.data);
      commit("FETCH_DOGGOS", res.data.message);
    },
    async fetchBreeds({ commit }) {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all");
      console.log("breeds", res.data);
      commit("SET_BREEDS", res.data.message);
    },
    async fetchDoggosByBreed({ commit }, breed) {
      console.log("breed1", breed);
      const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/20`);
      console.log("breed doggo", res.data);
      commit("FETCH_DOGGOS", res.data.message);
    }
  }
});
