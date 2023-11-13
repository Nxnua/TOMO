import DarkThemeToggle from "./darkModeToggler";
import { useThemeContext } from "./states";
export default function Start({ startHandler }) {
    const { darkMode } = useThemeContext();
    return (
        <div className={`float-right rounded-2xl h-[100vh] w-[30vw] flex flex-col bg-white dark:bg-[#002444]`}>
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
                    src={darkMode? "images/tomo-red.png":"images/tomo-green.png"}
                    alt=""
                    className=" w-[28vh] mt-10"
                />
            </div>

            <button
                className=" mt-[6vh] flex justify-center "
                onClick={() => startHandler()}
            >
                <div className="  rounded-xl font-bold px-10 py-3  bg-orange text-white dark:bg-gradient-to-r from-red-500 via-red-500 to-orange-600 text-2xl">
                    Start
                </div>
            </button>
        </div>
    );
}
