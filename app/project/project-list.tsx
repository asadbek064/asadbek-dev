import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="
            p-6 rounded-md shadow-sm
            dark:bg-neutral-800 
            flex flex-col justify-between
          "
        >
          <div>
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              ease-in transition duration-75
              inline-block font-semibold py-2 px-3 rounded-sm
              bg-neutral-200 hover:bg-neutral-700 hover:text-neutral-200 text-neutral-900
            "
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;