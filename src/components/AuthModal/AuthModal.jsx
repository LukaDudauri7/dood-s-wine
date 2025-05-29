import { useState } from "react";
import "./AuthModal.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

function AuthModal({ type, onClose }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (type === "signup") {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
            alert("Account created!");
        } else {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Logged in!");
        }
        onClose();
    } catch (error) {
        alert(error.message);
    }
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{type === "signup" ? "Sign Up" : "Log In"}</h2>
        <form onSubmit={handleSubmit}>
          {type === "signup" && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
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
          <button type="submit">{type === "signup" ? "Sign Up" : "Log In"}</button>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
