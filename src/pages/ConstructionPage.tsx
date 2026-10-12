import { Link } from 'react-router-dom';
import { easeInOut, motion } from 'motion/react';
import { heroLinks } from '../constants';
import '../sections/Hero.css';
import './ConstructionPage.css';

const ConstructionPage = () => {
  const resumeLink = heroLinks.find((link) => link.id === 'resume');
  const githubLink = heroLinks.find((link) => link.id === 'github');
  const linkedinLink = heroLinks.find((link) => link.id === 'linkedin');

  return (
    <main className="construction-page">
      <section className="construction-section" aria-labelledby="construction-title">
        <div className="construction-content">

          <motion.h1
            id="construction-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: easeInOut }}
            className="hero-title"
          >
            MJ Polok
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: easeInOut }}
            className="construction-copy"
          >
            <h2>Portfolio upgrade in progress</h2>
            <p>
              I'm updating my portfolio with new projects and in-depth case studies. My previous version is still online, and I'm open to new work. Feel free to reach out anytime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="construction-actions"
          >
            <Link to="/current" className="hero-primary-link">
              Current Portfolio
            </Link>

            {resumeLink ? (
              <a
                href={resumeLink.href}
                target="_blank"
                rel="noreferrer"
                className="hero-inline-link"
              >
                {resumeLink.label}
              </a>
            ) : null}

            {githubLink ? (
              <a
                href={githubLink.href}
                target="_blank"
                rel="noreferrer"
                className="hero-inline-link"
              >
                {githubLink.label}
              </a>
            ) : null}

            {linkedinLink ? (
              <a
                href={linkedinLink.href}
                target="_blank"
                rel="noreferrer"
                className="hero-inline-link"
              >
                {linkedinLink.label}
              </a>
            ) : null}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ConstructionPage;
