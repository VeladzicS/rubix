import React from "react";
import { Navbar, SearchForm, ShowList } from "../../components";
import { Container } from "../../globalStyles";

const Home = () => {
  return (
    <Container>
      <main>
        <Navbar />
        <SearchForm />
        <ShowList />
      </main>
    </Container>
  );
};

export default Home;
