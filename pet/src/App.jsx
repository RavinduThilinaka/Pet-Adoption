import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Service from './components/services/Service';


function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Service/>
    </Router>
  );
}

export default App;
