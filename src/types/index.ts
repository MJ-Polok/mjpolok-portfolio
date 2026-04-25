import { IconType } from "react-icons";
export type NavLink = {
    id: string;
    label: string;
};

export type HeroHighlights = {
    id: string;
    label: string;
};

export type HeroLinks = {
    id: string;
    label: string;
    href: string;
};

export type Education = {
    degree: string;
    school: string;
    period: string;
    gpa: string | null;
};

export type Languages = {
    name: string;
    level: string;
    percent: number | null;
};

export type TechSkills = {
    name: string,
    icon: IconType,
    color: string;
};

export type OtherSkills = {
    name: string,
    icon: IconType;
};

export type Skills = {
    technologies: TechSkills[],
    others: OtherSkills[];
};


export type Projects = {
    title: string,
    description: string,
    features: string[],
    tech: string[],
    liveDemo: string,
    github: string,
    accentColor: string;
};