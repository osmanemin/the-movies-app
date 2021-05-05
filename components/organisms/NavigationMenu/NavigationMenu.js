import React from "react";

import styles from "./navigationMenu.module.css";

import { MostPopular, FMIcon } from "../../atoms/Images/Images";
import NavigationButton from "../../molecules/NavigationButton/NavigationButton";

export default function NavigationMenu() {
  return (
    <div className={styles.container}>
      <FMIcon></FMIcon>
      <div className={styles.menu}>
        <NavigationButton title="Most Popular">
          <MostPopular />
        </NavigationButton>
        <NavigationButton title="Most Popular">
          <MostPopular />
        </NavigationButton>
        <NavigationButton title="Most Popular">
          <MostPopular />
        </NavigationButton>
      </div>
    </div>
  );
}
