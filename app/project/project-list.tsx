import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-6 bg-neutral-900 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-400 mb-4">{project.description}</p>
          

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neutral-50 hover:bg-neutral-700 hover:text-neutral-50 text-neutral-700 font-semibold py-1 px-3 rounded-md"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;