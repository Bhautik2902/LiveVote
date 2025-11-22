import { useState } from "react";
import FormCard from "../components/FormCard";
import TextEntry from "../components/TextEntry";
import Button from "../components/Button";
import "../styles/LoginPage.css";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { authService } from '../service/AuthService';


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
        
        const response = await authService.login({username, password});

        const data = response.data;

        const decoded = jwtDecode(data.token);
        const roles = decoded.roles; 

        localStorage.setItem("token", data.token);
        localStorage.setItem("roles", JSON.stringify(roles));

        navigate('/')
    } 
    catch (err) {
      if (err.response && err.response.status === 401) {
        setErrorMsg("Invalid username or password.");
        return;
      }
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    navigate('/');
  }

  return (
    <div className="login-page-overlay">
      <FormCard className="login-card" title="Login">
        <button className="close-btn" onClick={handleClose}>✕</button>

        <h2 className="login-title">Login</h2>

        <form onSubmit={handleLogin} className="login-form">
          <TextEntry
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextEntry
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMsg && <p className="error-msg">{errorMsg}</p>}

          <Button type="submit">Login</Button>
        </form>
      </FormCard>
    </div>
  );
}
