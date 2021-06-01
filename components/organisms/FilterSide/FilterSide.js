import React, { useContext, useState, useEffect } from "react";

import styles from "./filterSide.module.css";

import { UserContext } from "../../../store/Context";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import CustomSelection from "../../molecules/CustomSelection/CustomSelection";
import BubbleSort from "../../../hooks/BubbleSort";

export default function FilterSide() {
  const context = useContext(UserContext);
  const [sortType, setSortType] = useState();

  const array = ["default", "imdb: Low to High", "imdb: High to Low"];

  const handleUrl = () => {
    const categoryName = `${window.location.href}`
      .split("/")
      .slice(-1)[0]
      .replace("-", "_");
    if (categoryName === "") {
      context.getMovies();
    } else if (categoryName.includes("q=")) {
      context.getMovies(
        "search/movie?query=" + categoryName.split("q=")[1] + "&"
      );
    } else {
      context.getMovies("movie/" + categoryName.replace("q=", "") + "?");
    }
  };

  useEffect(() => {
    sortType === "imdb: Low to High" &&
      context.setMovies(BubbleSort(context.movies).reverse());
    sortType === "imdb: High to Low" &&
      context.setMovies(BubbleSort(context.movies));
    sortType === "default" && handleUrl();
  }, [sortType]);

  return (
    <div className={styles.container}>
      <SearchBar />
      <CustomSelection title="Sort by" setSortType={setSortType} values={array} />
    </div>
  );
}
