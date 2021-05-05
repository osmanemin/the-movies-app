import React from "react";
import cn from "classnames";

import styles from "./voteAvarage.module.css";

import { Star } from "../../atoms/Images/Images";
import { TextSm } from "../../atoms/Texts/Texts";

export default function VoteAvarage({ voteAverage, className }) {
  return (
    <div className={cn(styles.container, className)}>
      <Star />
      <TextSm className={styles.textSm} text={voteAverage} />
    </div>
  );
}
