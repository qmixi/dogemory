import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doggos: []
  },
  mutations: {
    FETCH_DOGGOS(state, doggos) {
      state.doggos = doggos;
    }
  },
  actions: {
    async fetchDoggos({ commit }) {
      const res = await axios.get("https://dog.ceo/api/breed/hound/images/random/20");
      console.log("dogs", res.data);
      commit("FETCH_DOGGOS", res.data.message);
    }
  }
});
