import { motion } from "motion/react";
import { fadeUp, stagger } from "../lib/animations";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../constants";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="content-section">
      <div className="section-shell ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="section-heading">
            Projects
          </motion.h2>
        </motion.div>

        <div className="projects-stack">
          {projects.map((project, index) => {
            return (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                custom={index}
                className="project-card"
              >
                <div className="project-header">
                  <div className="project-heading">
                    <div>
                      <span className="panel-label">
                        Project {index + 1}
                      </span>
                      <h3>{project.title}</h3>
                    </div>
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <FiExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <FiGithub size={14} />
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="feature-list">
                  {project.features.map((feature, index) => (
                    <span key={feature} className="feature-tag">
                      <span
                        className="feature-dot"
                        style={{ backgroundColor: project.accentColor }}
                      />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="tech-row">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;