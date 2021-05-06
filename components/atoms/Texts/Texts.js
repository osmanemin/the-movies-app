import React from "react";
import cn from "classnames";

import styles from "./texts.module.css";

export const TitleSm = ({ title, className }) => {
  return <h6 className={cn(styles.titleSm, className)}>{title}</h6>;
};

export const TitleMd = ({ title, className }) => {
  return <h4 className={cn(styles.titleMd, className)}>{title}</h4>;
};

export const TitleLg = ({ title, className }) => {
  return <h3 className={cn(styles.titleLg, className)}>{title}</h3>;
};

export const TitleXl = ({ title, className }) => {
  return <h1 className={cn(styles.titleXl, className)}>{title}</h1>;
};

export const Text = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};
