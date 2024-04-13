import { useState, useEffect } from "react";
import { MovieDetails } from "../types/types";
import MovieService from "../services/MovieService";

const useMovieDetails = (imdbID: string) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (!imdbID) {
          throw new Error("IMDb ID is not defined");
        }

        const response = await MovieService.getMovieDetails(imdbID);
        setMovieDetails(response);
        setError(null);
      } catch (error) {
        console.error("Error fetching movie details: ", error);
        setError(
          "An error occurred while fetching movie details. Please try again later.",
        );
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  return { movieDetails, error };
};

export default useMovieDetails;
