import React from "react";
import cn from "classnames";

import styles from "./texts.module.css";

export const TitleSm = ({ title }) => {
  return <h6 className={styles.titleSm}>{title}</h6>;
};

export const TitleMd = ({ title, className }) => {
  return <h4 className={cn(styles.titleMd, className)}>{title}</h4>;
};

export const TextSm = ({ text }) => {
  return  <p className={styles.textSm}>{text}</p>;
};
