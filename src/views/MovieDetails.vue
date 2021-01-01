<template>
	<article class="movie-details">
		<img :src="movie.poster" alt="" class="movie-details-img" />
		<div>
			<h2>{{ movie.title }}</h2>
			<p class="movie-director">Directed by {{ movie.director }}</p>
			<p class="movie-description">{{ movie.description }}</p>
			<p><i class="icon ion-md-star"></i> {{ movie.rating }}</p>
			<div class="movie-small-details">
				<p>{{ movie.duration }} minutes</p>
				<p>{{ movie.genre }}</p>
				<p>{{ movie.year }}</p>
			</div>
		</div>
		<div class="movie-details-actions">
			<base-button title="Delete" class="delete" @click="deleteMovie"  />
			<base-button class="edit" title="Edit" />
		</div>
	</article>
</template>

<script>
	import MoviesApiClient from "../services/MoviesApiClient";
	import BaseButton from '../components/BaseButton.vue';

	export default {
		name: "movieDetails",
		components: { BaseButton },

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

			async deleteMovie(event) {
				event.preventDefault();
				this.isloading = true;
				if (confirm("are you sure you want to delete this movie?")) {
					await MoviesApiClient.deleteMovie(this.id).then((response) =>
						console.log("movie deleted", response)
					);
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

<style scoped>
	.movie-details {
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: auto auto auto;
		gap: 10px;
		padding: 10px 10px 5px;
		margin-bottom: 30px;
		border-radius: 5px;
		box-shadow: 1px 1px 5px #1d1c1b;
		text-align: left;
		color: f0f0f0;
	}

	.movie-details-img {
		grid-column: 1/2;
		grid-row: 1/3;
		width: 100%;
	}
	.movie-details-actions {
		grid-column: 1/3;
	}

	.movie-description {
		text-align: justify;
	}
	.movie-small-details {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
	}
	.movie-small-details p {
		margin-right: 5px;
	}

	i {
		color: #efc936;
	}

	.movie-details-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
</style>
