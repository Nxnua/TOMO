export default function SignUp() {
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
                    className=" flex flex-col justify-center"
                >
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                        className=" w-full mb-6 h-14 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400   rounded-md border-[#E5E5E5] "
                    />
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Password"
                        className=" w-full mb-6 h-14 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400  rounded-md border-[#E5E5E5] "
                    />
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Confirm Password"
                        className=" w-full mb-6 h-14 border-[2px] px-5 focus:bg-neutral-200 focus:outline-none placeholder-neutral-400  rounded-md border-[#E5E5E5] "
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
                    className="flex items-center mt-16 border-[2px] border-[#E5E5E5] rounded-md h-14"
                >
                    <img
                        src="/images/google.png"
                        alt=""
                        className=" ml-12 w-8"
                    />
                    <p className=" pl-4 text-xl font-extrabold tracking-tight text-gray-800 ">
                        Sign up with Google
                    </p>
                </a>
            </div>
        </div>
    );
}
