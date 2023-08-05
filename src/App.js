import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from '../src/components/PreLoader';

// import Mobile from './pages/Mobile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import HomePage from'./components/HomePage';
import AboutPage from'./components/Aboutpage';
import Projectlist from'./components//Projectlist';
import ContactPage from'./components/Contactpage';

function App() {

  // const isMobile = window.innerWidth<=768;
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      
      <Router>
        <Preloader load={load} />
          <div className="App" id={load ? 'no-scroll' : 'scroll'}>
            <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<Projectlist />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        
        
      </Router>
    </div>
  );
}

export default App;
