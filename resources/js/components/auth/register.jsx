import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useMainContext, useAuthContext } from "../../contexts";

export default function Register() {
    const { setModal } = useMainContext();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password1: "",
    });
    const onSignUp = async (e) => {
        e.preventDefault();
        const { username, password, password1 } = formData;
        if (!username || !password || !password1)
            return alert("Бүр талбарыг бөглөнө үү!");

        if (password !== password1)
            return alert("Нууц үгээ буруу давтсан байна!");

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                username,
                password
            );
            alert("Success");
            // .then((userCredential) => {
            //     alert("Success");
            //     const user = userCredential.user;
            // })
        } catch (e) {
            console.log(e);
            return alert("Серверийн алдаа!");
        }
    };
    const inputHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col justify-center h-full gap-3">
            <h1 className="text-center dark:text-gray-300 font-extrabold text-3xl mb-5">
                Sign Up
            </h1>
            <form
                onSubmit={onSignUp}
                className="flex flex-col justify-center gap-1"
            >
                <input
                    onChange={inputHandler}
                    type="email"
                    name="username"
                    placeholder="Email"
                    className="w-[80%] mx-auto h-10 lg:mb-4 lg:h-12 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400 dark:bg-darknav dark:border-0 text-sm rounded-md border-[#E5E5E5] "
                />
                <input
                    onChange={inputHandler}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className=" w-[80%] mx-auto h-10 lg:mb-4 lg:h-12 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400 dark:bg-darknav dark:border-0 text-sm rounded-md border-[#E5E5E5] "
                />
                <input
                    onChange={inputHandler}
                    type="password"
                    name="password1"
                    placeholder="Confirm Password"
                    className=" w-[80%] mx-auto h-10 lg:mb-4 lg:h-12 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400 dark:bg-darknav dark:border-0 text-sm rounded-md border-[#E5E5E5] "
                />
                <input
                    type="submit"
                    className="mx-auto py-2 bg-orange px-8 rounded-xl text-white text-xl font-bold dark:bg-[#0068B4] my-5"
                    value="Sign Up"
                />
            </form>
            <p className="pt-2 text-center text-xs lg:text-sm dark:text-gray-400 mb-2">
                Already have an account? &nbsp;
                <button
                    onClick={() => setModal("signIN")}
                    className=" text-info"
                >
                    "Sign-In"
                </button>
            </p>

            <button className="flex justify-center items-center w-[80%] lg:h-12 border-[2px] border-[#E5E5E5] rounded-md h-[30px] py-auto mx-auto px-8 dark:bg-darknav dark:border-0 ">
                <img src="/images/google.png" alt="" className="w-6" />
                <p className=" pl-4 text-sm font-extrabold tracking-tight dark:text-gray-400 text-gray-800">
                    Sign up with Google
                </p>
            </button>
        </div>
    );
}
