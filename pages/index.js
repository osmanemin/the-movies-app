import React, { useState } from "react";
import getConfig from "next/config";

import { UserContext } from "../store/Context";
import Index from "../components/templates/Index/Index";

function HomePage({ movies }) {

  const [moviesInState, setMoviesInState] = useState(movies);

  return (
    <UserContext.Provider value={{ movies, moviesInState, setMoviesInState }}>
      <Index />
    </UserContext.Provider>
  );
}

export async function getStaticProps() {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${publicRuntimeConfig.accessKey}`
  );

  const moviesList = await res.json();
  const movies = moviesList.results;

  return {
    props: { movies },
  };
}

export default HomePage;
