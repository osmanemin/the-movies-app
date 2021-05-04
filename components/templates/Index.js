import React from "react";

import styles from "./index.module.css";

import FilmList from "../organisms/FilmList";
import NavigationMenu from "../organisms/NavigationMenu";
import FilterSide from "../organisms/FilterSide";

export default function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <NavigationMenu />
        <div className={styles.main}>
          <FilterSide />
          <FilmList />
        </div>
      </div>
    </div>
  );
}
