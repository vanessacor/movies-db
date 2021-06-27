<template>
  <div id="movies">
    <router-link to="/movies/create" exact>
      <p>{{ $t("addMovie") }}</p>
    </router-link>

    <PropagateLoader class="loader" color="#c22026" v-if="isloading" />
    <section v-else class="movie-list">
      <MovieCard v-for="movie in movies" :key="movie.id" v-bind:movie="movie" />
    </section>
  </div>
</template>

<script>
  // import axios from 'axios'
  import MoviesApiClient from "../services/MoviesApiClient";
  import { PropagateLoader } from "@saeris/vue-spinners";
  import MovieCard from "../components/MovieCard";

  export default {
    components: { MovieCard, PropagateLoader },

    data() {
      return {
        movies: [],
        isloading: true,
      };
    },

    methods: {
      async getMovies() {
        const response = await MoviesApiClient.getAllMovies();
        this.movies = response.data;

        this.isloading = false;
      },
    },

    mounted() {
      this.getMovies();
    },
  };
</script>

<style scope lang="scss">
  .movie-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
