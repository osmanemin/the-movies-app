import React, { useContext } from "react";

import styles from "./filmList.module.css";

import FilmCard from "../../molecules/FilmCard/FilmCard";
import { UserContext } from "../../../store/Context";

export default function FilmList() {
  const context = useContext(UserContext);

  return (
      <ul className={styles.container}>
        {context.movies?.map((item) => (
          <li key={item.id}>
            <FilmCard
              href={item.poster_path}
              title={item.original_title}
              voteAverage={item.vote_average}
              id={item.id}
            />
          </li>
        ))}
      </ul>
  );
}
