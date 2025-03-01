import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Wine from "./components/wine/Wine"
import About from "./components/about/About"
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <Link to="/">Home</Link>
          <Link to="/wine">Wine</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wine" element={<Wine />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
