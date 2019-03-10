<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="fetchDoggos">Fetch dogggos</button>
    <div>{{ doggos.length }}</div>
    <div v-for="doggo in doggos" :key="doggo">
      <img :src="doggo" />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: {
    doggos() {
      return this.$store.state.game.pairs;
    }
  },
  methods: {
    fetchDoggos() {
      console.log("this", this);
      this.$store.dispatch("fetchRandomDoggos");
      this.$store.dispatch("fetchBreeds");
      this.$store.dispatch("fetchDoggosByBreed", "labrador");
    }
  }
};
</script>
