import React from 'react';
import { SOCIAL_LINKS } from '../constants.js';

const Footer = () => {
    return React.createElement(
        'footer',
        { className: "bg-gray-100 dark:bg-gray-800 mt-16" },
        React.createElement(
            'div',
            { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8" },
            React.createElement(
                'div',
                { className: "flex flex-col items-center justify-between md:flex-row" },
                React.createElement(
                    'div',
                    { className: "flex space-x-6 mb-4 md:mb-0" },
                    SOCIAL_LINKS.map(link => {
                        const isComingSoon = link.status === 'coming-soon';
                        const props = {
                            key: link.name,
                            href: link.url,
                            target: isComingSoon ? undefined : "_blank",
                            rel: isComingSoon ? undefined : "noopener noreferrer",
                            className: isComingSoon
                                ? "text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-50 transition-colors"
                                : "text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-teal-400 transition-colors",
                            title: isComingSoon ? "Coming Soon!" : link.name,
                            onClick: isComingSoon ? (e) => e.preventDefault() : undefined
                        };
                        return React.createElement('a', props,
                            React.createElement(link.icon, { className: "h-6 w-6" })
                        );
                    })
                ),
                React.createElement(
                    'p',
                    { className: "text-sm text-gray-500 dark:text-gray-400" },
                    `© ${new Date().getFullYear()} Mohammad Sahil Bhat. All rights reserved.`
                )
            )
        )
    );
};

export default Footer;