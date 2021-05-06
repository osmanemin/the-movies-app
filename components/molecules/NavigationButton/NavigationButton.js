import React from "react";
import Link from "next/link";

import styles from "./navigationButton.module.css";

import { TitleMd } from "../../atoms/Texts/Texts";

export default function NavigationButton({ children, title, href }) {
  return (
    <Link href={href}>
      <a>
        <div className={styles.container}>
          {children}
          <TitleMd className={styles.title} title={title} />
        </div>
      </a>
    </Link>
  );
}
