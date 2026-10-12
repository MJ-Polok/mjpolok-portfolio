import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import { AuroraBackground } from './components/AuroraBackground';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contacts from './sections/Contacts';
import Footer from './components/Footer';
import ConstructionPage from './pages/ConstructionPage';
import CurrentPortfolioPage from './pages/CurrentPortfolioPage';

function App() {
  return (
    <BrowserRouter>
      <AuroraBackground>
        <Routes>
          <Route path="/" element={<ConstructionPage />} />
          <Route path="/current" element={<CurrentPortfolioPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuroraBackground>
    </BrowserRouter>
  );
}

export default App;
