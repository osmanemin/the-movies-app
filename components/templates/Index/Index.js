import React from "react";

import styles from "./index.module.css";

import FilmList from "../../organisms/FilmList/FilmList";
import NavigationMenu from "../../organisms/NavigationMenu/NavigationMenu";
import FilterSide from "../../organisms/FilterSide/FilterSide";

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
