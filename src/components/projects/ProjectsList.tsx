import ProjectItem from "./ProjectItem";
import styles from "./ProjectsList.module.css";
import customDiagramScreenshot from "@/assets/custom-diagram-screenshot.png";
import flexiblePlatformerGif from "@/assets/flexible-platformer-game.gif";
import serverlessPrintScreenshot from "@/assets/serverless-print-screenshot.png";
import personalWebsiteScreenshot from "@/assets/personal-website-screenshot.png";
import algoChallengesScreenshot from "@/assets/algo-challenges-screenshot.png";
import expenseTrackerScreenshot from "@/assets/expense-tracker-screenshot.jpg";
import flydarScreenshot from "@/assets/flydar-screenshot.png";

export default function ProjectsList() {
  return (
    <div className={styles.root}>
      <h1>Projects List</h1>
      <ProjectItem
        title="Pygame Platform Side Scroller"
        description="Platform Side Scroller where all the platforms are bendy. Using Pygame"
        githubLink="https://github.com/michaellisitsa/flexible-beam-platformer"
        primaryLink="https://github.com/michaellisitsa/flexible-beam-platformer"
        heroImage={flexiblePlatformerGif}
      />
      <ProjectItem
        title="Custom Diagram Creator"
        description="Custom Diagrams is a powerful method of plugging in rich
         visualisations into ClearCalcs calculators"
        githubLink="https://github.com/ClearCalcs/custom-diagram-boilerplate"
        primaryLink="https://clearcalcs.github.io/custom-diagram-boilerplate"
        heroImage={customDiagramScreenshot}
      />
      <ProjectItem
        title="Serverless & React Motivational Poster Generator"
        description="A serverless print job submission system using AWS API Gateway web sockets, Lambda, S3, and DynamoDB"
        primaryLink="/projects/print"
        githubLink="https://github.com/michaellisitsa/serverless-print-job"
        heroImage={serverlessPrintScreenshot}
      />
      <ProjectItem
        title="GovHack 2022: Django and React Fruit Fly Outbreak Tracker"
        description="A hackathon group event with 3 other members to ideate and develop a full working backend and frontend app to track the outbreak of fruit flys in South Australian farms"
        githubLink="https://github.com/michaellisitsa/flydar"
        primaryLink="https://github.com/michaellisitsa/flydar"
        heroImage={flydarScreenshot}
      />
      <ProjectItem
        title="Django and React Expense Tracker"
        description="A full Django backend and React Frontend web app to manage personal expenses"
        githubLink="https://github.com/michaellisitsa/expense_tracker"
        primaryLink="https://github.com/michaellisitsa/expense_tracker"
        heroImage={expenseTrackerScreenshot}
      />
      <ProjectItem
        title="Algorithm Challenges"
        description="A collection of coding challenges from Advent of Code and HackerRank in Javascript, Ruby, Python, C++ and more"
        githubLink="https://github.com/michaellisitsa/algo_challenges"
        primaryLink="https://github.com/michaellisitsa/algo_challenges"
        heroImage={algoChallengesScreenshot}
      />
      <ProjectItem
        title="Personal Website"
        description="The website you're on now, using NextJS App Route and React, hosted on AWS S3 and Cloudfront bootstrapped using Cloudfront Hosting Toolkit"
        githubLink="https://github.com/michaellisitsa/personal-website-aws"
        primaryLink="/"
        heroImage={personalWebsiteScreenshot}
      />
    </div>
  );
}
