import { useState, useEffect } from "react";
import "../styles/SignupForm.css";
import Button from "../components/Button";
import TextEntry from "../components/TextEntry";

const SignupForm = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [errors, setErrors] = useState({});
  const [strength, setStrength] = useState("Weak");

  useEffect(() => {
    if (!open) {
      setName("");
      setEmail("");
      setPwd("");
      setConfirmPwd("");
      setErrors({});
      setStrength("Weak");
    }
  }, [open]);

  if (!open) return null;

  const evaluateStrength = (value) => {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    if (score <= 1) return "Weak";
    if (score === 2) return "Medium";
    return "Strong";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (pwd.length < 8) newErrors.password = "Password must be at least 8 characters.";
    if (pwd !== confirmPwd) newErrors.confirm = "Passwords do not match.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit?.({ name, password: pwd });
      onClose();
    }
  };

  return (
    <div className="signup-overlay">
      <div className="signup-modal">

        <button className="signup-close-btn" onClick={onClose}>
           &times;
        </button>

        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Join LiveVote and participate in live polls instantly.</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          
          <TextEntry
            label="Name"
            name="name"
            value={name}
            placeholder="Your full name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="error-msg">{errors.name}</div>}

           <TextEntry
            label="Email"
            name="email"
            type="email"
            value={email}
            placeholder="Your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <TextEntry
              label="Password"
              name="password"
              type="password"
              value={pwd}
              placeholder="Enter password"
              required
              onChange={(e) => {
                setPwd(e.target.value);
                setStrength(evaluateStrength(e.target.value));
              }}
            />

            <div className={`strength strength-${strength.toLowerCase()}`}>
              Strength: {strength}
            </div>

            {errors.password && <div className="error-msg">{errors.password}</div>}
          </div>

          <div>
            <TextEntry
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPwd}
              placeholder="Re-enter password"
              required
              onChange={(e) => setConfirmPwd(e.target.value)}
            />
            {errors.confirm && <div className="error-msg">{errors.confirm}</div>}
          </div>

          <Button variant="primary" type="submit">Sign Up</Button>
        </form>

        <div className="social-divider">
          <span>OR SIGN UP WITH</span>
        </div>

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
};

export default SignupForm;
