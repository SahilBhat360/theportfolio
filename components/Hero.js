import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants.js';

const Hero = ({ profile }) => {
    const xLink = SOCIAL_LINKS.find(link => link.name === 'X');
    const [typedBio, setTypedBio] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (profile?.bio) {
            setIsTyping(true);
            setTypedBio(''); // Reset in case profile data re-fetches
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < profile.bio.length) {
                    setTypedBio(prev => prev + profile.bio.charAt(i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                }
            }, 50); // Typing speed in milliseconds

            return () => clearInterval(typingInterval);
        }
    }, [profile?.bio]);


    return React.createElement(
        'section',
        { id: "home", className: "py-16 sm:py-20" },
        React.createElement('style', null, `
            @keyframes blink {
                50% { opacity: 0; }
            }
            .animate-blink {
                animation: blink 1s step-end infinite;
            }
        `),
        React.createElement(
            'div',
            { className: "max-w-4xl mx-auto" },
            React.createElement(
                'div',
                { className: "relative mb-24" },
                 // Banner Image
                 React.createElement(
                    'div',
                    { className: "h-48 md:h-64 rounded-xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700" },
                    profile.headerImageUrl && React.createElement('img', {
                        src: profile.headerImageUrl,
                        alt: "Header background",
                        className: "w-full h-full object-cover"
                    })
                ),
                // Profile Picture
                React.createElement(
                    'div',
                    { className: "absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2" },
                    React.createElement('img', {
                        src: profile.profilePictureUrl,
                        alt: profile.name,
                        className: "w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-50 dark:border-gray-900 shadow-lg"
                    })
                )
            ),
            React.createElement(
                'div',
                { className: "text-center" },
                React.createElement(
                    'h1',
                    { className: "text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4" },
                    profile.name
                ),
                React.createElement(
                    'p',
                    // Added min-h-[2.5em] which is roughly 2 lines height to prevent layout shift while typing
                    { className: "text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto min-h-[2.5em] flex items-center justify-center" },
                    typedBio,
                    isTyping && React.createElement('span', { className: "inline-block w-0.5 h-6 bg-gray-600 dark:bg-gray-300 ml-1 animate-blink" })
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
        )
    );
};

export default Hero;