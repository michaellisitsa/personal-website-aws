import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./ProjectItem.module.css";
import GitHubIcon from "@/icons/GitHub";

interface ProjectItemProps {
  title: string;
  description: string;
  primaryLink: string;
  heroImage: StaticImageData;
  githubLink?: string; // for open source projects
}

export default function ProjectItem(props: ProjectItemProps) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles["title-and-socials"]}>
          <Link href={props.primaryLink}>
            <h1 className={styles.h1}>{props.title}</h1>
          </Link>
          {props.githubLink && <GitHubIcon url={props.githubLink} />}
        </div>
        <sub className={styles.sub}>{props.description}</sub>
      </header>
      <main className={styles.main}>
        <Link href={props.primaryLink}>
          <div className={styles["image-container"]}>
            <Image src={props.heroImage} alt={`${props.title} Screenshot`} />
            <div className={styles["img-overlay"]}>
              <div className={styles["img-overlay__text"]}>Explore...</div>
            </div>
          </div>
        </Link>
      </main>
    </section>
  );
}
