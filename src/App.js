import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from '../src/components/PreLoader';
import Mobile from './components/Mobile';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="App">
      
      <Router>
        <Preloader load={load} />
        {isMobile ? <Mobile/> : <>
        <div className="App" id={load ? 'no-scroll' : 'scroll'}>
            <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<Projectlist />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        </>}
          
        
        
      </Router>
    </div>
  );
}

export default App;
