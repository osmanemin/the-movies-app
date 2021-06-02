import React, { useContext, useState, useEffect } from "react";

import styles from "./filterSide.module.css";

import { UserContext } from "../../../store/Context";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import CustomSelection from "../../molecules/CustomSelection/CustomSelection";
import BubbleSort from "../../../hooks/BubbleSort";

export default function FilterSide() {
  const context = useContext(UserContext);
  const [sortType, setSortType] = useState();
  const [moviesList, setMoviesList] = useState(context.movies);

  const array = ["default", "imdb: Low to High", "imdb: High to Low"];

  useEffect(() => {
    sortType === "imdb: Low to High" &&
    context.setMoviesInState(BubbleSort(context.movies).reverse());
    sortType === "imdb: High to Low" &&
    context.setMoviesInState(BubbleSort(context.movies));
    sortType === "default" && setMoviesList(context.movies);
  }, [sortType]);

  return (
    <div className={styles.container}>
      <SearchBar />
      <CustomSelection title="Sort by" setSortType={setSortType} values={array} />
    </div>
  );
}
