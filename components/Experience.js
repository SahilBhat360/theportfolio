import React from 'react';

const Experience = ({ experience }) => {
    return React.createElement(
        'section',
        { id: "experience", className: "py-16 sm:py-20 bg-gray-100 dark:bg-gray-800/50" },
        React.createElement(
            'div',
            { className: "container mx-auto px-4 sm:px-6 lg:px-8" },
            React.createElement(
                'h2',
                { className: "text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white" },
                "Experience"
            ),
            experience.length > 0 ? React.createElement(
                'div',
                { className: "max-w-3xl mx-auto" },
                React.createElement(
                    'div',
                    { className: "relative border-l-2 border-primary-500/50 dark:border-teal-400/50 ml-3" },
                    experience.map((item, index) => React.createElement(
                        'div',
                        { key: item.id, className: "mb-10 ml-6" },
                        React.createElement(
                            'span',
                            { className: "absolute flex items-center justify-center w-6 h-6 bg-primary-500 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-teal-400" },
                            React.createElement(
                                'svg',
                                { className: "w-2.5 h-2.5 text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20" },
                                React.createElement('path', { d: "M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" })
                            )
                        ),
                        React.createElement(
                            'h3',
                            { className: "flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white" },
                            item.role,
                            index === 0 && React.createElement(
                                'span',
                                { className: "bg-primary-100 text-primary-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-teal-900 dark:text-teal-300 ml-3" },
                                "Latest"
                            )
                        ),
                        React.createElement(
                            'p',
                            { className: "block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400" },
                            `${item.company} | ${item.period}`
                        ),
                        React.createElement(
                            'p',
                            { className: "text-base font-normal text-gray-600 dark:text-gray-300" },
                            item.description
                        )
                    ))
                )
            ) : React.createElement(
                'p',
                { className: "text-center text-gray-500 dark:text-gray-400" },
                "Work experience will be added soon."
            )
        )
    );
};

export default Experience;
