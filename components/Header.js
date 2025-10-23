import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants.js';

const THOUGHTS = [
    "The best way to predict the future is to create it.",
    "Strive not to be a success, but rather to be of value.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "The journey of a thousand miles begins with a single step.",
    "Simplicity is the ultimate sophistication.",
    "It's not a bug, it's an undocumented feature.",
    "Talk is cheap. Show me the code.",
    "God Is The Greatest",
    "First, solve the problem. Then, write the code.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
];

const SunIcon = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('circle', { cx: "12", cy: "12", r: "5" }),
        React.createElement('line', { x1: "12", y1: "1", x2: "12", y2: "3" }),
        React.createElement('line', { x1: "12", y1: "21", x2: "12", y2: "23" }),
        React.createElement('line', { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
        React.createElement('line', { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
        React.createElement('line', { x1: "1", y1: "12", x2: "3", y2: "12" }),
        React.createElement('line', { x1: "21", y1: "12", x2: "23", y2: "12" }),
        React.createElement('line', { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
        React.createElement('line', { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
    )
);

const MoonIcon = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
    )
);

const Header = ({ theme, toggleTheme }) => {
    const navLinks = ['Home', 'Skills', 'Experience', 'Projects', 'Gallery', 'Contact'];
    const [thought, setThought] = useState(null);

    useEffect(() => {
        if (thought) {
            const timer = setTimeout(() => {
                setThought(null);
            }, 10000); // The thought disappears after 10 seconds
            return () => clearTimeout(timer);
        }
    }, [thought]);

    const handleNavClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault(); // Prevent page jump
        const randomThought = THOUGHTS[Math.floor(Math.random() * THOUGHTS.length)];
        setThought(randomThought);
    };

    return (
        React.createElement(React.Fragment, null,
            React.createElement('style', null, `
                @keyframes slide-down-fade-in {
                    from { 
                        opacity: 0;
                        transform: translate(-50%, -20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translate(-50%, 0);
                    }
                }
                .animate-thought-popup {
                    animation: slide-down-fade-in 0.4s ease-out forwards;
                }
            `),
            React.createElement('header', { className: "sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md dark:shadow-gray-800" },
                React.createElement('div', { className: "container mx-auto px-4 sm:px-6 lg:px-8" },
                    React.createElement('div', { className: "flex items-center justify-between h-16" },
                        React.createElement('a', { href: "#home", onClick: handleLogoClick, className: "text-2xl font-bold text-primary-600 dark:text-teal-400 cursor-pointer" }, "SB"),
                        React.createElement('nav', { className: "hidden md:flex items-center space-x-6" },
                            navLinks.map(link =>
                                React.createElement('a', { key: link, href: `#${link.toLowerCase()}`, onClick: handleNavClick, className: "text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-teal-400 transition-colors" }, link)
                            )
                        ),
                        React.createElement('div', { className: "flex items-center space-x-4" },
                            SOCIAL_LINKS.map(link =>
                                React.createElement('a', { key: link.name, href: link.url, target: "_blank", rel: "noopener noreferrer", className: "text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-teal-400 transition-colors" },
                                    React.createElement(link.icon, { className: "h-5 w-5" })
                                )
                            ),
                            React.createElement('button', { onClick: toggleTheme, className: "p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" },
                                theme === 'dark' ? React.createElement(SunIcon, { className: "w-5 h-5" }) : React.createElement(MoonIcon, { className: "w-5 h-5" })
                            )
                        )
                    )
                )
            ),
            thought && React.createElement('div', { className: "fixed top-20 left-1/2 -translate-x-1/2 w-11/12 max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 z-[60] animate-thought-popup" },
                React.createElement('div', { className: "flex items-start" },
                    React.createElement('div', { className: "ml-3 flex-1" },
                        React.createElement('p', { className: "text-sm font-medium text-gray-900 dark:text-white" }, "A thought for you:"),
                        React.createElement('p', { className: "mt-1 text-sm text-gray-600 dark:text-gray-300" }, `"${thought}"`)
                    ),
                    React.createElement('div', { className: "ml-4 flex-shrink-0 flex" },
                        React.createElement('button', { onClick: () => setThought(null), className: "inline-flex text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" },
                            React.createElement('span', { className: "sr-only" }, "Close"),
                            React.createElement('svg', { className: "h-5 w-5", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
                                React.createElement('path', { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" })
                            )
                        )
                    )
                )
            )
        )
    );
};

export default Header;
