import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="
            p-6 rounded-md shadow-sm
            bg-stone-100
            dark:bg-neutral-800 
            flex flex-col justify-between
          "
        >
          <div>
            <h2 className="[font-size:var(--step-1)] font-semibold mb-2 text-neutral-900 dark:text-neutral-200">{project.title}</h2>
            <p className="[font-size:var(--step--0)] text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
          </div>
        
          <div className='flex flex-row justify-start'>
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
                  hover:underline
                "
              >
                Live
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
              Source Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;