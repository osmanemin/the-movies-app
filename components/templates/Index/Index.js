import React, { useEffect } from "react";

import styles from "./index.module.css";

import { UserContext } from "../../../store/Context";
import FilmList from "../../organisms/FilmList/FilmList";
import NavigationMenu from "../../organisms/NavigationMenu/NavigationMenu";
import FilterSide from "../../organisms/FilterSide/FilterSide";
import GetMovies from "../../../hooks/GetMovies";

export default function Index({ category }) {
  const [movies, setMovies, getMovies] = GetMovies();

  useEffect(() => {
    getMovies(category);
  }, [category]);

  return (
    <UserContext.Provider value={{ movies, setMovies, getMovies }}>
      <div className={styles.page}>
        <div className={styles.container}>
          <NavigationMenu />
          <div className={styles.main}>
            <FilterSide />
            <FilmList />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}
