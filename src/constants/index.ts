import { FaNodeJs, FaReact } from "react-icons/fa";
import { Education, HeroHighlights, HeroLinks, Languages, NavLink, Projects, Skills } from "../types";
import { SiBootstrap, SiCss, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FiCpu, FiLayers, FiUsers } from "react-icons/fi";

export const navLinks: NavLink[] = [
    { id: "whoami", label: "whoami" },
    { id: "skills", label: "skills" },
    { id: "projects", label: "projects" },
    { id: "contacts", label: "contacts" },
];

export const heroLinks: HeroLinks[] = [
    { id: "resume", label: "Viwe CV", href: "/mjcv.pdf" },
    { id: "github", label: "GitHub", href: "https://github.com/MJ-Polok" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/mj-polok/" },
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com/mj.polok.0" },
];

export const heroHighlights: HeroHighlights[] = [
    { id: "availableIndicator", label: "Available for Work" },
    { id: "location", label: "Barishal, Bangladeshi" },
    { id: "remote", label: "Open to remote" },
];

export const education: Education[] = [
    {
        degree: "Secondary School Certificate (SSC)",
        school: "Govt. Gournadi Pilot High School",
        period: "Jan 2019 - Dec 2025",
        gpa: null,
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        school: "Govt. Gournadi College",
        period: "Sep 2025 - Ongoing",
        gpa: null,
    },
];

export const languages: Languages[] = [
    { name: "Bangla", level: "Fluent", percent: 95 },
    { name: "English", level: "Intermediate", percent: 65 },
    { name: "Hindi", level: "Speaking", percent: 55 },
];

export const skills: Skills = {
    technologies: [
        { name: "ReactJS", icon: FaReact, color: "#61dafb" },
        { name: "NodeJS", icon: FaNodeJs, color: "#68a063" },
        { name: "ExpressJS", icon: SiExpress, color: "#ffffff" },
        { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
        { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
        { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
        { name: "CSS3", icon: SiCss, color: "#1572b6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
    ],
    others: [
        { name: "Computer Enthusiast", icon: FiCpu },
        { name: "Team Collaboration", icon: FiUsers },
        { name: "Problem Solving", icon: FiLayers },
    ],
};

export const projects: Projects[] = [
    {
        title: "Real-time Chat Application",
        description:
            "A real-time chat product with one-to-one conversations, group messaging, authentication, user search, and instant notifications.",
        features: [
            "Secure authentication flow",
            "Profile customization",
            "Theme switching",
            "Live notifications",
        ],
        tech: [
            "React.js",
            "Redux",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
        liveDemo: "https://chat-application-0c4r.onrender.com",
        github: "https://github.com/MJ-Polok/Chat-Application",
        accentColor: "#818cf8",
    },
    {
        title: "New Year Themed Web Application",
        description:
            "A full-stack project built with React, Vite, Tailwind, Node.js, and Express with a polished responsive interface.",
        features: [
            "Responsive landing experience",
            "Clean component structure",
            "Modern visual design",
            "Full-stack delivery",
        ],
        tech: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js"],
        liveDemo: "https://mj-polok.github.io/newyearproject-frontend",
        github: "https://github.com/MJ-Polok/newyearproject-frontend",
        accentColor: "#34d399",
    },
];