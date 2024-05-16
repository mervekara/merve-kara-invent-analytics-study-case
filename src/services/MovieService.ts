import { MovieResponse, MovieDetails } from "../types/types";

const MovieService = {
  getMovies: async (
    searchTerm: string,
    page: number,
    year: string,
    type: string,
  ): Promise<MovieResponse> => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}&page=${page}&y=${year}&type=${type}`,
      );
      const data: MovieResponse = await response.json();

      if (!response.ok || data.Response === "False") {
        throw new Error(
          "An error occurred while fetching movies. Please try again later.",
        );
      }
      return data;
    } catch (error) {
      console.error("Error fetching movies: ", error);

      throw new Error(
        "An error occurred while fetching movies. Please try again later.",
      );
    }
  },

  getMovieDetails: async (imdbID: string): Promise<MovieDetails> => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}`,
      );
      const data: MovieDetails = await response.json();

      if (!response.ok || data.Response === "False") {
        throw new Error(
          "An error occurred while fetching movie details. Please try again later.",
        );
      }
      return data;
    } catch (error) {
      console.error("Error fetching movie details: ", error);

      throw new Error(
        "An error occurred while fetching movie details. Please try again later.",
      );
    }
  },
};

export default MovieService;
