import Banner from '../components/Banner';
import Header from '../components/Header';
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import {React, useState} from 'react';

const LandingPage = () => {

    const [openSignup, setOpenSignup] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const perfromLogin = () => {
        setOpenLogin(true);
    }

    const performSignup = () => {
        setOpenSignup(true);
    }

    return (
        <div>
            <Header signupHandler={performSignup} loginHandler={perfromLogin} />
            <Banner 
                msg="Welcome"
                description="Manage customer accounts, handle transactions, and perform everyday banking operations with ease."
            />
            <SignupForm
                open={openSignup}
                onClose={() => setOpenSignup(false)}
                onSubmit={(data) => console.log("User submitted:", data)}
            />
            <LoginForm
                open={openLogin}
                onClose={() => setOpenLogin(false)}
                onSubmit={(data) => console.log("Login data:", data)}
                statusMessage="Logged out successfully"
            />
        </div>  
    )
}

export default LandingPage;
