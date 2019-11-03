<template>
  <div>
    <div class="background"></div>
    <header>
      <h1 class="title is-2 has-text-centered">Random Useless Facts</h1>
    </header>
    <main>
      <div class="columns is-centered is-mobile">
        <div class="column is-narrow button-fact">
          <button class="button is-success" v-on:click="getUselessFact">Get a new useless fact</button>
        </div>
      </div>

      <div>
        <p class="title is-5 has-text-grey has-text-weight-light">{{uselessFact.text}}</p>
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
.button-fact {
  padding: 30px;
}
</style>