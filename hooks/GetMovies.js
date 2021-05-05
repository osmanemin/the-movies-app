import { useState, useEffect } from "react";
import getConfig from "next/config";

export default function GetMovies() {
  const [movies, setMovies] = useState();
  const [movieCategory, setMovieCategory] = useState("list/1?");

  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  useEffect(() => {
    getMoviesData();
}, [movieCategory]);

  const getMoviesData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/${movieCategory}api_key=${publicRuntimeConfig.accessKey}`
    );
    const moviesList = await res.json();
    moviesList.items
      ? setMovies(moviesList.items)
      : setMovies(moviesList.results);
  };

  // https://api.themoviedb.org/3/search/movie?query=cars&api_key=4d94eea6262f660053da704fae1beb92

  const setMoviesData = (ca) => {
    console.log(ca);
    setMovieCategory(ca);
  };

  return [movies, getMoviesData, movieCategory, setMoviesData];
}
