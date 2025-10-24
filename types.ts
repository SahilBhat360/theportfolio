export interface Profile {
    name: string;
    bio: string;
    profilePictureUrl: string;
    headerImageUrl?: string;
}

export interface GalleryImage {
    id: string;
    url: string;
    alt: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export interface Skill {
    id: string;
    name: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
}