import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import { useActiveSection } from "../Hooks/useActiveSection";


const Navbar = () => {
    const [navCompact, setNavCompact] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { activeSection, setActiveSection } = useActiveSection();

    useEffect(() => {
        const handleScroll = () => {
            setNavCompact(window.scrollY > 56);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav id="nav" className={`${navCompact ? "scrolled" : ""}`}>
                <div className="nav-right">
                    <a
                        href="#hero"
                        className="nav-logo"
                        onClick={() => {
                            setActiveSection(null);
                            setMobileMenuOpen(false);
                        }}
                    >
                        mjpolok
                    </a>

                    <ul className="nav-links">
                        {navLinks.map((link) => {
                            return (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        className={`floating-nav-link ${activeSection == link.id ? "is-active" : ""}`}
                                        onClick={() => {
                                            setActiveSection(link.id);
                                        }}
                                    >
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex items-center justify-between gap-3 md:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen((open) => !open)}
                            className="floating-nav-toggle"
                            aria-label="Toggle navigation"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                        </button>
                    </div>
                </div>

                <div className="nav-left md:hidden">
                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, y: -10 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: easeInOut }}
                                className="overflow-hidden "
                            >
                                <div className="mobile-nav-menu">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.id}
                                            href={`#${link.id}`}
                                            onClick={() => {
                                                // alert("clicked: " + link.id);
                                                setMobileMenuOpen(false);
                                                setActiveSection(link.id);
                                                setTimeout(() => {
                                                    document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                                                }, 300);
                                            }}
                                            className={`floating-nav-link mobile ${activeSection == link.id ? "is-active" : ""}`}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: easeInOut }}
                        className="mobile-nav-overlay md:hidden"
                        aria-label="Close navigation menu"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;