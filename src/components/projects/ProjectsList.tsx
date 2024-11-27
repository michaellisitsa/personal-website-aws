import ProjectItem from "./ProjectItem";
import styles from "./ProjectsList.module.css";
import serverlessPrintScreenshot from "@/assets/serverless-print-screenshot.png";
import personalWebsiteScreenshot from "@/assets/personal-website-screenshot.png";
import algoChallengesScreenshot from "@/assets/algo-challenges-screenshot.png";

export default function ProjectsList() {
  return (
    <div className={styles.root}>
      <h1>Projects List</h1>
      <ProjectItem
        title="Serverless Print"
        description="A serverless print job submission system"
        primaryLink="/projects/print"
        githubLink="https://github.com/michaellisitsa/serverless-print-job"
        heroImage={serverlessPrintScreenshot}
      />
      <ProjectItem
        title="Personal Website"
        description="The website you're on now!"
        githubLink="https://github.com/michaellisitsa/personal-website-aws"
        primaryLink="/"
        heroImage={personalWebsiteScreenshot}
      />
      <ProjectItem
        title="Algorithm Challenges"
        description="A collection of coding challenges from Advent of Code and HackerRank"
        githubLink="https://github.com/michaellisitsa/algo_challenges"
        primaryLink="https://github.com/michaellisitsa/algo_challenges"
        heroImage={algoChallengesScreenshot}
      />
    </div>
  );
}
