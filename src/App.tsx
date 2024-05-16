import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { SearchProvider } from "./context/SearchContext";

const App: React.FC = () => {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default App;
