export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Director: string;
}

export interface MovieResponse {
  Search: Movie[];
  totalResults: number;
  Response: string;
}

export interface MovieDetails {
  Title: string;
  Year: string;
  Director: string;
  Genre: string;
  Actors: string;
  imdbRating: string;
  Released: string;
  Poster: string;
  Runtime: string;
  Response: string;
}

export interface SearchBarProps {
  onSearch: (value: string) => void;
}

export interface TypeFilterProps {
  onFilter: (type: string) => void;
}

export interface YearFilterProps {
  onFilter: (year: string) => void;
}
