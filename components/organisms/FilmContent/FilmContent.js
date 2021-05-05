import React, { useContext } from "react";

import styles from "./filmContent.module.css";

import { Context } from "../../../store/Context";
import { TitleXl, TitleLg, TextMd, TextSm } from "../../atoms/Texts/Texts";
import VoteAvarage from "../../molecules/VoteAvarage/VoteAvarage";

export default function FilmContent() {
  const context = useContext(Context);
  const release_date = context.character.release_date.split("-").reverse().toString().replace(/,/g,"/");
  
  let genres = [];

  context.character.genres.map((item) => {
    genres = [...genres, " " + item.name]
  } )

  return (
    <div className={styles.container}>
      <TitleXl className={styles.titleXl} title={context.character.title} />
      <TitleLg title={context.character.tagline} />
      <TextMd className={styles.textMd} text={release_date + " · " + genres }/>
      <div className={styles.voteContainer}>
        <TextMd className={styles.textMd} text="User Score"/>
        <VoteAvarage className={styles.voteAvarage} voteAverage={context.character.vote_average}/>
      </div>
      <div className={styles.voteContainer}>
          <TextMd className={styles.textMd} text="Vote Count" />
          <TextSm className={styles.textSm} text={context.character.vote_count}/>
      </div>
      <a href={context.character.homepage}>
          <TextMd className={styles.linkedText} text="Home Page"/>
      </a>
      <TitleLg title="Overview" />
      <TextMd className={styles.textMd} text={context.character.overview}/>
    </div>
  );
}
