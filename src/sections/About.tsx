import { motion } from "framer-motion";
import { education, languages } from "../constants";
import "./About.css"
import { fadeUp, stagger } from "../lib/animations";

const About = () => {

    return (
        <section id="whoami" className="content-section">
            <div className="section-shell whoami-shell">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="whoami-hero-card"
                >
                    <motion.h2
                        variants={fadeUp}
                        custom={1}
                        className="section-heading"
                    >
                        Who Am I
                    </motion.h2>
                    <motion.div variants={fadeUp} custom={2} className="copy-stack">
                        <p className="whoami-body">
                            I am a MERN stack web developer from Bangladesh. I build
                            responsive websites and full-stack applications using React,
                            Node.js, Express.js, and MongoDB.
                        </p>
                        <p className="whoami-body">
                            My main focus is creating clean UI, practical backend logic,
                            and smooth user experience. I am currently learning, improving
                            my engineering skills, and looking for opportunities to work
                            on real products.
                        </p>
                    </motion.div>
                </motion.div>

                <div className="whoami-bottom-grid">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={stagger}
                        className="whoami-column"
                    >
                        <motion.div variants={fadeUp} custom={1}>
                            <span className="panel-label">Education</span>
                        </motion.div>
                        <div className="timeline">
                            {education.map((item, index) => (
                                <motion.div
                                    key={item.degree}
                                    variants={fadeUp}
                                    custom={index + 2}
                                    className="timeline-item"
                                >
                                    <div className="glass-card timeline-card">
                                        <h3>{item.degree}</h3>
                                        <p>{item.school}</p>
                                        <div className="timeline-meta">
                                            <span>{item.period}</span>
                                            {item.gpa ? <span>GPA: {item.gpa}</span> : null}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={stagger}
                        className="whoami-column"
                    >
                        <motion.div variants={fadeUp} custom={1}>
                            <span className="panel-label">Languages</span>
                        </motion.div>
                        <div className="languages-compact-grid">
                            {languages.map((language, index) => (
                                <motion.div
                                    key={language.name}
                                    variants={fadeUp}
                                    custom={index + 2}
                                    className="compact-language-item"
                                >
                                    <div className="language-top">
                                        <span>{language.name}</span>
                                        <span>{language.level}</span>
                                    </div>
                                    <div className="language-bar-bg">
                                        <motion.div
                                            className="language-bar-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${language.percent}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.1, delay: index * 0.08 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;