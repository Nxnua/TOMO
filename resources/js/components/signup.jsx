import { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Login from "./login";

export default function SignUp({ signHandler }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password1: "",
    });
    const onSignUp = (e) => {
        e.preventDefault();
        console.log(formData);

        return;
    };
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [showLogin, setShowLogin] = useState(false);

    return (

        <div className="rounded-2xl w-[30vw] h-[100vh] bg-white float-right">
            {showLogin && <Login closeSignIn={() => setShowLogin(false)} />}
            <div className=" flex justify-end m-4">
                <img
                    src="images/darkmode.png"
                    alt=""
                    className="hover:opacity-70 w-16"
                />
            </div>
            <div className=" flex flex-col justify-center">
                <h1 className=" text-center mt-[4vh] mb-10 font-extrabold text-3xl">
                    Sign Up
                </h1>
                <form
                    action=""
                    method="get"
                    className=" flex flex-col justify-center "
                >
                    <input
                        onChange={onChange}
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                        className=" w-[80%] mx-auto mb-2 h-10 lg:mb-4 lg:h-12 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400  text-sm rounded-md border-[#E5E5E5] "
                    />
                    <input
                        onChange={onChange}
                        type="password"
                        name=""
                        id=""
                        placeholder="Password"
                        className=" w-[80%] mx-auto mb-2 h-10 lg:mb-4 lg:h-12 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400  text-sm rounded-md border-[#E5E5E5] "
                    />
                    <input
                        onChange={onChange}
                        type="password"
                        name=""
                        id=""
                        placeholder="Confirm Password"
                        className=" w-[80%] mx-auto mb-2 h-10 lg:mb-4 lg:h-12 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400 text-sm  rounded-md border-[#E5E5E5] "
                    />
                    <input
                        type="submit"
                        className="my-[5vh] mx-auto py-2 bg-orange px-8  rounded-xl text-white text-xl font-bold"
                        value="Sign Up"
                    />

                </form>
                <p className="mb-[5vh] pt-2 text-center text-xs lg:text-sm">
                    Already have an account? &nbsp;
                    <a href="#" onClick={signHandler} className=" text-info">

                        Sign In
                    </a>
                </p>

                <a
                    href=""
                    className="flex items-center lg:h-12 border-[2px] border-[#E5E5E5] rounded-md h-[30px] py-auto mx-auto px-8"
                >
                    <img
                        src="/images/google.png"
                        alt=""
                        className=" mx-auto w-6"
                    />
                    <p className=" pl-4 text-sm  font-extrabold tracking-tight text-gray-800 ">
                        Sign up with Google
                    </p>
                </a>
            </div>
        </div>
    );
}
