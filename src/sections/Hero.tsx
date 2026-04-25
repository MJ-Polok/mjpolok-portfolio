import { easeInOut, motion } from "framer-motion";
import { heroHighlights, heroLinks } from "../constants";
import "./Hero.css";

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero">
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="hero-kicker"
                >
                    Web Developer
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: easeInOut }}
                    className="hero-title"
                >
                    MJ Polok
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="hero-actions"
                >
                    {heroLinks.slice(0, -1).map((link, index) => (
                        <a key={link.id}
                            href={link.href}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className={index === 0 ? "hero-primary-link" : "hero-inline-link"}
                        >
                            {link.label}
                        </a>
                    ))}
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.62, ease: easeInOut }}
                className="hero-context-strip"
            >
                <p className="hero-context">
                    Bangladesh based developer building responsive MERN products with
                    clean interfaces, practical backend logic, and a strong focus on
                    real-world usability.
                </p>

                <div className="hero-context-tags">
                    {heroHighlights.map((item) => (
                        <span key={item.id} className="hero-context-tag">
                            {item.id === "availableIndicator" ? (
                                <span className="pill-dot"></span>
                            ) : (
                                ""
                            )}
                            {item.label}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;