import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/animations";
import { FiExternalLink, FiPhone } from "react-icons/fi";
import { heroLinks } from "../constants";
import "./Contacts.css"

const Contacts = () => {
    return (
        <section id="contacts" className="content-section contact-section"
        >
            <div className="section-shell contact-shell">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="contact-card"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={stagger}
                    >
                        <motion.h2 variants={fadeUp} className="section-heading">
                            Contact
                        </motion.h2>
                    </motion.div>
                    <motion.p
                        variants={fadeUp}
                        custom={1}
                        className="contact-email-line"
                    >
                        <a
                            href="mailto:mjpolok018@gmail.com"
                            className="contact-email-link"
                        >
                            mjpolok018@gmail.com
                        </a>
                        <a href="tel:+8801626298570" className="phone-text-link">
                            Make a Call
                            <FiPhone size={19.5} />
                        </a>
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        custom={2}
                        className="contact-divider"
                    />
                    <motion.div
                        variants={fadeUp}
                        custom={4}
                        className="contact-socials"
                    >
                        <div className="contact-link-row">
                            {heroLinks.slice(1).map((link, index) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact-text-link"
                                >
                                    {link.label}
                                    <FiExternalLink size={14} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contacts;