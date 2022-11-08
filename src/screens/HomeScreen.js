import React from "react";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../requests";

function HomeScreen(props) {
  return (
    <>
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    </>
  );
}

export default HomeScreen;
