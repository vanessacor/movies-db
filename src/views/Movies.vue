<template>
	<div id="movies">
		<router-link to="/movies/create" exact>
			<p>add a Movie</p>
		</router-link>

		<PropagateLoader
			class="loader"
			color="#c22026"
			v-if="isloading"
		/>
		<section v-else class="movie-list">
			<MovieCard
				v-for="movie in movies"
				:key="movie.title"
				v-bind:movie="movie"
			/>
		</section>
	</div>
</template>

<script>
	// import axios from 'axios'
	import MoviesApiClient from "../services/MoviesApiClient";
	import { PropagateLoader } from "@saeris/vue-spinners";
	import MovieCard from "../components/MovieCard";

	export default {
		name: "movies",
		components: { MovieCard, PropagateLoader },

		data() {
			return {
				movies: [],
				isloading: true,
			};
		},

		methods: {
			async getMovies() {
				await MoviesApiClient.getAllMovies().then(
					(response) => (this.movies = response.data)
				);
				this.isloading = false;
			},
		},

		mounted() {
			this.getMovies();
		},
	};
</script>

<style>
	.movie-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
