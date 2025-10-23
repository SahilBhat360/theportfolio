import React, { useState } from 'react';

const UserIcon = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
        React.createElement('circle', { cx: "12", cy: "7", r: "4" })
    )
);

const MailIcon = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('rect', { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
        React.createElement('path', { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
    )
);

const SendIcon = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('line', { x1: "22", y1: "2", x2: "11", y2: "13" }),
        React.createElement('polygon', { points: "22 2 15 22 11 13 2 9 22 2" })
    )
);

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const recipientEmail = "mohammadsahilbhat.contact@email.com"; // Your receiving email address
        const subject = encodeURIComponent(`Portfolio Contact: Message from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );
        
        // This opens the user's default email client
        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    };

    return React.createElement(
        'section',
        { id: "contact", className: "py-16 sm:py-20" },
        React.createElement(
            'div',
            { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" },
            React.createElement(
                'div',
                { className: "bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50" },
                React.createElement(
                    'h2',
                    { className: "text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white" },
                    "Get In Touch"
                ),
                React.createElement(
                    'form',
                    { onSubmit: handleSubmit, className: "space-y-6" },
                    React.createElement(
                        'div',
                        { className: "grid grid-cols-1 sm:grid-cols-2 gap-6" },
                        React.createElement(
                            'div',
                            { className: "relative" },
                            React.createElement('label', { htmlFor: "name", className: "sr-only" }, "Name"),
                            React.createElement(UserIcon, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                            React.createElement('input', { type: "text", id: "name", value: name, onChange: (e) => setName(e.target.value), placeholder: "Your Name", required: true, className: "pl-10 w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:focus:ring-teal-500/50 transition-all duration-300" })
                        ),
                        React.createElement(
                            'div',
                            { className: "relative" },
                            React.createElement('label', { htmlFor: "email", className: "sr-only" }, "Email"),
                            React.createElement(MailIcon, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                            React.createElement('input', { type: "email", id: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Your Email", required: true, className: "pl-10 w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:focus:ring-teal-500/50 transition-all duration-300" })
                        )
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement('label', { htmlFor: "message", className: "sr-only" }, "Message"),
                        React.createElement('textarea', { id: "message", rows: 5, value: message, onChange: (e) => setMessage(e.target.value), placeholder: "Your Message", required: true, className: "w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:focus:ring-teal-500/50 transition-all duration-300" })
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'button',
                            { type: "submit", className: "w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 dark:from-teal-500 dark:to-teal-600 dark:hover:from-teal-600 dark:hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-teal-500 transform hover:-translate-y-1 transition-all duration-300" },
                            React.createElement('span', null, "Send via Email"),
                            React.createElement(SendIcon, { className: "w-5 h-5" })
                        )
                    )
                )
            )
        )
    );
};

export default Contact;
