import React, { useRef } from 'react';
import './SignInScreen.css'

import {getAuth , createUserWithEmailAndPassword,signInWithEmailAndPassword} from '../../FirebaseConfig/firebaseConfig.js'

const SignInScreen = () => {
    const email = useRef()
    const password = useRef()

    const registerHandler = (e) =>{
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed up 
        // const user = userCredential.user;
        console.log(userCredential.user);
        // ...
        })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });

    }


    const signInHandler = (e) =>{
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed in 
        console.log(userCredential.user);
        // const user = userCredential.user;
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);  
    });
        
        
    }


    return (
        <div className='signUpScreen'>
            <div className="loginContainer_background">
                <img
                className='login_Logo' 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="img" />
                <div className='login_Gradient'/>
            </div>
            <form className='signform'>
                <h1>Sign In</h1>
                <input ref={email} type="email" placeholder='Email' />
                <input ref={password} type="password" placeholder='Password' />
                <button type='submit' onClick={signInHandler}>Sign In</button>
                <h4>
                    <span className='signUpScreen__gray'>New to Netflix?</span>
                    <span className='signUpScreen__link' onClick={registerHandler}>Sign up now.</span>
                </h4>
            </form>
        </div>
    );
};

export default SignInScreen;