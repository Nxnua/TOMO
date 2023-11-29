import Header from "../components/main/header";
import Footer from "../components/main/footer";
import { useState } from "react";
import ProfileEditPage from "../components/profileComponent";
import ChangePasswordPage from "../components/profilePassword";
import { Modal } from "flowbite-react";
import { Link } from "react-router-dom";
export const Profile = () => {
    const [tripsDropdownVisible, setTripsDropdownVisible] = useState(false);
    const [moreDropdownVisible, setMoreDropdownVisible] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openPasswordModal, setOpenPasswordModal] = useState(false);

    const onCloseProfile = () => {
        setOpenModal(false);
    }
    const onClosePassword = () => {
        setOpenPasswordModal(false);
    }
    const onCli = () => {
        console.log("clicked");
    }


    
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
                            src="images/profile4.jpg"
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
                           
                            className="edit relative flex  border-[2px] w-16 h-7 rounded-md border-slate-600  items-center justify-center text-sm text-orange font-bold shadow-lg "
                        >
                            <div>
                                <div href="#" className=" inline-block w-full ">
                                    Edit
                                    <ul 
                                        className={`${
                                            tripsDropdownVisible
                                                ? "block"
                                                : "hidden"
                                        } absolute border-black rounded-xl bg-white p-5 w-40 shadow-2xl transform -translate-x-1/2 -left-1/2 opacity-100 transition-all duration-300 ease-in-out  dark:bg-darknav`}
                                    >
                                        <li className="relative hover:text-gray-500">
                                            <div>
                                                <button  onClick={()=> setOpenModal(true)}> 
                                                    Edit profile </button>
                                                    <Modal
                                                        className="  bg-white    "
                                                        tabIndex="-1"
                                                        show={openModal}
                                                       
                                                    >
                                                        <Modal.Body className=" w-[50vw] self-center   p-0">
                                                        <div className=" absolute z-50 float right-4 top-4 "  >
                                                        {/* {openModal && ( */}
                                                        <button onClick={onCloseProfile}
                                                               
                                                            >
                                                                <svg
                                                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                                                    aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                                                                </svg>
                                                            </button>
                                                            {/* )} */}
                                                        </div> 
                                                            <ProfileEditPage />
                                                            
                                                            
                                                            
                                                       
                                                        </Modal.Body>
                                                        
                                                    </Modal>
                                                
                                            </div>
                                        </li>
                                        <li className="relative hover:text-gray-500">
                                            <div>
                                                <button  onClick={()=> setOpenPasswordModal(true)}>
                                                    Edit password </button>
                                                    <Modal
                                                        className="  bg-white    "
                                                        tabIndex="-1"
                                                        show={openPasswordModal}
                                                        onClose={onClosePassword }
                                                    >
                                                        <Modal.Body className=" w-[75vw] self-center   p-0">
                                                            <ChangePasswordPage />
                                                        </Modal.Body>
                                                        <div  onClick={onClosePassword
                                                                } className=" absolute float right-4 top-4 ">
                                                            <button
                                                               
                                                            >
                                                                <svg
                                                                    className="w-6 h-6 text-gray-800 dark:text-white"
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
                                            
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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

            <div className=" info dark:bg-slate-700 flex justify-start bg-slate-100 ">
                <div className="dark:bg-slate-500 info w-96 h-[20vw] flex flex-col justify-between rounded-md bg-white mt-5 ml-10 mb-5 ">
                    <div className="dark:bg-slate-500 h-[400px] bg-white flex flex-col  md:items-start md:ml-8 gap-1">
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

                <div className="dark:bg-slate-500 post w-[990px] h-[20vw] flex flex-col justify-between rounded-md bg-white mt-5 ml-10 mb-5 shadow-md">
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
