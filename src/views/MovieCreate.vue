<template>
  <div id="movie-create">
    <form @submit.prevent="handleSubmit" novalidate class="movie-form">
      <legend class="movie-form-legend">{{ $t("form.create.title") }}</legend>
      <router-link :to="{ name: 'Movies' }" exact> X </router-link>
      <div class="movie-form-field" :class="{ invalid: validationError }">
        <inputText
          v-model="movie.title"
          type="text"
          :label="$t('form.movieTitle')"
          :placeholder="$t('form.insert', { field: $t('form.movieTitle') })"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('title') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>
      <div class="movie-form-field" :class="{ invalid: validationError }">
        <inputText
          v-model="movie.director"
          type="text"
          :label="$t('form.movieDirector')"
          :placeholder="$t('form.insert', { field: $t('form.movieDirector') })"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('director') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>

      <div class="movie-form-field" :class="{ invalid: validationError }">
        <inputText
          v-model="movie.description"
          type="text"
          :label="$t('form.movieDescription')"
          :placeholder="
            $t('form.insert', { field: $t('form.movieDescription') })
          "
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('description') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>
      <div class="movie-form-field" :class="{ invalid: validationError }">
        <inputText
          v-model="movie.poster"
          type="text"
          :label="$t('form.posterImage')"
          :placeholder="$t('form.insert', { field: $t('form.posterImage') })"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('poster') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>

      <div class="movie-form-field" :class="{ invalid: validationError }">
        <inputNumber
          v-model="movie.duration"
          type="number"
          :label="$t('form.movieDuration')"
          :placeholder="$t('form.insert', { field: $t('form.movieDuration') })"
          min="0"
        />

        <p
          class="movie-form-feedback"
          v-if="invalidInput('duration') && submitStatus === 'ERROR'"
        >
          Field is required
        </p>
      </div>
      <div class="movie-form-field" :class="{ invalid: validationError }">
        <inputNumber
          v-model="movie.rating"
          type="number"
          :label="$t('form.movieRating')"
          :placeholder="$t('form.insert', { field: $t('form.movieRating') })"
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
      <div class="movie-form-field" :class="{ invalid: validationError }">
        <inputText
          v-model="movie.genre"
          type="text"
          :label="$t('form.movieGenre')"
          :placeholder="$t('form.insert', { field: $t('form.movieGenre') })"
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
      <div class="movie-form-field" :class="{ invalid: validationError }">
        <inputNumber
          v-model="movie.year"
          type="number"
          :label="$t('form.movieYear')"
          :placeholder="$t('form.insert', { field: $t('form.movieYear') })"
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
        <base-button type="submit" :title="$t('form.add')" />
        <base-button type="clear" :title="$t('form.clear')" @click="clearForm" />
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
        await MoviesApiClient.createMovie(movie);
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
