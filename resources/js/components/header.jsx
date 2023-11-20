import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DarkThemeToggle from "./darkmode/darkModeToggler";
import { useThemeContext } from "./darkmode/states";
import { Modal, Button } from "flowbite-react";
import Login from "./login";
import { SignUpNavigator } from "./signupnav";

function Header() {
    const { darkMode } = useThemeContext();
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
            className={`fixed z-20 w-full top-0 bg-white rounded-lg border-b dark:border-gray-600 shadow-lg flex justify-between items-center h-[10vh] mx-auto font-Nunito dark:bg-darknav dark:text-white ${
                isSticky
                    ? "transform -translate-y-2 sticky top-0"
                    : "transform -translate-y-2"
            }`}
        >
            <Link className="ms-10" to="/">
                <img
                    src={darkMode ? "/images/Tomo-White.png" : "/images/Logo.png"}
                    alt=""
                    className="w-auto h-[8vh]  hover:opacity-80"
                />
            </Link>
            <div
                className="  md:static float-right relative left-0 top-86px md:w-auto sm:justify-between w-full flex items-center"
                onMouseLeave={closeDropdowns}
            >
                <ul className=" absolute flex md:flex-row sm:flex-row  flex-col gap-8 mx-auto  z-30 ">
                    <li
                        id="trips"
                        className="relative"
                        onMouseEnter={toggleTripsDropdown}
                    >
                        <Link
                            to="/trips"
                            className="hover:text-gray-500 inline-block"
                        >
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
                                    href=""
                                    className="hover:text-orange dark:hover:border-white border-black hover:border-b"
                                >
                                    Agencies
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="hover:text-orange  dark:hover:border-white border-black hover:border-b"
                                >
                                    Travel budget
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
                        <a
                            href="#"
                            className="hover:text-gray-500 inline-block"
                        >
                            More
                        </a>
                        <ul
                            className={`${
                                moreDropdownVisible ? "block" : "hidden"
                            } absolute dark:bg-darknav border-black rounded-xl bg-white p-5 w-40 shadow-2xl transform -translate-x-1/2 -left-1/2 opacity-100 transition-all duration-300 ease-in-out`}
                        >
                            <li>
                                <a
                                    href=""
                                    className="hover:text-orange dark:hover:border-white border-black hover:border-b"
                                >
                                    Reviews
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="hover:text-orange border-black dark:hover:border-white hover:border-b"
                                >
                                    Flights
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="bg-white dark:bg-darknav float-right mr-10">
                <ul className="flex items-center gap-[1vh]">
                    <li>
                        <a href="#">
                            <img
                                src="/images/image 1.png"
                                alt=""
                                className="hover:opacity-80 mx-1 w-6 h-auto"
                            />
                        </a>
                    </li>
                    <li>
                        <button
                            onClick={onSignInButton}
                            className={`bg-white dark:bg-darknav text-orange border border-orange px-6 py-1 rounded-2xl hover:bg-orange hover:text-white hover:opacity-90 dark:border-error dark:text-error`}
                        >
                            Sign In
                        </button>
                        <Modal
                            className="  bg-white    "
                            tabindex="-1"
                            show={openModal}
                            onClose={() => setOpenModal(false)}
                        >
                            <Modal.Body className=" w-[75vw] self-center   p-0">
                                <div className=" flex relative h-[600px] ">
                                    <img
                                        src={
                                            darkMode
                                                ? "/images/bg-dark.png"
                                                : "/images/bg-light.png"
                                        }
                                        alt=""
                                        className=" rounded-2xl w-[600px]  lg:w-[900px]"
                                    />
                                    <div className=" absolute right-0">
                                        <SignUpNavigator status={onSignIn} />
                                    </div>
                                    <div className=" absolute float right-4 top-4 ">
                                        <button
                                            onClick={() => setOpenModal(false)}
                                        >
                                            <svg
                                                class="w-6 h-6 text-gray-800 dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </li>
                    <li>
                        <button
                            onClick={onSignUpButton}
                            className={`bg-orange text-white border border-orange px-6 py-1 rounded-2xl hover:opacity-80 dark:bg-error dark:border-error`}
                        >
                            Sign Up
                        </button>
                    </li>
                    <li className=" flex items-center active:ring-2 p-1 active:ring-gray-600 rounded-md">
                        <DarkThemeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;