import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flowbite, DarkThemeToggle } from "flowbite-react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [tripsDropdownVisible, setTripsDropdownVisible] = useState(false);
  const [moreDropdownVisible, setMoreDropdownVisible] = useState(false);

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
    <nav
      className={`fixed z-20 w-full top-0 bg-white rounded-lg border-b shadow-lg flex justify-between items-center h-[10vh] mx-auto font-Nunito ${
        isSticky ? "transform -translate-y-2 sticky top-0" : "transform -translate-y-2"
      }`}
    >
      <a className="ms-10" href="#">
        <img
          src="images/Logo.png"
          alt=""
          className="w-vw-1 h-vw-1 my-auto hover:opacity-80"
        />
      </a>
      <div className="md:static float-right relative left-0 md:w-auto w-full flex items-center" onMouseLeave={closeDropdowns}>
        <ul className="absolute flex md:flex-row flex-col md:items-center md:gap-4vw gap-8 mx-auto ">
          <li id="trips" className="relative" onMouseEnter={toggleTripsDropdown}>
            <a href="#" className="hover:text-gray-500 inline-block">
              Trips
            </a>
            <ul
              className={`${
              tripsDropdownVisible ? "block" : "hidden"
              } absolute border-black rounded-xl bg-white p-5 w-40 shadow-2xl transform -translate-x-1/2 -left-1/2 opacity-100 transition-all duration-300 ease-in-out `}
            >
              <li className="relative">
                <Link to="/planyourtrip" className="hover:text-orange border-black hover:border-b">
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
          <li className="relative hover:text-gray-500" onMouseEnter={closeDropdowns}>
            <Link to="/guides">Travel Guides</Link>
          </li>
          <li className="relative" onMouseEnter={toggleMoreDropdown}>
            <a href="#" className="hover:text-gray-500 inline-block">
              More
            </a>
            <ul
              className={`${
                moreDropdownVisible ? "block" : "hidden"
              } absolute border-black rounded-xl bg-white p-5 w-40 shadow-2xl transform -translate-x-1/2 -left-1/2 opacity-100 transition-all duration-300 ease-in-out`}
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
        <ul className="flex items-center gap-1vh">
          <li>
            <a href="#">
              <img
                src="images/image 1.png"
                alt=""
                width={20}
                height={20}
                className="hover:opacity-80 mx-3"
              />
            </a>
          </li>
          <li>
            <button
              className={`bg-white text-orange border mx-1 border-orange px-6 py-1 rounded-2xl hover:bg-orange hover:text-white hover:opacity-90`}
            >
              Sign In
            </button>
            <button
              className={`bg-orange text-white border mx-1 border-orange px-6 py-1 rounded-2xl hover:opacity-80`}
              >
              Sign Up
            </button>
          </li>
          <li>
            <Flowbite>
              <DarkThemeToggle className=" ml-1 outline-none focus:ring-0 active:ring-0" />
            </Flowbite>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
