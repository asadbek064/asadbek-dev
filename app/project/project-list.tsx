import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="
            p-6 rounded-md shadow-sm
            bg-neutral-50
            dark:bg-neutral-800 
            flex flex-col justify-between
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px' }}
          "
        >
          <div>
            <h2 className="[font-size:var(--step-0)] font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
              {project.title}
            </h2>
            <p className="[font-size:var(--step--0)] text-neutral-800 dark:text-gray-300 mb-4">
              {project.description}
            </p>
          </div>

          <div className="flex flex-row justify-start">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  ease-in transition duration-75
                  font-semibold py-2 px-3 rounded-sm
                  dark:text-neutral-200
                  text-neutral-900
                  hover:underline"
              >
                <FiExternalLink className="h-6 w-6" />
              </a>
            )}
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
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
