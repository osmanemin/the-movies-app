import { useState } from "react";
import getConfig from "next/config";

export default function GetMovies() {
  const [movies, setMovies] = useState();

  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  const url = `https://api.themoviedb.org/3/list/1?api_key=${publicRuntimeConfig.accessKey}`;

  const getMovies = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  };

  return [movies, getMovies];
}
