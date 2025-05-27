import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Wine from "./components/wine/Wine";
import About from "./components/about/About";
import Footer from "./components/Footer/Footer";
import './fonts.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/wine" onClick={toggleMenu}>Wine</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <div className="auth-buttons">
              <button className="login-btn">Log In</button>
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wine" element={<Wine />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
