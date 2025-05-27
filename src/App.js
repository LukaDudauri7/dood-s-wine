import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {BrowserView, MobileView, isMobile} from 'react-device-detect';
import Home from "./components/Home/Home";
import Wine from "./components/Wine/Wine";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import AuthModal from "./components/AuthModal/AuthModal";
import './fonts.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
            <BrowserView>
              <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/wine" onClick={toggleMenu}>Wine</Link>
                <Link to="/about" onClick={toggleMenu}>About</Link>
                <div className="auth-buttons">
                  <button className="login-btn" onClick={() => openModal('login')}>Log In</button>
                  <button className="signup-btn" onClick={() => openModal('signup')}>Sign Up</button>
                </div>
              </div>
            </BrowserView>
            {isMobile && (
              <>
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
                {isMenuOpen && (
                  <div className="mobile-menu">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/wine" onClick={toggleMenu}>Wine</Link>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                  </div>
                )}
                <div className="auth-buttons">
                  <button className="login-btn" onClick={() => { openModal('login'); toggleMenu(); }}> Log In </button>
                  <button className="signup-btn" onClick={() => { openModal('signup'); toggleMenu(); }}> Sign Up </button>
                </div>
              </>
            )}
            
        </nav>

        {isModalOpen && (
          <AuthModal type={modalType} onClose={closeModal} />
        )}

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
