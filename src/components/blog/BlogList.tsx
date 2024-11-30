import Link from "next/link";
import styles from "./BlogList.module.css";
export default function BlogList() {
  return (
    <div className={styles.root}>
      <h1>Blogs</h1>
      <Link href="/blog/germany">Exchange Semester to Nuremberg 2011</Link>
    </div>
  );
}
