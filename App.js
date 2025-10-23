import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Gallery from './components/Gallery.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Lightbox from './components/Lightbox.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import { getProfile, getGalleryImages, getProjects, getSkills, getExperience } from './services/apiService.js';

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [lightboxImage, setLightboxImage] = useState(null);

    const [profile, setProfile] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                setLoading(true);
                const [profileData, galleryData, projectsData, skillsData, experienceData] = await Promise.all([
                    getProfile(),
                    getGalleryImages(),
                    getProjects(),
                    getSkills(),
                    getExperience(),
                ]);
                setProfile(profileData);
                setGalleryImages(galleryData);
                setProjects(projectsData);
                setSkills(skillsData);
                setExperience(experienceData);
            } catch (error) {
                console.error("Failed to fetch portfolio data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const openLightbox = (imageUrl) => {
        setLightboxImage(imageUrl);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return React.createElement(
        'div',
        { className: "min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-300" },
        React.createElement(Header, { theme: theme, toggleTheme: toggleTheme }),
        React.createElement(
            'main',
            { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8" },
            loading ? React.createElement(
                'div',
                { className: "flex justify-center items-center h-screen" },
                React.createElement('div', { className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500 dark:border-teal-500" })
            ) : React.createElement(
                React.Fragment,
                null,
                profile && React.createElement(Hero, { profile: profile }),
                React.createElement(Skills, { skills: skills }),
                React.createElement(Experience, { experience: experience }),
                React.createElement(Projects, { projects: projects }),
                React.createElement(Gallery, { images: galleryImages, onImageClick: openLightbox }),
                React.createElement(Contact, null)
            )
        ),
        React.createElement(Footer, null),
        lightboxImage && React.createElement(Lightbox, { imageUrl: lightboxImage, onClose: closeLightbox })
    );
};

export default App;
