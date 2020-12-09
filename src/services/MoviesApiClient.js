import http from "./httpClient";

class MoviesApiClient {
  static getAllMovies() {
    return http.get("/movies");
  }

  static getMovie(id) {
    return http.get(`movies/${id}`);
  }

  static deleteMovie(id) {
    return http.get(`/movies/${id}`, {
      method: "delete",
    });
  }

  static createMovie(movie) {
    return http.get("/movies", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  static updateMovie(movie) {
    return http.get(`/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(movie),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
}

export default MoviesApiClient;
