<template>
  <div>
    <div class="background is-mobile"></div>

    <header>
      <h1 class="title is-2 has-text-centered button-fact">Random Useless Facts</h1>
    </header>
    <main>
      <div class="columns is-centered is-mobile">
        <div class="column is-narrow button-fact">
          <button class="button is-success" v-on:click="getUselessFact">Get a new useless fact</button>
        </div>
      </div>
      <div class="columns is-centered is-mobile">
        <div class="gif" v-if="loading">
          <img src="../src/assets/loading_icon.gif" />
        </div>
      </div>

      <div>
        <p
          class="title is-5 has-text-grey has-text-weight-light margin-p has-text-centered"
        >{{uselessFact.text}}</p>
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
      uselessFact: {},
      loading: false
    };
  },
  methods: {
    getUselessFact: function() {
      this.loading = true;
      axios
        .get("http://localhost:3000")
        .then(response => {
          this.loading = false;
          this.uselessFact = response.data.newFact;
        })
        .catch(error => {
          this.loading = false;
          console.log(error);
        });
    }
  }
};
</script>

<style>
.button-fact {
  padding: 30px;
}
.margin-p {
  margin: 30px;
}
.background {
  background-image: url("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  width: 100vw;
  height: 200px;
}
.gif {
  width: 20%;
  height: 20%;
}
</style>