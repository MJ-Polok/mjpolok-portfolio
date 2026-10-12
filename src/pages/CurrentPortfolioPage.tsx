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
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default CurrentPortfolioPage;
