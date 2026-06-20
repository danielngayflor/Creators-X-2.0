import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Activations from './pages/Activations';
import Speakers from './pages/Speakers';
import Register from './pages/Register';
import Sponsors from './pages/Sponsors';
import Gallery from './pages/Gallery';
import PastEditions from './pages/PastEditions';
import Contact from './pages/Contact';

// Styles
import './styles/variables.css';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activations" element={<Activations />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/past-editions" element={<PastEditions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
