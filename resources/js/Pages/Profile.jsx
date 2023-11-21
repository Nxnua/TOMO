import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";
import ProfileEditPage from "../components/profileComponent";
import ChangePasswordPage from "../components/profilePassword";
import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";
export const Profile = () => {
    const [tripsDropdownVisible, setTripsDropdownVisible] = useState(false);
    const [moreDropdownVisible, setMoreDropdownVisible] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const onClick = () => {
        setOpenModal(true);
    };
    const toggleTripsDropdown = () => {
        setTripsDropdownVisible(!tripsDropdownVisible);
        setMoreDropdownVisible(false); // Close the "More" dropdown when opening "Trips"
    };

    const toggleMoreDropdown = () => {
        setMoreDropdownVisible(!moreDropdownVisible);
        setTripsDropdownVisible(false); // Close the "Trips" dropdown when opening "More"
    };

    const closeDropdowns = () => {
        setTripsDropdownVisible(false);
        setMoreDropdownVisible(false);
    };
    return (
        <div>
            <div className="border-[1px]">
                <Header />
            </div>

            <div
                className="flex flex-row mx-12 mt-2 w-11/12 justify-center shadow-md h-28 "
                onMouseLeave={closeDropdowns}
            >
                <div className="grid grid-cols-3 gap-2     ">
                    <a href="#">
                        <img
                            src="images/profile4.jpg "
                            alt=""
                            width={100}
                            height={100}
                            className="flex  border-[2px]  rounded-full h-24 mt-1 "
                        />
                    </a>
                    <div className="name flex flex-row items-end mb-4">
                        Tom Riddle
                    </div>
                </div>

                <div
                    className=" flex flex-row  items-end ml-[880px] mb-4 "
                    onMouseEnter={toggleTripsDropdown}
                >
                    <div className="  md:static float-right relative md:min-h-fit min-h-60vh left-0 top-86px md:w-auto w-full flex items-center">
                        <div
                            id="trips"
                            onClick={onClick}
                            className="edit relative flex  border-[2px] w-16 h-7 rounded-md border-slate-600  items-center justify-center text-sm text-orange font-bold shadow-lg "
                        >
                            <button>
                                <div>
                                    <div
                                        href="#"
                                        className=" inline-block w-full "
                                    >
                                        <button>Edit</button>
                                        <ul
                                            className={`${
                                                tripsDropdownVisible
                                                    ? "block"
                                                    : "hidden"
                                            } absolute border-black rounded-xl bg-white p-5 w-40 shadow-2xl transform -translate-x-1/2 -left-1/2 opacity-100 transition-all duration-300 ease-in-out  dark:bg-darknav`}
                                        >
                                            <li className="relative hover:text-gray-500">
                                                <div>
                                                <button>
                                                    Edit profile
                                                    <Modal
                                                        className="  bg-white    "
                                                        tabindex="-1"
                                                        show={openModal}
                                                        onClose={() =>
                                                            setOpenModal(false)
                                                        }
                                                    >
                                                        <Modal.Body className=" w-[75vw] self-center   p-0">
                                                            <ProfileEditPage />
                                                        </Modal.Body>
                                                        <div className=" absolute float right-4 top-4 ">
                                                            <button
                                                                onClick={() =>
                                                                    setOpenModal(
                                                                        false
                                                                    )
                                                                }
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
                                                    </Modal>
                                                </button>
                                                </div>
                                            </li>
                                            <li className="relative hover:text-gray-500">
                                                <div>
                                                    <button>
                                                        Edit password
                                                        <Modal
                                                            className="  bg-white    "
                                                            tabindex="-1"
                                                            show={openModal}
                                                            onClose={() =>
                                                                setOpenModal(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            <Modal.Body className=" w-[75vw] self-center   p-0">
                                                                <ChangePasswordPage />
                                                            </Modal.Body>
                                                            <div className=" absolute float right-4 top-4 ">
                                                                <button
                                                                    onClick={() =>
                                                                        setOpenModal(
                                                                            false
                                                                        )
                                                                    }
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
                                                        </Modal>
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" ml-14  justify-start mt-3 h-12    w-full   ">
                <div className="flex mt-2 justify-start md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mx-auto">
                    <div className="stroke" id="mainNav">
                        <ul>
                            <li>
                                <a href="#">Profile</a>
                            </li>
                            <li>
                                <a href="#">Notifiction</a>
                            </li>
                            <li>
                                <a href="#">Favorite</a>
                            </li>
                            <li>
                                <a href="#">Reviewed</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="info   flex justify-start bg-slate-100 ">
                <div className="info w-96 h-[20vw] flex flex-col justify-between rounded-md bg-white mt-5 ml-10 mb-5 ">
                    <div className=" h-[400px] bg-white flex flex-col  md:items-start md:ml-8 gap-1 shadow-md">
                        <div className="text-orange text-left mt-4 ">Info</div>
                        <div></div>
                        <a
                            img
                            src="images/flagen.png"
                            className=" h-5 w-5"
                            alt=""
                            href="#"
                        >
                            {" "}
                            Usa
                        </a>
                        <a img="" href="#">
                            Tomhlnd95@gmail.com
                        </a>
                        <a href="#"></a>
                        <a href="#">Review</a>
                        <a href="#">Write some details about yourself</a>
                    </div>
                </div>

                <div className="post w-[990px] h-[20vw] flex flex-col justify-between rounded-md bg-white mt-5 ml-10 mb-5 shadow-md">
                    bio
                </div>
            </div>

            <div className="mt-10">
                <div>
                    <ChangePasswordPage />
                </div>
                <Footer />
            </div>
        </div>
    );
};
