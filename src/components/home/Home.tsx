import styles from "./Home.module.css";
import GitHubLink from "@/icons/GitHub";
import LinkedInLink from "@/icons/LinkedIn";
import MailLink from "@/icons/Mail";

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
      <p>
        Find me on <GitHubLink url="https://github.com/michaellisitsa/" />{" "}
        <LinkedInLink url="https://www.linkedin.com/in/michaellisitsa/" />{" "}
        <MailLink url="mailto:michael@lisitsa.dev" />
      </p>
    </div>
  );
}
