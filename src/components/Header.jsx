import {React, useState} from 'react';
import "../styles/Header.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Header = ({signupHandler, loginHandler, isLoggedIn}) => {
  const navigate = useNavigate();

  return (
    <div>
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

          { isLoggedIn &&
            <div className="neo-actions">
              <Button onClick={loginHandler} variant="secondary">
                Login
              </Button>
              <Button onClick={signupHandler} variant="primary">
                Sign Up
              </Button>
            </div>
          }
        </header>
    </div>
  );
};

export default Header;
