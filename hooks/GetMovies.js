import { useEffect, useState } from "react";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function GetMovies() {
  const [movies, setMovies] = useState();

  const getMoviesData = async (category = "list/1?") => {
    const res = await fetch(
      `https://api.themoviedb.org/3/${category}api_key=${publicRuntimeConfig.accessKey}`
    );
    const moviesList = await res.json();
    moviesList.items
      ? setMovies(moviesList.items)
      : setMovies(moviesList.results);
  };

  return [movies, setMovies, getMoviesData];
}

export function getSuggestionsMovies() {
  const [suggestions, setSuggestions] = useState([]);

  const getMoviesData = async (query) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${publicRuntimeConfig.accessKey}`
    );
    const moviesList = await res.json();
    moviesList.items
      ? setSuggestions(moviesList.items)
      : setSuggestions(moviesList.results);
  };

  return [suggestions, setSuggestions, getMoviesData];
}


export function getMovieDetail() {
  const [movie, setMovie] = useState("");

  const getMoviesData = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${publicRuntimeConfig.accessKey}`
    );
    const moviesList = await res.json();
    setMovie(moviesList);
  };

  return [movie, getMoviesData];
}
