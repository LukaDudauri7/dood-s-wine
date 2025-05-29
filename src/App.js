import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import Home from "./components/Home/Home";
import Wine from "./components/Wine/Wine";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import AuthModal from "./components/AuthModal/AuthModal";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import "./fonts.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const logout = () => signOut(auth);

  const renderAuthButtons = () => (
    <div className="auth-buttons">
      {user ? (
        <>
          <span className="welcome-text">Welcome, {user.displayName || "User"}</span>
          <button className="logout-btn" onClick={logout}>Log Out</button>
        </>
      ) : (
        <>
          <button className="login-btn" onClick={() => openModal("login")}>Log In</button>
          <button className="signup-btn" onClick={() => openModal("signup")}>Sign Up</button>
        </>
      )}
    </div>
  );

  const renderMenuLinks = () => (
    <>
      <Link to="/" onClick={toggleMenu}>Home</Link>
      <Link to="/wine" onClick={toggleMenu}>Wine</Link>
      <Link to="/about" onClick={toggleMenu}>About</Link>
    </>
  );

  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <BrowserView>
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
              {renderMenuLinks()}
              {renderAuthButtons()}
            </div>
          </BrowserView>

          <MobileView>
            {renderAuthButtons()}
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
            {isMenuOpen && <div className="mobile-menu">{renderMenuLinks()}</div>}
          </MobileView>
        </nav>

        {isModalOpen && <AuthModal type={modalType} onClose={closeModal} />}

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
