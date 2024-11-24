import React from "react";
import styles from "./PrintPage.module.css";
import Image from "next/image";
import githubIcon from "@/assets/github-mark.svg";
import Link from "next/link";

export default function PrintPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.page}>
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
      <div className={styles.container}>{children}</div>
    </div>
  );
}
