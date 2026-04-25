import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import { AuroraBackground } from './components/AuroraBackground';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contacts from './sections/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AuroraBackground>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Footer/>
      </AuroraBackground>
    </>
  );
}

export default App;