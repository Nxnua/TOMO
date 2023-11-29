import { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./signup";
import Login from "./login";

export function SignUpNavigator({status}) {
    const [onSignIn, setOnSignIn] = useState(status);


    return (
        <div className=" h-[600px]">
        

            {onSignIn ? (
                <Login signUpHandler={() => {
                    setOnSignIn(false);
                }} />
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

export function LoginNavigator() {
    const [onSignUp, setOnSignUp] = useState(false);
    return (
        <div>
            {onSignUp ? (
                <SignUp />
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
