export default function SignUp() {
    return (
        <div className="rounded-2xl w-[300px] h-[100vh] float-right">
            <div className=" flex justify-end m-4">
                <a href="">
                    <img src="images/darkmoon.png" alt="" width={25} height={25} className="hover:opacity-70" />
                </a>
            </div>
            <div className=" flex flex-col justify-center">
                <h1 className="text-orange text-center mt-[1vh] mb-10 font-extrabold text-3xl">
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
                        className=" w-[80%] mx-auto mb-2 h-10 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400  text-sm rounded-md border-[#E5E5E5] "
                    />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Password"
                        className=" w-[80%] mx-auto mb-2 h-10 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400  text-sm rounded-md border-[#E5E5E5] "
                    />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Confirm Password"
                        className=" w-[80%] mx-auto mb-2 h-10 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400 text-sm  rounded-md border-[#E5E5E5] "
                    />
                    <button className="my-[5vh] mx-auto h-[30px] bg-orange px-8 py-auto rounded-2xl text-white text-xl font-bold">
                        Sign Up
                    </button>
                </form>
                <p className="mb-[5vh] pt-2 text-center text-base text-xs">
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
