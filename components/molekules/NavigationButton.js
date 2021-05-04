import React from "react";

import styles from "./navigationButton.module.css";

import { TitleMd } from "../atoms/Texts";

export default function NavigationButton({ children, title }) {
  return (
    <div className={styles.container}>
      {children}
      <TitleMd className={styles.title} title={title} />
    </div>
  );
}
