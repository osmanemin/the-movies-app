import React from "react";

import styles from "./texts.module.css";

export const TitleSm = ({ title }) => {
  return <h6 className={styles.titleSm}>{title}</h6>;
};

export const TextSm = ({ text }) => {
  return  <p className={styles.textSm}>{text}</p>;
};
