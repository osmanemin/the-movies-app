import React, { useContext } from "react";

import styles from "./filmList.module.css";

import FilmCard from "../../molecules/FilmCard/FilmCard";
import { UserContext } from "../../../store/Context";

export default function FilmList() {
  const context = useContext(UserContext);

  return (
      <ul className={styles.container}>
        {context.moviesInState?.map((movie) => (
          <li key={movie.id}>
            <FilmCard
              poster_path={movie.poster_path}
              original_title={movie.original_title}
              vote_average={movie.vote_average}
              id={movie.id}
            />
          </li>
        ))}
      </ul>
  );
}
