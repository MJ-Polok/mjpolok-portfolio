import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuroraBackground } from './components/AuroraBackground';
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
