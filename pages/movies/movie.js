import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import getConfig from "next/config";

import { Context } from "../../store/Context";
import Movie from "../../components/templates/Movie/Movie";

export default function movie() {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
  const router = useRouter();

  const [movie, setMovie] = useState("");

  const getMovieData = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${publicRuntimeConfig.accessKey}`
    );
    const movie = await res.json();
    setMovie(movie);
  };

  useEffect(() => {
    getMovieData(router.query.id);
  }, [router.query]);

  return (
    <Context.Provider value={{ movie }}>
      <Movie/>
    </Context.Provider>
  );
}
