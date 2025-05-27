import React, { useState } from "react";
import "./AuthModal.css";

function AuthModal({ type, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "signup") {
      localStorage.setItem(email, password);
      alert("Account created!");
    } else {
      const storedPassword = localStorage.getItem(email);
      if (storedPassword === password) {
        alert("Logged in!");
      } else {
        alert("Invalid credentials");
      }
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{type === "login" ? "Log In" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">{type === "login" ? "Log In" : "Sign Up"}</button>
        </form>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default AuthModal;
