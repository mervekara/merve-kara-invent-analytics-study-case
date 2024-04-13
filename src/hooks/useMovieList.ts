import { useState, useEffect } from "react";
import { Movie } from "../types/types";
import MovieService from "../services/MovieService";

const useMovieList = (
  searchTerm: string,
  currentPage: number,
  yearFilter: string,
  typeFilter: string,
) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await MovieService.getMovies(
          searchTerm,
          currentPage,
          yearFilter,
          typeFilter,
        );
        if (response.Response === "False") {
          setError(
            "An error occurred while fetching movies. Please try again later.",
          );
        } else {
          setMovies(response.Search);
          setTotalPages(Math.ceil(response.totalResults / 10));
          setError("");
        }
      } catch (error) {
        console.error("Error fetching movies: ", error);
        setError(
          "An error occurred while fetching movies. Please try again later.",
        );
      }
    };

    fetchMovies(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, currentPage, yearFilter, typeFilter]);

  return { movies, totalPages, error };
};

export default useMovieList;
