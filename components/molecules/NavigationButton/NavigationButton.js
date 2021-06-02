import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./navigationButton.module.css";

import { TitleMd } from "../../atoms/Texts/Texts";

export default function NavigationButton({ children, title, href }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    "/" + window.location.href.split("/").slice(-1)[0] === href &&
      setColor("white");
  }, []);

  return (
    <Link href={href}>
      <a>
        <div className={styles.container} style={{ borderColor: `${color}` }}>
          {children}
          <TitleMd className={styles.title} title={title} />
        </div>
      </a>
    </Link>
  );
}
