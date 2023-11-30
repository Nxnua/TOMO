import { useThemeContext } from "../../contexts";
import DarkThemeToggle from "./darkModeToggler";

export default function Start() {
    const { darkMode } = useThemeContext();
    const onScrollDown = () => {
        const element = document.getElementById("main-wrapper");
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div
            className={`float-right rounded-l-2xl h-full md:h-[100vh] md:w-[30vw] flex flex-col bg-white dark:bg-[#002444]`}
        >
            <div className=" flex justify-end m-4">
                <DarkThemeToggle />
            </div>
            <h1 className="flex justify-center mx-auto mt-[1vh] text-3xl font-extrabold tracking-tight text-orange dark:text-error">
                Hi, I'm Tomo!
            </h1>
            <div className=" flex flex-row items-center">
                <p className="m-5 text-center text-sm tracking-tighter font-semibold  ">
                    I am passionate about travel and helping you create
                    unforgettable adventures. Passionately devoted to travel, I
                    ensure your journeys are the most secure and comprehensive.
                    Choose your travel destination with me!
                </p>
                <img
                    src={
                        darkMode
                            ? "images/tomo-red.png"
                            : "images/tomo-green.png"
                    }
                    alt=""
                    className=" w-[28vh] mt-10"
                />
            </div>

            <div className=" mt-[6vh] flex justify-center ">
                {/* <div className="  animate-bounce  rounded-xl font-bold px-10 py-3   text-orange dark:text-gradient-to-r from-red-500 via-red-500 to-orange-600 text-2xl">
                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg>
                </div> */}

                <button type="button" onClick={onScrollDown}>
                    <div className="box">
                        <span className="  border-b-[2px] border-r-[2px] dark:border-white  border-orange"></span>
                        <span className="  border-b-[2px] border-r-[2px] dark:border-white  border-orange"></span>
                        <span className="  border-b-[2px] border-r-[2px] dark:border-white  border-orange"></span>
                    </div>
                </button>
            </div>
        </div>
    );
}
