<template>
  <article>
    <img src="" alt="" />
    <h2>{{ movie.title }}</h2>
    <h3>Description</h3>
    <p>{{ movie.description }}</p>
    <h3>duration</h3>
    <p>{{ movie.duration }}</p>
    <h3>Rating</h3>
    <p>{{ movie.rating }}</p>
    <h3>Classification</h3>
    <p>{{ movie.classification }}</p>
    <h3>Year</h3>
    <p>{{ movie.year }}</p>
  </article>
</template>

<script>
import MoviesApiClient from "../services/MoviesApiClient";

export default {
  name: "movieDetails",

  data() {
    return {
      movie: {},
      isloading: true,
      id: this.$route.params.id,
    };
  },

  methods: {
    async getMovie() {
      await MoviesApiClient.getMovie(this.id).then(
        (response) => (this.movie = response.data)
      );
      this.isloading = false;
    },
  },

  mounted() {
    this.getMovie();
  },
};
</script>
