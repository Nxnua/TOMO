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

  return (
    <nav
      className={`${
        isSticky
          ? "fixed top-0 z-10 w-full bg-white border-b-1 border-black-500 rounded-sm"
          : ""
      } flex justify-between items-center h-20 mx-auto font-Nunito`}
    >
      <Link className="ms-10" to="/">
        <img
          src="images/Logo.png"
          alt=""
          className="w-vw-1 h-vw-1 mt-5 hover:opacity-70"
        />
      </Link>
      <div className="md:static float-right absolute md:min-h-fit min-h-60vh left-0 top-86px md:w-auto w-full flex items-center">
        <ul className="relative flex md:flex-row flex-col md:items-center md:gap-4vw gap-8 mx-auto">
          <li id="trips" className="relative group">
            <Link to="/trips" className="hover:text-gray-500">
              Trips
            </Link>
            <ul
              className={`absolute border-black rounded-xl bg-white mt-3 p-5 w-40 space-y-2 shadow-2xl transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-20`}
            >
              <li>
                <Link  className="hover:text-orange border-black hover:border-b" to="/planyourtrip">
                  Plan a trip
                </Link>
              </li>
              <li>
                <a href="" className="hover:text-orange border-black hover:border-b">
                  Agencies
                </a>
              </li>
              <li>
                <a href="" className="hover:text-orange border-black hover:border-b">
                  Travel budget
                </a>
              </li>
            </ul>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/guides">Travel Guides</Link>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-gray-500">
              More
            </a>
            <ul
              className={`absolute border-black rounded-xl bg-white mt-3 p-5 space-y-2 w-40 shadow-2xl transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-20`}
            >
              <li>
                <a href="" className="hover:text-orange border-black hover:border-b">
                  Reviews
                </a>
              </li>
              <li>
                <a href="" className="hover:text-orange border-black hover:border-b">
                  Flights
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="bg-white float-right mr-10">
        <ul className="flex items-center gap-1vw">
          <li>
            <a href="#">
              <img
                src="images/image 1.png"
                alt=""
                width={30}
                height={30}
                className="hover:opacity-70"
              />
            </a>
          </li>
          <li>
            <button
              className={`${
                isSticky ? "bg-white text-orange" : "bg-orange text-white"
              } border-2 border-orange text-orange px-6 py-1 rounded-2xl hover:bg-orange hover:text-white hover:opacity-80 ml-2`}
            >
              Sign In
            </button>
            <button
              className={`ml-2 border-2 border-orange ${
                isSticky ? "bg-orange text-white" : "bg-white text-orange"
              } px-6 py-1 rounded-2xl hover:opacity-80`}
            >
              Sign Up
            </button>
          </li>
          <li>
            <a href="#">
              <img
                src="images/darkmodecircle.png"
                alt=""
                width={38}
                height={38}
                className="hover:opacity-70 ml-2"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;