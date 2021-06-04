<template>
  <div id="movie-create">
    <form @submit.prevent="handleSubmit" novalidate class="movie-form">
      <legend class="movie-form-legend">New Movie</legend>
      <router-link to="/movies" exact> X </router-link>
      <div class="movie-form-field" :class="{ invalid: validationError }">
        <inputText
          v-model="movie.title"
          type="text"
          label="Movie Title"
          placeholder="Insert Title"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('title') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>
      <div class="movie-form-field" :class="{ invalid: invalidDirector }">
        <inputText
          v-model="movie.director"
          type="text"
          label="Movie Director"
          placeholder="Insert Director Name"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('director') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>

      <div class="movie-form-field" :class="{ invalid: invalidDescription }">
        <inputText
          v-model="movie.description"
          type="text"
          label="Movie Description"
          placeholder="Insert Description"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('description') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>
      <div class="movie-form-field">
        <inputText
          v-model="movie.poster"
          type="text"
          label="Poster Image"
          placeholder="Insert Poster Image"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('poster') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>

      <div class="movie-form-field">
        <inputNumber
          v-model="movie.duration"
          type="number"
          label="Movie Duration"
          placeholder="Insert Duration"
          min="0"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('duration') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>
      <div class="movie-form-field">
        <inputNumber
          v-model="movie.rating"
          type="number"
          label="Movie Rating"
          placeholder="Insert Rating"
          min="0"
          max="5"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('rating') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>
      <div class="movie-form-field">
        <inputText
          v-model="movie.genre"
          type="text"
          label="Genre"
          placeholder="Insert Genre"
          min="0"
          max="18"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('genre') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>
      <div class="movie-form-field">
        <inputNumber
          v-model="movie.year"
          type="number"
          label="Movie Year"
          placeholder="Insert Year"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('year') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>
      <PropagateLoader
        class="loader"
        color="#c22026"
        v-if="submitStatus === 'PENDING'"
      />
      <div v-else class="movie-form-actions">
        <base-button type="submit" title="Add Movie" />
        <base-button type="clear" title="Clear" @click="clearForm" />
      </div>

      <p v-if="submitStatus === 'OK'">Thanks for your submission!</p>
      <p v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
    </form>
  </div>
</template>

<script>
  import MoviesApiClient from "../services/MoviesApiClient";
  import { PropagateLoader } from "@saeris/vue-spinners";

  import InputText from "../components/InputText";
  import InputNumber from "../components/InputText";
  import BaseButton from "../components/BaseButton";

  export default {
    components: {
      InputText,
      InputNumber,
      BaseButton,
      PropagateLoader,
    },
    data() {
      return {
        submitStatus: null,
        validationError: false,
        movie: {
          title: "",
          director: "",
          description: "",
          poster: "",
          duration: "",
          rating: "",
          genre: "",
          year: "",
        },
      };
    },

    methods: {
      handleSubmit() {
        const movie = this.movie;
        this.submitStatus = "PENDING";
        if (
          this.invalidInput("title") ||
          this.invalidInput("director") ||
          this.invalidInput("Description") ||
          this.invalidInput("Poster") ||
          this.invalidInput("Duration") ||
          this.invalidInput("Rating") ||
          this.invalidInput("Genre") ||
          this.invalidInput("Year")
        ) {
          this.submitStatus = "ERROR";
          return;
        } else {
          this.submitStatus = "OK";
        }

        this.createMovie(movie);
      },
      
      invalidInput(input) {
        if (this.movie[input] === "") {
          this.validationError = true;
          return true;
        }
      },
      async createMovie(movie) {
        const response = await MoviesApiClient.createMovie(movie);
        console.log(response);
        this.$router.push("../Movies");
      },
      clearForm(event) {
        event.preventDefault();
        this.movie = {
          title: "",
          director: "",
          description: "",
          poster: "",
          duration: "",
          rating: "",
          genre: "",
          year: "",
        };
      },
    },

  };
</script>

<style lang="scss">
  .movie-form {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    padding: 10px;
    margin: 0 auto;
    text-align: left;
    border: 2px solid $highlight-color;

    &-legend {
      margin-bottom: 80px;
      text-align: center;
      font-size: 18px;
      text-transform: uppercase;
    }
    a {
      position: absolute;
      right: 10px;
      font-size: 30px;
    }
    &-field {
      margin: 10px 0 30px 0;
    }
    &-feedback {
      margin: 0;
      padding-top: 10px;
      color: $highlight-color;
    }
    &-actions {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .submitted .field.invalid {
      border-color: $highlight-color;
      padding-left: 20px;
    }
    .loader {
      margin: 0 auto;
    }
  }
</style>
