<template>
	<article :key="movie.title" class="movie-card">
		<router-link :to="{name: 'movieDetails', params: {id: movie.id}}" class="movie-card-link">
			<img :src="movie.poster" alt="" class="movie-img" />
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

<style scope lang="scss">
	.movie-card {
		max-width: 200px;
		margin-bottom: 20px;
		margin-right: 20px;
	}
	a {
		color: $base-color-light;
		text-decoration: none;
	}

	a:hover {
		color: $highlight-color;
	}

	a:hover img {
		filter: grayscale(100%);
	}
	.movie-img {
		width: 200px;
		height: 300px;
	}
</style>
