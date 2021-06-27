<template>
  <div id="movie-edit">
    <!-- <PropagateLoader class="loader" color="#c22026" v-if="isloading" /> -->
    <form @submit.prevent="handleSubmit" novalidate class="movie-form">
      <legend class="movie-form-legend">{{ $t("form.edit.title") }}</legend>
      <router-link to="/movies" exact> X </router-link>
      <div class="movie-form-field" :class="{ invalid: invalidInput('title') }">
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
      <div
        class="movie-form-field"
        :class="{ invalid: invalidInput('director') }"
      >
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

      <div
        class="movie-form-field"
        :class="{ invalid: invalidInput('description') }"
      >
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
      <div class="movie-form-field">
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

      <div class="movie-form-field">
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
      <div class="movie-form-field">
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
        <base-button type="submit" :title="$t('save')" />
        <router-link to="/movies" exact>
          <base-button type="cancel" :title="$t('cancel')" />
        </router-link>
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
        movie: {},
        id: this.$route.params.id,
        submitStatus: null,
        validationError: false,
      };
    },

    methods: {
      async getMovie() {
        const response = await MoviesApiClient.getMovie(this.id);
        this.movie = response.data;
      },
      handleSubmit() {
        const movie = this.movie;
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
          this.submitStatus = "PENDING";
          setTimeout(() => {
            this.submitStatus = "OK";
          }, 500);
        }
        this.updateMovie(movie);
      },

      invalidInput(input) {
        if (this.movie[input] === "") {
          this.validationError = true;
          return true;
        }
      },

      async updateMovie(movie) {
        const response = await MoviesApiClient.updateMovie(movie);
        console.log(response);

        this.$router.push({ name: "Movies" });
      },
    },
    mounted() {
      this.getMovie();
    },
  };
</script>


