import React from "react";
import { Container, Message, List, Image, Grid, Button } from "semantic-ui-react";
import moment from "moment";
import { useParams, Link } from "react-router-dom";
import useMovieDetails from "../../hooks/useMovieDetails"; // Import the custom hook
import Loader from "../common/Loader"; // Import Loader component

const MovieDetails: React.FC = () => {
  const { imdbID } = useParams<{ imdbID?: string }>();
  const { movieDetails, error } = useMovieDetails(imdbID || ""); // Provide a default value for `imdbID`

  if (error) {
    return (
      <Container>
        <Message negative>
          <Message.Header>Error</Message.Header>
          <p>{error}</p>
        </Message>
      </Container>
    );
  }

  if (!movieDetails) {
    return <Loader />;
  }

  const castList = movieDetails.Actors.split(", ");

  return (
    <Container style={{ paddingTop: "20px" }}>
      <Grid verticalAlign="middle" centered>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8} textAlign="center">
          <Image
              src={movieDetails.Poster !== 'N/A' ? movieDetails.Poster : require('../../images/no_image.jpg')}
              alt={movieDetails.Title}
              size="medium"
          />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <h2>{movieDetails.Title}</h2>
            <p>
              <strong>Released:</strong>{" "}
              {moment(movieDetails.Released).format("MMMM Do, YYYY")}
            </p>
            <List>
              <List.Item>
                <List.Header>Duration:</List.Header>
                {movieDetails.Runtime}
              </List.Item>
              <List.Item>
                <List.Header>Director:</List.Header>
                {movieDetails.Director}
              </List.Item>
              <List.Item>
                <List.Header>Genre:</List.Header>
                {movieDetails.Genre}
              </List.Item>
              <List.Item>
                <List.Header>Cast:</List.Header>
                <List>
                  {castList.map((actor) => (
                    <List.Item key={actor}>{actor}</List.Item>
                  ))}
                </List>
              </List.Item>
              <List.Item>
                <List.Header>IMDb Rating:</List.Header>
                {movieDetails.ImdbRating}
              </List.Item>
            </List>
            <Button as={Link} to="/" content="Back to Movie List" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default MovieDetails;
