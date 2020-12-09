<template>
  <div id="movies">
    <section class="movie-list">
      <MovieCard
        v-for="movie in movies"
        :key="movie.title"
        v-bind:movie="movie"
      />
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
import MoviesApiClient from "../services/MoviesApiClient";
import MovieCard from "../components/MovieCard";

export default {
  name: "movies",
  components: { MovieCard },

  data() {
    return {
      movies: [],
      isloading: true,
    };
  },

  methods: {
    async getMovies() {
      await MoviesApiClient.getAllMovies().then(
        (response) => (this.movies = response.data)
      );
      this.isloading = false;
    },
  },

  mounted() {
    this.getMovies();
  },
};
</script>

<style>
.movie-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
article {
  max-width: 200px;
  margin-bottom: 20px;
  margin-right: 20px;
}
img {
  width: 200px;
  height: 300px;
}
p {
  text-align: justify;
}
</style>
