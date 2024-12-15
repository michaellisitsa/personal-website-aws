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
        Other Interesting Blogs I'm reading:
        <ul>
          <li>
            <a href="https://indepth.dev/">
              <span>In Depth Dev</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
