import Image from "next/image";
import Link from "next/link";

import styles from "./ProjectsList.module.css";
import githubIcon from "@/assets/github-mark.svg";
import serverlessPrintIcon from "@/assets/serverless-print-screenshot.png";

export default function ProjectsList() {
  return (
    <div className={styles.root}>
      <h1>Projects List</h1>
      <section className={styles.section}>
        <header className={styles.header}>
          <h1 className={styles.h1}>Serverless Printing</h1>
          <Link
            href="https://github.com/michaellisitsa/serverless-print-job"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image priority src={githubIcon} alt="Link to GitHub" />
          </Link>
        </header>
        <main className={styles.main}>
          <Link href="/projects/print">
            <Image
              src={serverlessPrintIcon}
              alt="Serverless Print Screenshot"
            />
          </Link>
        </main>
      </section>
    </div>
  );
}
