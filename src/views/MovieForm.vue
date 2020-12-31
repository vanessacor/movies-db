<template>
	<div id="movie-form">
		<form @submit.prevent="handleSubmit" novalidate>
			<div class="field">
				<inputText
					v-model="movie.title"
					type="text"
					label="Title"
					placeholder="Insert Title"
				/>

				<p class="feedback">Field is required</p>
			</div>

			<div class="field">
				<inputText
					v-model="movie.description"
					type="text"
					label="description"
					placeholder="Insert description"
				/>

				<p class="feedback">Field is required</p>
			</div>
			<div class="field">
				<inputText
					v-model="movie.poster_image"
					type="text"
					label="Poster Image"
					placeholder="Insert Poster Image"
				/>

				<p class="feedback">Field is required</p>
			</div>

			<div class="field">
				<inputNumber
					v-model="movie.duration"
					type="number"
					label="duration"
					placeholder="Insert duration"
				/>

				<p class="feedback">Field is required</p>
			</div>
			<div class="field">
				<inputNumber
					v-model="movie.rating"
					type="number"
					label="rating"
					placeholder="Insert rating"
				/>

				<p class="feedback">Field is required</p>
			</div>
			<div class="field">
				<inputNumber
					v-model="movie.classification"
					type="number"
					label="classification"
					placeholder="Insert classification"
				/>

				<p class="feedback">Field is required</p>
			</div>
			<div class="field">
				<inputNumber
					v-model="movie.year"
					type="number"
					label="Movie Year"
					placeholder="Insert Year"
				/>

				<p class="feedback">Field is required</p>
			</div>

			<button>Add Movie</button>
			<p class="typo__p" v-if="submitStatus === 'OK'">
				Thanks for your submission!
			</p>
			<p class="typo__p" v-if="submitStatus === 'ERROR'">
				Please fill the form correctly.
			</p>
			<p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
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
				error: false,
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
				this.createMovie(movie);
				this.submitStatus = "PENDING";
				setTimeout(() => {
					this.submitStatus = "OK";
				}, 500);
			},

			async createMovie(movie) {
				await MoviesApiClient.createMovie(movie).then((response) =>
					console.log(response)
				);
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
	form {
		text-align: left;
	}
	.field {
		border-left: 3px solid transparent;
		display: block;
		margin-bottom: 20px;
	}
	.field label {
		display: block;
		margin-bottom: 10px;
	}
	.field .feedback {
		display: none;
	}

	form.submitted .feedback {
		display: block;
		color: red;
	}
	form.submitted .field.invalid {
		border-color: red;
		padding-left: 20px;
	}
</style>
