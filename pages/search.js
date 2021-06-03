import React, { useState, useEffect } from "react";
import getConfig from "next/config";

import { UserContext } from "../store/Context";
import Index from "../components/templates/Index/Index";

export default function Search() {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  const [moviesInState, setMoviesInState] = useState([]);

  let movies;

  const [query, setQuery] = useState("");

  useEffect(() => {
    window.location.search.includes("=") && setQuery(window.location.search.split("=")[1]);
  });

  useEffect(() => {
    !query || getMovies();
  }, [query]);

  const getMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${publicRuntimeConfig.accessKey}`
    );

    const moviesList = await res.json();
    movies = moviesList.results;
    setMoviesInState(movies);
  };

  return (
    <UserContext.Provider value={{ movies, moviesInState, setMoviesInState }}>
      <Index />
    </UserContext.Provider>
  );
}
