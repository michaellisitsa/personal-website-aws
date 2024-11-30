import Link from "next/link";
import styles from "./GermanyBlogPage.module.css";
import GermanyBlogRoot from "./GermanyBlogRoot";

const BLOG_POSTS = [
  {
    id: "20110724_germany_blog",
    title: "Bavarian Bike Tour, Prague and Goodbye",
  },
  { id: "20110702_germany_blog", title: "Swimming through the month of June" },
  {
    id: "20110606_germany_blog",
    title: "Cooking dahl, new friends and 'Nuclear – No thank you!'",
  },
  {
    id: "20110515_germany_blog",
    title: "Fashion in Berlin & the ramblings of a homesick Australian",
  },
  { id: "20110417_germany_blog", title: "Uni, blues, heidelberg and picnic" },
  { id: "20110320_germany_blog", title: "Good Vibrations" },
  { id: "20110308_germany_blog", title: "First week in Germany" },
];

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
      <ul>
        {BLOG_POSTS.map((post) => {
          const date = parseInt(post.id.split("_")[0]);

          const dateObj = new Date(
            date / 10000,
            (date % 10000) / 100 - 1,
            date % 100
          );

          return (
            <li key={post.id}>
              <Link key={post.id} href={`/blog/germany#${post.id}`}>
                {dateObj.toDateString()} {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <GermanyBlogRoot />
    </div>
  );
}
