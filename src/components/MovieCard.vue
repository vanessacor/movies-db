<template>
  <article :key="movie.title">
    <router-link :to="`/movies/${movie.id}`">
    <img :src="movie.poster_image" alt="" />
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
