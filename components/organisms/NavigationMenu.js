import React from "react";

import styles from "./navigationMenu.module.css";

import { MostPopular, FMIcon } from "../atoms/Images";
import NavigationButton from "../molekules/NavigationButton";

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
