import Link from "next/link";
import styles from "./GermanyBlogPage.module.css";
import GermanyBlogRoot from "./GermanyBlogRoot";

export default function GermanyBlogPage() {
  return (
    <div className={styles.root}>
      <header>
        <div>
          <Link href="/blog">Back to Blogs</Link>
          <h1>Exchange Semester to Nuremberg 2011</h1>
          <p>
            I visited Germany in 2011 and 2014. Here are some of my favorite
            photos from those trips. Originally hosted on{" "}
            <a href="https://web.archive.org/web/20150912090005/http://michael-goes-to-germany.blogspot.com/">
              michael-goes-to-germany.blogspot.com
            </a>
            .
          </p>
        </div>
      </header>
      <GermanyBlogRoot />
    </div>
  );
}
