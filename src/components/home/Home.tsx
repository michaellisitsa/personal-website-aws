import styles from "./Home.module.css";
import GitHubLink from "@/icons/GitHub";
import LinkedInLink from "@/icons/LinkedIn";
import MailLink from "@/icons/Mail";
import Image from "next/image";
import profileImg from "@/assets/profile_small.jpg";

export default function Home() {
  return (
    <div className={styles.root}>
      <h1 className={styles.h1}>Michael Lisitsa</h1>
      <Image className={styles["rounded-img"]} src={profileImg} alt="profile" />
      <section>
        <p>
          I am a full stack web developer with 4 years experience. My front end
          tools includes NextJS, React, Mobx state management. On the backend
          and deployment side, I use Ruby on Rails, Postgres, Docker, AWS and
          Terraform.
        </p>
        <p>
          I also volunteer with CS in Schools as an industry mentor for
          secondary school digital technology teachers.
        </p>
        <p>Welcome to my online space!</p>
      </section>
      <p>
        Find me on <GitHubLink url="https://github.com/michaellisitsa/" />{" "}
        <LinkedInLink url="https://www.linkedin.com/in/michaellisitsa/" />{" "}
        <MailLink url="mailto:michael@lisitsa.dev" />
      </p>
    </div>
  );
}
