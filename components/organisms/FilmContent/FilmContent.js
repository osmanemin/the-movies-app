import React, { useContext } from "react";

import styles from "./filmContent.module.css";

import { Context } from "../../../store/Context";
import { TitleXl, TitleLg, Text} from "../../atoms/Texts/Texts";
import VoteAvarage from "../../molecules/VoteAvarage/VoteAvarage";

export default function FilmContent() {
  const context = useContext(Context);
  const release_date = context.movie.release_date?.split("-").reverse().toString().replace(/,/g,"/");
  
  let genres = [];

  context.movie.genres?.map((item) => {
    genres = [...genres, " " + item.name]
  } )

  return (
    <div className={styles.container}>
      <TitleXl className={styles.titleXl} title={context.movie.title} />
      <TitleLg title={context.movie.tagline} />
      <Text className={styles.textMd} text={release_date + " · " + genres }/>
      <div className={styles.voteContainer}>
        <Text className={styles.textMd} text="User Score"/>
        <VoteAvarage className={styles.voteAvarage} voteAverage={context.movie.vote_average}/>
      </div>
      <div className={styles.voteContainer}>
          <Text className={styles.textMd} text="Vote Count" />
          <Text className={styles.textSm} text={context.movie.vote_count}/>
      </div>
      <a href={context.movie.homepage}>
          <Text className={styles.linkedText} text="Home Page"/>
      </a>
      <TitleLg title="Overview" />
      <Text className={styles.textMd} text={context.movie.overview}/>
    </div>
  );
}
