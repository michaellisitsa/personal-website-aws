import Link from "next/link";
import styles from "./BlogList.module.css";
export default function BlogList() {
  return (
    <main className={styles.root}>
      <h1>Blogs</h1>
      <section>
        <Link href="/blog/germany">Exchange Semester to Nuremberg 2011</Link>
      </section>
      <section>
        <Link href="blog/hannukah-of-data-django">
          Hanukkah Of Data Challenge in Django
        </Link>
      </section>
    </main>
  );
}
