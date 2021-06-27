<template>
  <div>
    <PropagateLoader class="loader" color="#c22026" v-if="isloading" />
    <article v-else class="movie-details">
      <img :src="movie.poster" alt="" class="movie-details-img" />
      <div>
        <h2>{{ movie.title }}</h2>
        <p class="movie-details-director">Directed by {{ movie.director }}</p>
        <p class="movie-details-description">{{ movie.description }}</p>
        <p><i class="icon ion-md-star"></i> {{ movie.rating }}</p>
        <div class="movie-details-small">
          <p>{{ movie.duration }} minutes</p>
          <p>{{ movie.genre }}</p>
          <p>{{ movie.year }}</p>
        </div>
      </div>
      <div class="movie-details-actions">
        <base-button :title="$t('delete')" type="delete" @click="deleteMovie" />
        <router-link :to="{ name: 'movieEdit', params: { id: movie.id } }">
          <base-button type="edit" :title="$t('edit')" />
        </router-link>
      </div>
    </article>
  </div>
</template>

<script>
  import MoviesApiClient from "../services/MoviesApiClient";
  import BaseButton from "../components/BaseButton.vue";
  import { PropagateLoader } from "@saeris/vue-spinners";

  export default {
    components: { BaseButton, PropagateLoader },

    data() {
      return {
        movie: {},
        isloading: true,
        id: this.$route.params.id,
      };
    },

    methods: {
      async getMovie() {
        const response = await MoviesApiClient.getMovie(this.id);
        this.movie = response.data;

        this.isloading = false;
      },

      async deleteMovie(event) {
        event.preventDefault();
        this.isloading = true;
        if (confirm("are you sure you want to delete this movie?")) {
          await MoviesApiClient.deleteMovie(this.id);
          this.isloading = false;
          this.$router.push("../Movies");
        }
      },
    },

    mounted() {
      this.getMovie();
    },
  };
</script>

<style scoped lang="scss">
  .movie-details {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto;
    gap: 15px;
    padding: 10px 10px 5px;
    margin-bottom: 30px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #1d1c1b;
    text-align: left;
    color: f0f0f0;

    &-img {
      grid-column: 1/2;
      grid-row: 1/3;
      width: 100%;
    }
    &-actions {
      grid-column: 1/3;
    }
    &-description {
      text-align: justify;
    }
    &-small {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      p {
        margin-right: 5px;
      }
    }
    i {
      color: #efc936;
    }
    &-actions {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }

  @media only screen and (min-width: 768px) {
    .movie-details {
      max-width: 800px;
      margin: 0 auto;
    }
  }
</style>
