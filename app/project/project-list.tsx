import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="
           animate fadeInUp
            p-6 rounded-md shadow-md
            flex flex-col justify-between
            border hover:border-gray-500
            duration-200
            ease-in-out
          "
        >
          <div>
          <a
            href={project.url ? project.url : ''}
            target={project.url && '_blank'}
            rel="noopener noreferrer"
            className="
              cursor-pointer
              transition 
            "
          >
            <div className={`flex flex-row space-x-4 items-center [font-size:var(--step-0)] font-semibold mb-2 text-neutral-800 dark:text-neutral-20 ease-in-out duration-200 ${project.url && ' hover:text-blue-400'}`}>
              <span>
                {project.title}
              </span>
              {project.url && (
              <span>
                <FiExternalLink className="h-6 w-6" />
              </span>
              )}
            </div>
            </a>
            <p className="[font-size:var(--step--0)] text-neutral-800 dark:text-gray-300 mb-4">
              {project.description}
            </p>
          </div>

          <div className="flex flex-row justify-start">
           {project?.github && (
            <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              ease-in transition duration-75
              font-semibold py-2 px-3 rounded-sm
              dark:text-neutral-200
              text-neutral-900
              hover:underline
            "
          >
            <FaGithub className="h-6 w-6  hover:text-blue-400 ease-in-out duration-200" />
          </a>
           )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
