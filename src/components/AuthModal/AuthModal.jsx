import React, { useState } from "react";
import "./AuthModal.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

function AuthModal({ type, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (type === "signup") {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", name);
            alert("Account created!");
        } else {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const displayName = userCredential.user.displayName || email;
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", displayName);
            alert("Logged in!");
        }
        onClose();
    } catch (error) {
        alert(error.message);
    }
  };

  return (
    <div className="auth-modal-overlay">
        {type === "login" && (
            <div className="auth-modal">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
                </form>
            </div>
        )}
        {type === "signup" && (
            <div className="auth-modal">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
                </form>
            </div>
        )}
    </div>

  );
}

export default AuthModal;
