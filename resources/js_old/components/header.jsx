import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DarkThemeToggle from "./darkmode/darkModeToggler";
import { Modal, Button } from "flowbite-react";
import Login from "./login";
import { SignUpNavigator } from "./signupnav";
import { useAuthContext, useMainContext, useThemeContext } from "../contexts";

function Header() {
    const { setModal } = useMainContext();
    const { darkMode } = useThemeContext();
    const { user, onLogout } = useAuthContext();
    const [onSignIn, setOnSignIn] = useState(false);
    const [onSignUp, setOnSignUp] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [tripsDropdownVisible, setTripsDropdownVisible] = useState(false);
    const [moreDropdownVisible, setMoreDropdownVisible] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset >= isSticky) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleTripsDropdown = () => {
        setTripsDropdownVisible(!tripsDropdownVisible);
        setMoreDropdownVisible(false);
    };

    const toggleMoreDropdown = () => {
        setMoreDropdownVisible(!moreDropdownVisible);
        setTripsDropdownVisible(false);
    };

    const closeDropdowns = () => {
        setTripsDropdownVisible(false);
        setMoreDropdownVisible(false);
    };

    const onSignInButton = () => {
        setOpenModal(true);
        setOnSignIn(true);
    };
    const onSignUpButton = () => {
        setOpenModal(true);
        setOnSignUp(true);
    };

    return (
        <nav
            className={`fixed z-20 w-full top-0 bg-white rounded-b-lg border-b dark:border-gray-600 shadow-lg flex justify-between items-center h-[10vh] mx-auto font-Nunito dark:bg-darknav dark:text-white ${
                isSticky
                    ? "transform -translate-y-2 sticky top-0"
                    : "transform -translate-y-2"
            }`}
        >
            <Link className="ms-10" to="/">
                <img
                    src={
                        darkMode
                            ? "/images/tomo-new.png"
                            : "/images/tomo-new.png"
                    }
                    alt=""
                    className="w-[13vw] h-[12vh]  mt-1 hover:opacity-80"
                />
            </Link>
            <div
                className="  md:static float-right relative left-0 top-86px md:w-auto sm:justify-between w-full flex items-center"
                onMouseLeave={closeDropdowns}
            >
                <ul className=" absolute flex items-center md:flex-row sm:flex-row  flex-col gap-8 mx-auto  z-30 ">
                    <li
                        id="trips"
                        className="relative"
                        onMouseEnter={toggleTripsDropdown}
                    >
                        <Link className="hover:text-gray-500 inline-block">
                            Trips
                        </Link>
                        <ul
                            className={`${
                                tripsDropdownVisible ? "block" : "hidden"
                            } absolute border-black rounded-xl bg-white p-5 w-40 shadow-2xl transform -translate-x-1/2 -left-1/2 opacity-100 transition-all duration-300 ease-in-out  dark:bg-darknav`}
                        >
                            <li className="relative">
                                <Link
                                    to="/planyourtrip"
                                    className="hover:text-orange dark:hover:border-white border-black hover:border-b"
                                >
                                    Plan a trip
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/trips"
                                    className="hover:text-orange dark:hover:border-white border-black hover:border-b"
                                >
                                    Agencies
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li
                        className="relative hover:text-gray-500"
                        onMouseEnter={closeDropdowns}
                    >
                        <Link to="/guides">Travel Guides</Link>
                    </li>
                    <li className="relative" onMouseEnter={toggleMoreDropdown}>
                        <Link className="hover:text-gray-500 inline-block">
                            More
                        </Link>
                        <ul
                            className={`${
                                moreDropdownVisible ? "block" : "hidden"
                            } absolute dark:bg-darknav border-black rounded-xl bg-white p-5 w-40 shadow-2xl transform -translate-x-1/2 -left-1/2 opacity-100 transition-all duration-300 ease-in-out`}
                        >
                            <li>
                                <Link
                                    to="/reviews"
                                    className="hover:text-orange dark:hover:border-white border-black hover:border-b"
                                >
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Flights"
                                    className="hover:text-orange border-black dark:hover:border-white hover:border-b"
                                >
                                    Flights
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="bg-white dark:bg-darknav items-center float-right mr-10">
                <ul className="flex items-center gap-[1vh]">
                    <li className="flex w-6 h-auto">
                        <a href="#">
                            <img
                                src="/images/image 1.png"
                                alt=""
                                className="hover:opacity-80 mx-1 w-6 h-auto"
                            />
                        </a>
                    </li>
                    {user ? (
                        <li className="flex gap-2 items-center">
                            {user.email}
                            <button
                                type="button"
                                onClick={onLogout}
                                className={`bg-orange text-white border border-orange px-6 py-1 w-[15vh] h-[5vh] rounded-2xl hover:opacity-80 dark:bg-error dark:border-error`}
                            >
                                Logout
                            </button>
                        </li>
                    ) : (
                        <li className="flex gap-2">
                            <button
                                onClick={() => {
                                    setModal("signIN");
                                }}
                                className={`ml-3 bg-white dark:bg-darknav text-orange text-base border border-orange px-6 py-1 w-[15vh] h-[5vh] rounded-2xl sm:px-3 hover:bg-orange hover:text-white hover:opacity-90 dark:border-error dark:text-error`}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => setModal("signUP")}
                                className={`bg-orange text-white border border-orange px-6 py-1 w-[15vh] h-[5vh] rounded-2xl hover:opacity-80 dark:bg-error dark:border-error whitespace-nowrap`}
                            >
                                Sign Up
                            </button>
                        </li>
                    )}

                    <li className=" flex items-center active:ring-2 p-1 active:ring-gray-600 rounded-md">
                        <DarkThemeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
