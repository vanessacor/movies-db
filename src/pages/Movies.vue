<template>
  <div id="movies">
    <section >
      <article v-for="movie in movies" :key="movie.title">
        <img :src="movie.poster_image" alt="">
        <p>{{ movie.title }}</p>
      </article>
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
import MoviesApiClient from '../services/MoviesApiClient'

  export default {
    name: 'movies',

    data() {
      return {
        movies: [],
        isloading: true,
      }
    },
    
    methods: {
      async getMovies() {
        await MoviesApiClient.getAllMovies().then(response => (this.movies = response.data));
        this.isloading = false;
      }

    },
    
    mounted () {
      this.getMovies();
    }
    
  }
</script>

<style>
 section {
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
};
</style>