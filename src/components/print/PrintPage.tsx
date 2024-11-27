import React from "react";
import styles from "./PrintPage.module.css";
import Image from "next/image";
// import githubIcon from "@/assets/github-mark.svg";
import Link from "next/link";
import GitHubLink from "@/icons/GitHub";

export default function PrintPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/projects">
          <span>Back</span>
        </Link>
        <h1 className={styles.h1}>Serverless Printing</h1>
        <GitHubLink url="https://github.com/michaellisitsa/serverless-print-job" />
      </header>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
