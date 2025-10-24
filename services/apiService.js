// This file simulates a backend API service.
// The data is hardcoded here for demonstration purposes.

// Simulate network delay
const sleep = (data, delay = 500) => {
    return new Promise(resolve => setTimeout(() => resolve(data), delay));
}

// Mock Data - In a real app, this would come from a database.
// The content is easily updatable here, simulating a backend API/JSON file.
const MOCK_PROFILE = {
    name: "Mohammad Sahil Bhat",
    bio: "I am a student of Electrical Engineering at IIT ISM Dhanbad.",
    profilePictureUrl: "https://ik.imagekit.io/d58le6owhr/IMG_20251020_212511436_AE~2.jpg?updatedAt=1761237097766",
};

// As requested, no default photos are added. The backend can populate this array.
const MOCK_GALLERY_IMAGES = [
    // Example of how to add an image:
    // { id: '1', url: 'https://picsum.photos/seed/gallery1/800/600', alt: 'A beautiful landscape' },
       {
id: '1',
url: 'https://ik.imagekit.io/d58le6owhr/IMG_20250715_165752320_HDR_AE.jpg?updatedAt=1761238532878',
alt: ''},
{id: '2',
url: 'https://iili.io/KgVYShN.jpg',
alt: ''},
{id: '3',url: 'https://iili.io/KgV0tSe.jpg',
alt: ''},{
id: '4', url: 'https://ik.imagekit.io/d58le6owhr/IMG_20250830_155138239_HDR_AE.jpg?updatedAt=1761280372147',alt:''},{
id: '5', url: 'https://ik.imagekit.io/d58le6owhr/IMG_20210125_165753.jpg?updatedAt=1761238532739', alt:''},{
id: '6', url: 'https://ik.imagekit.io/d58le6owhr/IMG_20250720_162711103_HDR_AE.jpg?updatedAt=1761280373658',alt:''},{
id: '7', url: 'https://ik.imagekit.io/d58le6owhr/IMG_20251011_200945079_HDR.jpg?updatedAt=1761280351895',alt:''},{
id: '8', url: 'https://ik.imagekit.io/d58le6owhr/IMG_20251011_200649326_HDR.jpg?updatedAt=1761280361015', alt:''},{
id: '9', url: 'https://iili.io/KgV1Nbj.jpg',alt'',}
];

const MOCK_PROJECTS = [
    {
        id: '1',
        title: 'Cleaning My Room ',
        description: 'It takes me 1 Hour straight to clean my hostel room ',
        imageUrl: 'https://ik.imagekit.io/d58le6owhr/bed.jpg?updatedAt=1761281403228',
    },
    
    // Add more projects here as needed by editing this "backend" file.
];

const MOCK_SKILLS = [
    { id: '1', name: 'Multitasking' },
    { id: '2', name: 'Problem Solving'},
    { id: '3', name: 'Mathematics'},
    { id: '4', name: 'Physics'},
    
];

const MOCK_EXPERIENCE = [
    
];

export const getProfile = () => {
    console.log("Fetching profile data...");
    return sleep(MOCK_PROFILE);
};

export const getGalleryImages = () => {
    console.log("Fetching gallery images...");
    return sleep(MOCK_GALLERY_IMAGES);
};

export const getProjects = () => {
    console.log("Fetching projects...");
    return sleep(MOCK_PROJECTS);
};

export const getSkills = () => {
    console.log("Fetching skills...");
    return sleep(MOCK_SKILLS);
};

export const getExperience = () => {
    console.log("Fetching experience...");
    return sleep(MOCK_EXPERIENCE);
};

export const submitContactForm = (data) => {
    console.log("Submitting contact form:", data);
    // In a real app, this would be a POST request to the backend to store the message.
    return sleep({ success: true }, 1000);
}
