import type { Metadata } from "next";
import { GitHubIcon, ArrowIcon, TwitterIcon } from "components/icons";
import { BsLinkedin } from "react-icons/bs";

import Link from "next/link";
import ProjectList from "./project-list";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal Projects",
};

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  url: string;
}

const projects : ProjectItem[] = [
  {
    id: 1,
    title: 'AniTrek',
    description: 'An anime-themed website featuring reviews, a trivia game, online clip streaming, and image-based anime title identification, with a built-in search feature.',
    url: 'https://anitrek.co/',
  },
  {
    id: 2,
    title: 'ReactAllPlayer',
    description: 'Simple lightweight, accessible, and customizable React media player that supports modern browsers.',
    url: 'https://reactallplayer.asadbek.dev/',
  },
  {
    id: 3,
    title: 'Gradient Wizard',
    description: 'Blend Tailwind CSS Colors for striking text and background gradients, with custom or ready-made options for remarkable designs',
    url: 'https://gwizard.asadbek.dev/',
  },
  {
    id: 4,
    title: 'AmazonFlexWorker',
    description: 'Automate searching and accepting Amazon Flex Driver jobs',
    url: 'https://github.com/asadbek064/AmazonFlexWorker',
  },
  {
    id: 5,
    title: 'Nox WebRTC',
    description: 'Secure and anonymous video calling over webRTC',
    url: 'https://github.com/asadbek064/nox-WebRTC-videocalls'
  },{
    id: 6,
    title: 'PascalCompiler',
    description: 'Pascal compiler using Java programming language.',
    url: 'https://github.com/asadbek064/PascalCompiler'
  },
  {
    id: 7,
    title: 'Old Portfolio',
    description: 'My first attempted at creating my portfolio website.',
    url: 'https://github.com/asadbek064/akarimov'
  }
];


export default function ProjectPage() {
  return (
    <section>
      <div className="
      dark:bg-gradient-to-r dark:from-amber-200 dark:to-yellow-500 text-transparent bg-clip-text
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      ">
        <h1 className="font-bold [font-size:var(--step-4)]">Projects</h1>
      </div>

      <div className="mt-6">
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
