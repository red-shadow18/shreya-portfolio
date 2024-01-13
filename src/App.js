import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import CaseStudies from './components/CaseStudies';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='routes'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/caseStudies" element={<CaseStudies />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/work" element={<Work />} />
            {/* <Route path="*" element={<WrongURL currentTheme={themeDataFinder()} />} /> */}
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
