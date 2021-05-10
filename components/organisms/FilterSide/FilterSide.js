import React, { useContext, useState, useEffect } from "react";

import styles from "./filterSide.module.css";

import { UserContext } from "../../../store/Context";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import FormSelect from "../../molecules/FormSelect/FormSelect";
import BubbleSort from "../../../hooks/BubbleSort";

export default function FilterSide() {
  const context = useContext(UserContext);
  const [sortType, setSortType] = useState();

  const array = ["---", "imdb: Low to High", "imdb: High to Low"];

  useEffect(() => {
    sortType === "imdb: Low to High" && context.setMovies(BubbleSort(context.movies).reverse());
    sortType === "imdb: High to Low" && context.setMovies(BubbleSort(context.movies));

  }, [sortType]);

  return (
    <div className={styles.container}>
      <SearchBar />
      <FormSelect
        title="Sort by"
        setSortType={setSortType}
        values={array}
      />
    </div>
  );
}
