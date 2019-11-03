<template>
  <div>
    <header>
      <h1>Random Useless Facts</h1>
    </header>
    <main>
      <button v-on:click="getUselessFact">Get a new useless fact</button>
      <div>
        <p>{{uselessFact.text}}</p>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      uselessFact: {}
    };
  },
  methods: {
    getUselessFact: function() {
      axios
        .get("http://localhost:3000")
        .then(response => {
          this.uselessFact = response.data.newFact;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>