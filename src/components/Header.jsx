// Header.jsx
import "../styles/Header.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="neo-header">
      <div
        className="neo-title"
        onClick={() => navigate("/")}
        role="button"
        tabIndex={0}
      >
        <span className="neo-logo">🗳️</span>
        <h1 className="neo-appname">LiveVote</h1>
      </div>

      <div className="neo-actions">
        <Button onClick={() => navigate("/login")} variant="secondary">
          Login
        </Button>
        <Button onClick={() => navigate("/signup")} variant="primary">
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Header;
