import { motion } from "motion/react";
import { fadeUp, scaleIn, stagger } from "../lib/animations";
import { skills } from "../constants";
import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills" className="content-section">
            <div className="section-shell skills-shell">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <motion.h2 variants={fadeUp} className="section-heading">
                        Skills
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={1} className="section-intro">
                        Technologies I use regularly and the broader strengths I bring
                        into product work.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="skills-panel"
                >
                    <motion.div
                        variants={fadeUp}
                        custom={1}
                        className="technical-skills-block"
                    >
                        <span className="skills-group-label">Technical Skills</span>
                        <motion.div
                            variants={fadeUp}
                            custom={2}
                            className="skills-grid"
                        >
                            {skills.technologies.map((skill, index) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        variants={scaleIn}
                                        custom={index}
                                        className="skill-card-enhanced"
                                    >
                                        <span
                                            className="skill-card-icon"
                                            style={{ color: skill.color }}
                                        >
                                            <Icon size={28} />
                                        </span>
                                        <span className="skill-card-name">{skill.name}</span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        custom={3}
                        className="soft-skills-block"
                    >
                        <span className="skills-group-label">Soft Skills</span>
                        <div className="badge-row">
                            {skills.others.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <span key={skill.name} className="skill-badge">
                                        <Icon size={15} />
                                        {skill.name}
                                    </span>
                                );
                            })}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;