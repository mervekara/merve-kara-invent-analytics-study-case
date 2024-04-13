import React, { useState } from "react";
import { Container, Table, Pagination, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";
import SearchBar from "./SearchBar";
import YearFilter from "./YearFilter";
import TypeFilter from "./TypeFilter";
import Loader from "../common/Loader";
import useMovieList from "../../hooks/useMovieList";

const MovieList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("Pokemon");
  const [yearFilter, setYearFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const { movies, totalPages, error } = useMovieList(
    searchTerm,
    currentPage,
    yearFilter,
    typeFilter,
  );

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleYearFilter = (year: string) => {
    setYearFilter(year);
    setCurrentPage(1);
  };

  const handleTypeFilter = (type: string) => {
    setTypeFilter(type);
    setCurrentPage(1);
  };

  return (
    <Container style={{ paddingTop: "20px", textAlign: "center" }}>
      <div style={{ marginBottom: "10px" }}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <YearFilter onFilter={handleYearFilter} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <TypeFilter onFilter={handleTypeFilter} />
      </div>
      {error ? (
        <Message negative>
          <Message.Header>Error</Message.Header>
          <p>{error}</p>
        </Message>
      ) : (
        <>
          {movies.length === 0 ? (
            <Loader /> // Display loader when movies are being fetched
          ) : (
            <>
              <Table singleLine size="small">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Release Date</Table.HeaderCell>
                    <Table.HeaderCell>IMDb ID</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {movies.map((movie: any) => (
                    <Table.Row key={movie.imdbID}>
                      <Table.Cell>
                        <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                      </Table.Cell>
                      <Table.Cell>
                        {moment(movie.Year, "YYYY").format("MMMM Do, YYYY")}
                      </Table.Cell>
                      <Table.Cell>{movie.imdbID}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <Pagination
                activePage={currentPage}
                totalPages={totalPages}
                onPageChange={(e, { activePage }) =>
                  handlePageChange(activePage as number)
                }
              />
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default MovieList;
