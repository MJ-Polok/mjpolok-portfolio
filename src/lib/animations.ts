import { Variants } from "motion";

const easeInOut = [0.25, 0.4, 0.25, 1] as const;

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.08, ease: easeInOut },
    }),
};

export const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.08 } },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index: number = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, delay: index * 0.05, ease: easeInOut },
    }),
};