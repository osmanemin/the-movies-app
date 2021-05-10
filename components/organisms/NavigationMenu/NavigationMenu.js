import React from "react";

import styles from "./navigationMenu.module.css";

import { MostPopular, FMIcon } from "../../atoms/Images/Images";
import NavigationButton from "../../molecules/NavigationButton/NavigationButton";

export default function NavigationMenu() {
  return (
    <div className={styles.container}>
      <FMIcon className={styles.container} />
      <div className={styles.menu}>
        <NavigationButton title="Upcoming" href="/upcoming">
          <MostPopular />
        </NavigationButton>
        <NavigationButton title="Top Rated" href="/top-rated">
          <MostPopular />
        </NavigationButton>
        <NavigationButton title="Most Popular" href="/most-popular">
          <MostPopular />
        </NavigationButton>
        <NavigationButton title="Trending" href="/trending">
          <MostPopular />
        </NavigationButton>
      </div>
    </div>
  );
}
