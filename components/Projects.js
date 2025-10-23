import React from 'react';
import ProjectCard from './ProjectCard.js';

const Projects = ({ projects }) => {
    return React.createElement(
        'section',
        { id: "projects", className: "py-16 sm:py-20" },
        React.createElement(
            'h2',
            { className: "text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white" },
            "My Projects"
        ),
        projects.length > 0 ? React.createElement(
            'div',
            { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
            projects.map(project => React.createElement(ProjectCard, { key: project.id, project: project }))
        ) : React.createElement(
            'p',
            { className: "text-center text-gray-500 dark:text-gray-400" },
            "Projects will be added soon. Stay tuned!"
        )
    );
};

export default Projects;
