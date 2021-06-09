import React from "react";
import { connect } from "react-redux";

import styles from "./navigationMenu.module.css";

import { NavigationIcon, FMIcon } from "../../atoms/Images/Images";
import NavigationButton from "../../molecules/NavigationButton/NavigationButton";

const NavigationMenu = ({favoritesList}) => {
  return (
    <div className={styles.container}>
      <FMIcon className={styles.container} />
      <div className={styles.menu}>
        <NavigationButton title="Most Popular" href="/">
          <NavigationIcon src="/most_popular.svg" />
        </NavigationButton>
        <NavigationButton title="Upcoming" href="/upcoming">
          <NavigationIcon src="/upcoming.svg" />
        </NavigationButton>
        <NavigationButton title="Top Rated" href="/top-rated">
          <NavigationIcon src="/top-rated.svg" />
        </NavigationButton>
        <NavigationButton title="Trending" href="/trending">
          <NavigationIcon src="/trending.svg" />
        </NavigationButton>
        <NavigationButton title={`Favorites    ${favoritesList.length || ""}`} href="/favorites">
          <NavigationIcon src="/favorite.svg" />
        </NavigationButton>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favoritesList: state.favoritesList,
  };
};

export default connect(mapStateToProps)(NavigationMenu);