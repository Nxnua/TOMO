import { useState } from "react";
import axios from "axios";
import {BrowserRouter} from "react-router-dom";
import SignUp from "./signup"
import Login from "./login";

export function SignUpNavigator(){
    const [onSignIn, setOnSignIn] = useState(false);
 
    return(
        <div>
        {onSignIn ? (
            
            <LoginNavigator
                               
            />
        ) : (
            <SignUp
                signHandler={() => {
                    setOnSignIn(true);
                }}
            />
        )}
        </div>
    );
}

export function LoginNavigator(){
    const [onSignUp, setOnSignUp] = useState(false);
        return(
            <div>
            {onSignUp ? (
                
                <SignUp 
                                   
                />
            ) : (
                <Login
                    signUpHandler={() => {
                        setOnSignUp(true);
                    }}
                />
            )}
            </div>
        );

}