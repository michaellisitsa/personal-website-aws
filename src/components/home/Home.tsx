import Link from "next/link";
import Image from "next/image";

import githubIcon from "@/assets/github-mark.svg";
import linkedinIcon from "@/assets/linkedin-mark.png";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <h1 className={styles.h1}>Michael Lisitsa</h1>
      <p>
        <span>
          Welcome to my online space, where I document my progress as a full
          stack web developer
        </span>
      </p>
      <p className={styles.socials}>
        Find me on{" "}
        <Link
          href="https://github.com/michaellisitsa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image priority src={githubIcon} alt="Link to GitHub" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/michaellisitsa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image priority src={linkedinIcon} alt="Link to LinkedIn" />
        </Link>
      </p>
    </div>
  );
}
