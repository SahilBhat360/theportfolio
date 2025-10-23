import React from 'react';

const SearchIcon = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('circle', { cx: "11", cy: "11", r: "8" }),
        React.createElement('line', { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
    )
);

const Gallery = ({ images, onImageClick }) => {
    return React.createElement(
        'section',
        { id: "gallery", className: "py-16 sm:py-20" },
        React.createElement(
            'h2',
            { className: "text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white" },
            "Photo Gallery"
        ),
        images.length > 0 ? React.createElement(
            'div',
            { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" },
            images.map(image => React.createElement(
                'div',
                { key: image.id, className: "group relative cursor-pointer", onClick: () => onImageClick(image.url) },
                React.createElement('img', { src: image.url, alt: image.alt, className: "w-full h-full object-cover rounded-lg shadow-md" }),
                React.createElement(
                    'div',
                    { className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center rounded-lg" },
                    React.createElement(SearchIcon, { className: "w-10 h-10 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" })
                )
            ))
        ) : React.createElement(
            'p',
            { className: "text-center text-gray-500 dark:text-gray-400" },
            "The gallery is currently empty. Check back later!"
        )
    );
};

export default Gallery;
