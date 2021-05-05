import React, { useContext } from "react";

import styles from "./navigationButton.module.css";

import { UserContext } from "../../../store/Context";
import { TitleMd } from "../../atoms/Texts/Texts";

export default function NavigationButton({ children, title, movieCategory }) {  
  const context = useContext(UserContext);

  return (
    <div onClick={()=>{context.setMovieCategory(movieCategory+"?")}} className={styles.container}>
      {children}
      <TitleMd className={styles.title} title={title} />
    </div>
  );
}
