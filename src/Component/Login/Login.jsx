import React, { useState } from 'react';
import './Login.css';
import SignInScreen from '../SignIn/SignInScreen.jsx';

const Login = () => {
    const [signIn , setsignIn] = useState(false)

    return (
        <div className='loginContainer'>
            {signIn ? 
                <SignInScreen/> 
                :
            <>
            <div className="loginContainer_background">
                <img
                className='login_Logo' 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="img" />
                <button 
                className="signInBtn"
                onClick={() => setsignIn(true)}
                >
                    Sign In
                </button>
                <div className='login_Gradient'/>
            </div>
            <div className="login_Body">
                <h1>Unlimited movies, TV shows, and more</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="login_Input">
                    <input 
                    autoComplete='email'
                    type="email"
                    placeholder='Email Address'
                    className='login_Input_Email' 
                    />
                    <button 
                    className='login_Getstarted'
                    onClick={()=>setsignIn(true)}
                    >
                        Get Started
                    </button>
                </div>
            </div></>}
        </div>
    );
};

export default Login;