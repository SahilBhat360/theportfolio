import React, { useEffect } from 'react';

const Lightbox = ({ imageUrl, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return React.createElement(
        'div',
        {
            className: "fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in",
            onClick: onClose
        },
        React.createElement('style', null, `
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .animate-fade-in {
                animation: fade-in 0.3s ease-out forwards;
            }
        `),
        React.createElement(
            'button',
            {
                className: "absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors",
                onClick: onClose
            },
            '×'
        ),
        React.createElement(
            'div',
            { className: "relative", onClick: (e) => e.stopPropagation() },
            React.createElement('img', { src: imageUrl, alt: "Enlarged view", className: "max-w-full max-h-[90vh] rounded-lg shadow-2xl" })
        )
    );
};

export default Lightbox;
