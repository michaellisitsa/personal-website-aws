import React from "react";
import styles from "./PrintPage.module.css";

export default function PrintPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Motivation Message Generator</h1>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
