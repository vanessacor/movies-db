import http from "./httpClient";

class MoviesApiClient {
  
  getAllMovies() {
    return http.get("/movies")
  }

  getMovie(id) {
    return http.get(`movies/${id}`);
  }

  // deleteMovie(id) {
  //   return get(`${this.baseUrl}/books/${id}`, {
  //     method: "delete",
  //   });
  // }

  // createMovie(movie) {
  //   return get(`${this.baseUrl}/movies`, {
  //     method: "POST",
  //     body: JSON.stringify(movie),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }

  // updateMovie(movie) {
  //   return get(`${this.baseUrl}/movies/${movie.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(movie),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }
}

export default new MoviesApiClient();

