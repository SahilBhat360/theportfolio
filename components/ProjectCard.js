import React from 'react';

const ProjectCard = ({ project }) => {
    return React.createElement(
        'div',
        { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300" },
        React.createElement('img', { src: project.imageUrl, alt: project.title, className: "w-full h-56 object-cover" }),
        React.createElement(
            'div',
            { className: "p-6" },
            React.createElement('h3', { className: "text-xl font-semibold mb-2 text-gray-900 dark:text-white" }, project.title),
            React.createElement('p', { className: "text-gray-600 dark:text-gray-300" }, project.description)
        )
    );
};

export default ProjectCard;
