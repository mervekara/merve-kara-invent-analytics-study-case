import React from "react";
import { Container, Loader as SemanticLoader } from "semantic-ui-react";

const Loader: React.FC = () => {
  return (
    <Container>
      <SemanticLoader active inline="centered" />
    </Container>
  );
};

export default Loader;
