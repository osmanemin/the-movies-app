import React, { useEffect } from "react";
import { connect } from "react-redux";

import styles from "./index.module.css";

import FilmList from "../../organisms/FilmList/FilmList";
import NavigationMenu from "../../organisms/NavigationMenu/NavigationMenu";
import FilterSide from "../../organisms/FilterSide/FilterSide";
import { addAllFavorites } from "../../../actions/actions";

const Index = ({ addAllFavorites }) => {
  useEffect(() => {
    addAllFavorites(JSON.parse(localStorage.getItem("favoritesList")) || []);
  },[]);

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
};

const mapStateToProps = (state) => {
  return {
    favoritesList: state.favoritesList,
  };
};

export default connect(mapStateToProps, { addAllFavorites })(Index);
