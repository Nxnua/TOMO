import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext, useMainContext } from "../contexts";

export default function Login() {
    const { setModal } = useMainContext();
    const { setUser } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const onLogin = async (e) => {
        const { username, password } = formData;
        e.preventDefault();
        if (!username || !password) return alert("Бүр талбарыг бөглөнө үү!");
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                username,
                password
            );
            if (userCredential.user) {
                setUser(userCredential.user);
                setModal("");
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
            return alert("Нэвтрэх нэр эсвэл нууц үг буруу байна!");
        }
    };

    const inputHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className="w-96 rounded-2xl bg-white dark:bg-darkbg h-full float-right">
            <div className="flex flex-col justify-center w-full">
                <h1 className=" text-center mt-[8vh] mb-10 dark:text-gray-300 font-extrabold text-3xl">
                    Sign In
                </h1>
                <form
                    onSubmit={onLogin}
                    className=" flex flex-col justify-center "
                >
                    <input
                        onChange={inputHandler}
                        type="email"
                        name="username"
                        placeholder="Email"
                        className=" w-[80%] mx-auto mb-2 h-10 lg:mb-4 lg:h-12 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400 dark:bg-darknav dark:border-0 text-sm rounded-md border-[#E5E5E5] "
                    />
                    <input
                        onChange={inputHandler}
                        type="password"
                        name="password"
                        placeholder="Password"
                        className=" w-[80%] mx-auto mb-2 h-10 lg:mb-4 lg:h-12 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400 dark:bg-darknav dark:border-0 text-sm rounded-md border-[#E5E5E5] "
                    />
                    <button
                        className="my-[5vh] mx-auto py-2 bg-orange px-8  rounded-xl text-white text-xl font-bold"
                        type="submit"
                        disabled={loading}
                        onClick={onLogin}
                    >
                        {loading ? (
                            <div className="lds-ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        ) : (
                            "Sign In"
                        )}
                    </button>
                </form>
                <p className="mb-[5vh] pt-2 text-center text-xs lg:text-sm dark:text-gray-400">
                    Don't have an account? &nbsp;
                    <button
                        onClick={() => {
                            setModal("signUP");
                        }}
                        className=" text-info"
                    >
                        "Sign Up"
                    </button>
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
                    <p className=" pl-4 text-sm  font-extrabold tracking-tight dark:text-gray-400 text-gray-800 ">
                        Sign in with Google
                    </p>
                </a>
            </div>
        </div>
    );
}
