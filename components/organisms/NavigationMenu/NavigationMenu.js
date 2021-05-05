import React from "react";

import styles from "./navigationMenu.module.css";

import { MostPopular, FMIcon } from "../../atoms/Images/Images";
import NavigationButton from "../../molecules/NavigationButton/NavigationButton";

export default function NavigationMenu() {
  return (
    <div className={styles.container}>
      <FMIcon></FMIcon>
      <div className={styles.menu}>
        <NavigationButton movieCategory="movie/upcoming" title="Upcoming">
          <MostPopular />
        </NavigationButton>
        <NavigationButton movieCategory="movie/top_rated" title="Top Rated">
          <MostPopular />
        </NavigationButton>
        <NavigationButton movieCategory="movie/popular" title="Most Popular">
          <MostPopular />
        </NavigationButton>
        <NavigationButton movieCategory="trending/movie/day" title="Trending">
          <MostPopular />
        </NavigationButton>
      </div>
    </div>
  );
}
