import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { Context } from "../../store/Context";
import Movie from "../../components/templates/Movie/Movie";
import { getMovieDetail } from "../../hooks/GetMovies";

export default function movie() {
  const router = useRouter();
  const [movie, setMovie] = getMovieDetail();

  useEffect(() => {
    setMovie(router.query.id);
  }, [router.query]);

  return (
    <Context.Provider value={{ movie }}>
      <Movie />
    </Context.Provider>
  );
}
