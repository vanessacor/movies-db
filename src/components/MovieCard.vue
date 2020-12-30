<template>
  <article :key="movie.title" class="movie-card">
    <router-link :to="`/movies/${movie.id}`" class="movie-card-link">
      <img :src="movie.poster_image" alt="" class="movie-img" />
      <p>{{ movie.title }}</p>
    </router-link>
  </article>
</template>

<script>
export default {
  name: "movieCard",
  props: {
    movie: Object,
  },
};
</script>

<style scope>
.movie-card {
  max-width: 200px;
  margin-bottom: 20px;
  margin-right: 20px;

}
a {
  color: #f0f0f0;
  text-decoration: none;
}

a:hover {
   filter: grayscale(100%);
   color: #c22026 ;
}

.movie-img {
  width: 200px;
  height: 300px;
}



</style>
