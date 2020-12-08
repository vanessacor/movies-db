<template>
  <div id="app">
    <AppHeader />
    <movies v-bind:movies="movies" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Movies from "./pages/Movies.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Movies,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
