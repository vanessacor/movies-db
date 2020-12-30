<template>
  <div id="movie-form">
    <form @submit.prevent="handleSubmit" class="movie-form">
    <div>
      <label>Movie Title</label>
      <input v-model="movie.title" type="text" />
    </div> 

    <div>
      <label>Movie description</label>
      <input v-model="movie.description" type="text" />
    </div>

    <div>
      <label>Movie Poster</label>
      <input v-model="movie.poster_image" type="text" />
    </div>

    <div>
      <label>Movie duration</label>
      <input v-model="movie.duration" type="number" />

    </div>
    <div>

      <label>Movie rating</label>
      <input v-model="movie.rating" type="number" />
    </div>

    <div>
      <label>Movie classification</label>
      <input v-model="movie.classification" type="number" />
    </div>

    <div>
      <label>Movie Year</label>
      <input v-model="movie.year" type="number" />
    </div>

      <button>Add Movie</button>
    </form>
  </div>
</template>

<script>
import MoviesApiClient from "../services/MoviesApiClient";
  export default {
    name: 'movie-form',
    data() {
      return {
        submitting: false,
        error: false,
        movie: {
        title: '',
        description: '',
        poster_image: '',
        duration: '',
        rating: '',
        classification: '',
        year: ''
        },
      }
    },
    methods: {
    handleSubmit() {
        this.isloading = true
    const  movie = this.movie;   
     console.log(movie)

    this.createMovie(movie)
    },

    async createMovie(movie) {
        await MoviesApiClient.createMovie(movie).then(
         (response) => (console.log (response))
      );
        this.isloading = false;
    }
    
    },

    
 }

</script>

<style scoped>

  .movie-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
</style>