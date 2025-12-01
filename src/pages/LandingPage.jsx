import Banner from '../components/Banner';
import Header from '../components/Header';
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { authService } from '../service/AuthService';
import "../styles/Footer.css"
import {React, useState} from 'react';

const LandingPage = () => {

    const [openSignup, setOpenSignup] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const loginHandler = () => {
        setOpenLogin(true);
    }

    const signupHandler = () => {
        setOpenSignup(true);
    }

    const performLogin = async (loginData) => {
        try {
            const response = await authService.login({loginData});

            const data = response.data;

            const decoded = jwtDecode(data.token);
            const roles = decoded.roles; 

            localStorage.setItem("token", data.token);
            localStorage.setItem("roles", JSON.stringify(roles));

            navigate('/')
        } 
        catch (err) {
            if (err.response && err.response.status === 401) {
                setErrorMsg("User creation failed due to " + err.errorMsg);
                return;
            }
            setErrorMsg("Something went wrong. Please try again.");
        }

    }

    const performSignup = async (signupData) => {
        try {
            const response = await authService.createUser({signupData});

            const data = response.data;

            setOpenSignup(false);
            setOpenLogin(true);
        } 
        catch (err) {
            if (err.response && err.response.status === 401) {
                setErrorMsg("User creation failed due to " + err.errorMsg);
                return;
            }
            setErrorMsg("Something went wrong. Please try again.");
        }
    }

    return (
        <div>
            <Header signupHandler={signupHandler} loginHandler={loginHandler} />
            <Banner />
            <SignupForm
                open={openSignup}
                onClose={() => setOpenSignup(false)}
                onSubmit={(data) => performSignup(data)}
            />
            <LoginForm
                open={openLogin}
                onClose={() => setOpenLogin(false)}
                onSubmit={(data) => performLogin(data)}
                statusMessage=""
            />
            <Footer/>
        </div>  
    )
}

export default LandingPage;
