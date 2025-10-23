import React from 'react';
import { SOCIAL_LINKS } from '../constants.js';

const Hero = ({ profile }) => {
    const xLink = SOCIAL_LINKS.find(link => link.name === 'X');

    return React.createElement(
        'section',
        { id: "home", className: "text-center py-20 sm:py-24 lg:py-32" },
        React.createElement(
            'div',
            { className: "max-w-4xl mx-auto" },
            React.createElement('img', {
                src: profile.profilePictureUrl,
                alt: profile.name,
                className: "w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-gray-700"
            }),
            React.createElement(
                'h1',
                { className: "text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4" },
                profile.name
            ),
            React.createElement(
                'p',
                { className: "text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" },
                profile.bio
            ),
            React.createElement(
                'div',
                { className: "mt-8" },
                React.createElement(
                    'a',
                    {
                        href: xLink?.url || '#contact',
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "bg-primary-600 hover:bg-primary-700 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg"
                    },
                    "Get In Touch"
                )
            )
        )
    );
};

export default Hero;
