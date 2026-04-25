import { useEffect, useState } from "react";

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollY = window.scrollY;
            const centerY = scrollY + window.innerHeight / 2;
            let closest = null;
            let closestDist = Infinity;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionCenter = scrollY + rect.top + rect.height / 2;
                const dist = Math.abs(centerY - sectionCenter);
                if (dist < closestDist) {
                    closestDist = dist;
                    closest = section.id;
                }
            });

            setActiveSection(closest);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return {activeSection, setActiveSection};
};