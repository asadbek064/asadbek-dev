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
    title: 'AnimetTV',
    description: 'An anime-themed website featuring reviews, a trivia game, online clip streaming, and image-based anime title identification, with a built-in search feature.',
    url: 'https://animet.site/',
  },
  {
    id: 2,
    title: 'AmazonFlexWorker',
    description: 'Automate searching and accepting Amazon Flex Driver jobs',
    url: 'https://github.com/asadbek064/AmazonFlexWorker',
  },
  {
    id: 3,
    title: 'Nox WebRTC',
    description: 'Secure and anonymous video calling over webRTC',
    url: 'https://github.com/asadbek064/nox-WebRTC-videocalls'
  }
];


export default function ProjectPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Projects</h1>
      
      <div className="mt-4">
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
