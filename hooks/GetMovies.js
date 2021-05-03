import { useState } from "react";

export default function GetMovies() {
  const [movies, setMovies] = useState();

  const getMovies = () => {
    fetch(
      //`https://api.themoviedb.org/3/list/1?api_key=${process.env.ACCESS_KEY}`
      `https://api.themoviedb.org/3/list/1?api_key=4d94eea6262f660053da704fae1beb92`
      )
      .then((response) => response.json())
      .then((data) => setMovies(data));
  };

  return [movies, getMovies];
}
