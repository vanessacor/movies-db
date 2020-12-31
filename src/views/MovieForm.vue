<template>
	<div id="movie-form">
		<form @submit.prevent="handleSubmit" novalidate class="movie-form">
			<div class="movie-form-field" :class="{ invalid: invalidTitle }">
				<inputText
					v-model="movie.title"
					type="text"
					label="Movie Title"
					placeholder="Insert Title"
				/>

				<p
					class="movie-form-feedback"
					v-if="invalidTitle && submitStatus === 'ERROR'"
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
					v-if="invalidDescription && submitStatus === 'ERROR'"
				>
					Field is required
				</p>
			</div>
			<div class="movie-form-field">
				<inputText
					v-model="movie.poster_image"
					type="text"
					label="Poster Image"
					placeholder="Insert Poster Image"
					
				/>

				<p
					class="movie-form-feedback"
					v-if="invalidPosterImage && submitStatus === 'ERROR'"
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
					v-if="invalidDuration && submitStatus === 'ERROR'"
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
					v-if="invalidRating && submitStatus === 'ERROR'"
				>
					Field is required
				</p>
			</div>
			<div class="movie-form-field">
				<inputNumber
					v-model="movie.classification"
					type="number"
					label="Classification"
					placeholder="Insert classification"
					min="0"
					max="18"
				/>

				<p
					class="movie-form-feedback"
					v-if="invalidClassification && submitStatus === 'ERROR'"
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
					v-if="invalidYear && submitStatus === 'ERROR'"
				>
					Field is required
				</p>
			</div>

			<button>Add Movie</button>
			<p v-if="submitStatus === 'OK'">Thanks for your submission!</p>
			<p v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
			<p v-if="submitStatus === 'PENDING'">Sending...</p>
		</form>
	</div>
</template>

<script>
	import MoviesApiClient from "../services/MoviesApiClient";

	import InputText from "../components/InputText";
	import InputNumber from "../components/InputText";

	export default {
		name: "movie-form",
		components: { InputText, InputNumber },
		data() {
			return {
				submitStatus: null,
				movie: {
					title: "",
					description: "",
					poster_image: "",
					duration: "",
					rating: "",
					classification: "",
					year: "",
				},
			};
		},

		methods: {
			handleSubmit() {
				const movie = this.movie;
				if (
					this.invalidTitle ||
					this.invalidDescription ||
					this.invalidPosterImage ||
					this.invalidDuration ||
					this.invalidRating ||
					this.invalidClassification ||
					this.invalidYear
				) {
					this.submitStatus = "ERROR";
					return;
				} else {
					this.submitStatus = "PENDING";
					setTimeout(() => {
						this.submitStatus = "OK";
					}, 500);
				}
				this.createMovie(movie);
			},

			async createMovie(movie) {
				await MoviesApiClient.createMovie(movie).then((response) =>
					console.log(response)
				);
			},
		},
		computed: {
			invalidTitle() {
				return this.movie.title === "";
			},
			invalidDescription() {
				return this.movie.description === "";
			},
			invalidPosterImage() {
				return this.movie.poster_image === "";
			},
			invalidDuration() {
				return this.movie.duration === "";
			},
			invalidRating() {
				return this.movie.rating === "";
			},
			invalidClassification() {
				return this.movie.classification === "";
			},
			invalidYear() {
				return this.movie.year === "";
			},
		},
	};
</script>

<style>
	.movie-form {
		display: flex;
		flex-direction: column;
		margin-bottom: 2rem;
	}
	.movie-form {
		text-align: left;
	}
	.movie-form-field {
		margin: 10px 0 30px 0;
	}

	.movie-form-feedback {
		margin: 0;
		padding-top: 10px;
		color: red;
	}
	.movie-form.submitted .field.invalid {
		border-color: red;
		padding-left: 20px;
	}
</style>
