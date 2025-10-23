import React from 'react';

const Skills = ({ skills }) => {
    return React.createElement(
        'section',
        { id: "skills", className: "py-16 sm:py-20" },
        React.createElement(
            'h2',
            { className: "text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white" },
            "My Skills"
        ),
        skills.length > 0 ? React.createElement(
            'div',
            { className: "max-w-4xl mx-auto flex flex-wrap justify-center gap-4" },
            skills.map(skill => React.createElement(
                'div',
                { key: skill.id, className: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-5 rounded-full font-medium shadow" },
                skill.name
            ))
        ) : React.createElement(
            'p',
            { className: "text-center text-gray-500 dark:text-gray-400" },
            "My skills will be listed here soon."
        )
    );
};

export default Skills;
