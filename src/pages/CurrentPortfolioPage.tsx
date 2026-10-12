import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contacts from '../sections/Contacts';
import Footer from '../components/Footer';

const CurrentPortfolioPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contacts />
      <Footer />
    </>
  );
};

export default CurrentPortfolioPage;
