import ProjectItem from "./ProjectItem";
import styles from "./ProjectsList.module.css";
import customDiagramScreenshot from "@/assets/custom-diagram-screenshot.png";
import serverlessPrintScreenshot from "@/assets/serverless-print-screenshot.png";
import personalWebsiteScreenshot from "@/assets/personal-website-screenshot.png";
import algoChallengesScreenshot from "@/assets/algo-challenges-screenshot.png";

export default function ProjectsList() {
  return (
    <div className={styles.root}>
      <h1>Projects List</h1>
      <ProjectItem
        title="Custom Diagram Creator"
        description="Custom Diagrams is a powerful method of plugging in rich
         visualisations into ClearCalcs calculators"
        githubLink="https://github.com/ClearCalcs/custom-diagram-boilerplate"
        primaryLink="https://clearcalcs.github.io/custom-diagram-boilerplate"
        heroImage={customDiagramScreenshot}
      />
      <ProjectItem
        title="Serverless Print"
        description="A serverless print job submission system using AWS API Gateway web sockets, Lambda, S3, and DynamoDB"
        primaryLink="/projects/print"
        githubLink="https://github.com/michaellisitsa/serverless-print-job"
        heroImage={serverlessPrintScreenshot}
      />
      <ProjectItem
        title="Personal Website"
        description="The website you're on now, hosted on AWS S3 and Cloudfront bootstrapped using Cloudfront Hosting Toolkit"
        githubLink="https://github.com/michaellisitsa/personal-website-aws"
        primaryLink="/"
        heroImage={personalWebsiteScreenshot}
      />
      <ProjectItem
        title="Algorithm Challenges"
        description="A collection of coding challenges from Advent of Code and HackerRank in Javascript, Ruby, Python, C++ and more"
        githubLink="https://github.com/michaellisitsa/algo_challenges"
        primaryLink="https://github.com/michaellisitsa/algo_challenges"
        heroImage={algoChallengesScreenshot}
      />
    </div>
  );
}
