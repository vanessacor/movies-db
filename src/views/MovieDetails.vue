<template>
	<article class="movie-details">
		<img :src="movie.poster" alt="" class="movie-details-img" />
		<h2>{{ movie.title }}</h2>
		<p class="movie-director">Directed by {{ movie.director }}</p>
		<p class="movie-description">{{ movie.description }}</p>
		<p>{{ movie.duration }} minutes</p>
		<p><i class="icon ion-md-star"></i> {{ movie.rating }}</p>
		<p>{{ movie.genre }}</p>
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

<style scoped>
	.movie-details {
		padding: 10px 10px 5px;
		margin-bottom: 30px;
		border-radius: 5px;
		box-shadow: 1px 1px 5px #1d1c1b;
		text-align: left;
		color: f0f0f0;
	}

	.movie-description {
		text-align: justify;
	}

	i {
		color: #efc936;
	}
</style>
