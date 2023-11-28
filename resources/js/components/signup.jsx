import { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Login from "./login";
import { Flowbite, DarkThemeToggle } from "flowbite-react";

export default function SignUp({ signHandler }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password1: "",
    });

    // const onChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };


    return (
        <div className="rounded-2xl w-[30vw] h-full bg-white float-right dark:bg-darkbg">
         
            <div className=" flex flex-col justify-center ">
                <h1 className="text-center mt-[8vh] mb-10 dark:text-gray-300 font-extrabold text-3xl">
                    Sign Up
                </h1>
                <form
                    action=""
                    method="get"
                    className=" flex flex-col justify-center "
                >
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                        className="w-[80%] mx-auto mb-2 h-10 lg:mb-4 lg:h-12 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400 dark:bg-darknav dark:border-0 text-sm rounded-md border-[#E5E5E5] "
                    />
                    <input
                    
                        type="password"
                        name=""
                        id=""
                        placeholder="Password"
                        className=" w-[80%] mx-auto mb-2 h-10 lg:mb-4 lg:h-12 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400 dark:bg-darknav dark:border-0 text-sm rounded-md border-[#E5E5E5] "
                    />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Confirm Password"
                        className=" w-[80%] mx-auto mb-2 h-10 lg:mb-4 lg:h-12 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400 dark:bg-darknav dark:border-0 text-sm rounded-md border-[#E5E5E5] "
                    />
                    <input type="submit" className="my-[5vh] mx-auto py-2 bg-orange px-8  rounded-xl text-white text-xl font-bold dark:bg-[#0068B4]  " value="Sign Up"/>
          
                </form>
                <p className="mb-[5vh] pt-2 text-center text-xs lg:text-sm dark:text-gray-400" onClick={signHandler}>
                    Already have an account?
                    <a href="#" className=" text-info">
                    {" "} SignIn
                    </a>
                </p>

                <a
                    href=""
                    className="flex items-center w-[80%] lg:h-12 border-[2px] border-[#E5E5E5] rounded-md h-[30px] py-auto mx-auto px-8 dark:bg-darknav dark:border-0 "
                >
                    <img
                        src="/images/google.png"
                        alt=""
                        className=" ml-12 w-6"
                    />
                    <p className=" pl-4 text-sm  font-extrabold tracking-tight dark:text-gray-400 text-gray-800">
                        Sign up with Google
                    </p>
                </a>
            </div>
        </div>
    );
}