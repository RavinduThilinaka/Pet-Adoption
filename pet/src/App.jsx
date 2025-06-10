import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import HeroSection from './components/home/Hero';
import Service from './components/services/Service';
import Contact from './components/contact/Contact';
import About from './components/about/About';

function App() {
  return (
    <Router>
     <Routes>
      <Route
        path='/'
        element={
          <div>
            <Navbar/>
            <HeroSection/>
            <Service/>
            <About/>
            <Contact/>
            <Footer/>
          </div>
        }
      />
     </Routes>
    </Router>
  );
}

export default App;
