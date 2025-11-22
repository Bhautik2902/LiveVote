import { useState, useEffect } from "react";
import "../styles/LoginForm.css";
import Button from "../components/Button";
import TextEntry from "../components/TextEntry";

export default function LoginForm({ open, onClose, onSubmit, statusMessage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!open) {
      setUsername("");
      setPassword("");
      setErrors({});
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required.";
    if (!password) newErrors.password = "Password is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit?.({ username, password });
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="login-close-btn" onClick={onClose}>
          &times;
        </button>

        <h2 className="login-title">Login to Your Account</h2>
        <p className="login-subtitle">Access your polls instantly.</p>

        {statusMessage && <div className="login-status">{statusMessage}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <TextEntry
            label="Username"
            name="username"
            value={username}
            placeholder="Enter your username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <div className="error-msg">{errors.username}</div>}

          <TextEntry
            label="Password"
            name="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error-msg">{errors.password}</div>}

          <Button variant="primary" type="submit">Login</Button>
        </form>

        <div className="social-divider"><span>OR LOGIN WITH</span></div>

        <div className="social-buttons">
          <button className="social-btn google">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="" />
            Google
          </button>
          <button className="social-btn facebook">
            <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
