import React from "react";

import styles from "./customOption.module.css";

export default function CustomOption({ text, sortingTypeChange }) {
  return (
    <div onClick={() => sortingTypeChange(text)} className={styles.container}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
