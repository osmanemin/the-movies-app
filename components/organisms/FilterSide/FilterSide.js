import React, { useContext, useState, useEffect } from "react";

import styles from "./filterSide.module.css";

import { UserContext } from "../../../store/Context";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import CustomSelection from "../../molecules/CustomSelection/CustomSelection";

export default function FilterSide() {
  const context = useContext(UserContext);
  const [sortType, setSortType] = useState("default");

  const sortOptions = ["default", "imdb: Low to High", "imdb: High to Low"];

  useEffect(() => {
    sortType === "default" && context.setMoviesInState(context.movies);
    sortType === "imdb: Low to High" &&
      context.setMoviesInState(
        [...context.movies].sort((a, b) => {
          return a.vote_average - b.vote_average;
        })
      );
    sortType === "imdb: High to Low" &&
      context.setMoviesInState(
        [...context.movies].sort((a, b) => {
          return b.vote_average - a.vote_average;
        })
      );
  }, [sortType]);

  return (
    <div className={styles.container}>
      <SearchBar />
      <CustomSelection
        title="Sort by"
        setSortType={setSortType}
        values={sortOptions}
      />
    </div>
  );
}
