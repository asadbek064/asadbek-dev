import type { Metadata } from "next";
import ProjectList from "./project-list";
import { projects } from "./projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal Projects",
};


export default function ProjectPage() {
  return (
    <section>
      <div className="
      text-transparent bg-clip-text
      bg-gradient-to-r from-cyan-500 to-blue-500
      ">
        <h1 className="font-bold [font-size:var(--step-2)]">Projects</h1>
      </div>

      <div className="mt-6">
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
