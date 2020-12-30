import http from "./httpClient";

class MoviesApiClient {
  static getAllMovies() {
    return http.get("/movies");
  }

  static getMovie(id) {
    return http.get(`movies/${id}`);
  }

  static deleteMovie(id) {
    return http.delete(`/movies/${id}`);
  }

  static createMovie(movie) {
    return http.post("/movies", movie);
  }

  static updateMovie(movie) {
    return http.put(`/movies/${movie.id}`, movie);
  }
}

export default MoviesApiClient;
