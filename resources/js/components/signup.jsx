import { useState } from "react";
import axios from "axios";
import {BrowserRouter} from "react-router-dom";
import Login from "./login";
export default function SignUp() {
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
    return (
        <div className=" w-[500px] ">
            <div className=" flex justify-end m-4">light mode</div>
            <div className=" flex flex-col justify-center mx-16">
                <h1 className=" text-center mt-16 mb-10 font-extrabold text-4xl">
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
                        className=" w-[80%] mx-auto mb-2 h-10 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400  text-sm rounded-md border-[#E5E5E5] "
                    />
                    <input
                    onChange={onChange}
                        type="password"
                        name=""
                        id=""
                        placeholder="Password"
                        className=" w-[80%] mx-auto mb-2 h-10 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400  text-sm rounded-md border-[#E5E5E5] "
                    />
                    <input
                    onChange={onChange}
                        type="password"
                        name=""
                        id=""
                        placeholder="Confirm Password"
                        className=" w-[80%] mx-auto mb-2 h-10 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400 text-sm  rounded-md border-[#E5E5E5] "
                    />
                    <button className=" mx-28 bg-orange px-8 py-2 rounded-2xl text-white text-xl font-bold">
                        Sign Up
                    </button>
                </form>
                <p className=" pt-2 text-center text-base font-medium">
                    Already have an account?
                    <a href="#" className=" text-info">
                        Sign In
                    </a>
                </p>

                <a
                    href=""
                    className="flex items-center border-[2px] border-[#E5E5E5] rounded-md h-[30px] py-auto mx-auto px-8"
                >
                    <img
                        src="/images/google.png"
                        alt=""
                        className=" mx-auto w-6"
                    />
                    <p className=" pl-4 text-sm font-extrabold tracking-tight text-gray-800 ">
                        Sign up with Google
                    </p>
                </a>
            </div>
        </div>
    );
}
