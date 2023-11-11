import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import { Flowbite, DarkThemeToggle } from "flowbite-react";
export default function Login({ signUpHandler }) {
    const [formDat, setFormDat] = useState({
        username: "",
        password: "",
    });

    // const onSubmit = () => {
    //   axios
    //     .post("api", {
    //       username: formDat.username,
    //       password: formDat.password,
    //     })
    //     .then(({ data }) => {
    //       if (data.status === "success") {
    //         sessionStorage.setItem("token", data.result.user.token);

    //       } else {
    //         alert("wrong credentials");
    //       }
    //     })
    //     .catch((error) => alert(error));

    // };

    const onLogin = (e) => {
        e.preventDefault();
        if (formDat.username && formDat.password) {
            onSubmit();
        } else {
            alert("Please fill fields!!!");
        }
        return;
    };

    const onChange = (e) => {
        setFormDat({ ...formDat, [e.target.name]: e.target.value });
    };
    return (
        <div className="rounded-2xl w-[30vw] h-[100vh] bg-white float-right">
            <div className=" flex justify-end m-4">
            <Flowbite>
              <DarkThemeToggle className=" ml-1 outline-none focus:ring-0 active:ring-0" />
            </Flowbite>
            </div>
            <div className=" flex flex-col justify-center">
                <h1 className=" text-center mt-[4vh] mb-10 font-extrabold text-3xl">
                    Sign In
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
                        type="submit"
                        className="my-[5vh] mx-auto py-2 bg-orange px-8  rounded-xl text-white text-xl font-bold"
                        value="Sign In"
                    />
                </form>
                <p className="mb-[5vh] pt-2 text-center text-xs lg:text-sm">
                    Don't have an account? &nbsp;
                    <a href="#" onClick={signUpHandler} className=" text-info">
                        Sign Up
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
                        Sign in with Google
                    </p>
                </a>
            </div>
        </div>
    );
}
