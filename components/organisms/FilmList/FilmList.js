import React, { useContext } from "react";

import styles from "./filmList.module.css";

import FilmCard from "../../molecules/FilmCard/FilmCard";
import { UserContext } from "../../../store/Context";

export default function FilmList() {
  const context = useContext(UserContext);

  return (
      <ul className={styles.container}>
        {context.movies?.map((movie) => (
          <li key={movie.id}>
            <FilmCard
              src={movie.poster_path}
              title={movie.original_title}
              voteAverage={movie.vote_average}
              id={movie.id}
            />
          </li>
        ))}
      </ul>
  );
}
