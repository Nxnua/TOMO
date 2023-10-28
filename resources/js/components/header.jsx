
import React, { useState, useEffect } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 100) {
        setIsSticky(true);
      }    else {
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
      <a className="ms-10" href="#">
        <img
          src="images/Logo.png"
          alt=""
          className="w-vw-1 h-vw-1 mt-5 hover:opacity-70"
        />
      </a>
      <div className="md:static float-right absolute md:min-h-fit min-h-60vh left-0 top-86px md:w-auto w-full flex items-center">
        <ul className="relative flex md:flex-row flex-col md:items-center md:gap-4vw gap-8 mx-auto">
          <li id="trips" className="relative group">
            <a href="#" className="hover:text-gray-500">
              Trips
            </a>
            <ul
              className={`absolute border-black rounded-xl bg-white mt-3 p-5 w-40 space-y-2 shadow-2xl transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out`}
            >
              <li>
                <a href="" className="hover:text-orange border-black hover:border-b">
                  Plan a trip
                </a>
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
            <a href="#">Travel Guides</a>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-gray-500">
              More
            </a>
            <ul
              className={`absolute border-black rounded-xl bg-white mt-3 p-5 space-y-2 w-40 shadow-2xl transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out`}
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
                isSticky ? "bg-white" : "bg-orange"
              } border-2 border-orange text-orange px-6 py-1 rounded-2xl hover:bg-orange hover:text-white hover:opacity-80`}
            >
              Sign In
            </button>
            <button
              className={`ml-2 border-2 border-orange ${
                isSticky ? "bg-orange" : "bg-white"
              } text-white px-6 py-1 rounded-2xl hover:opacity-80`}
            >
              Sign Up
            </button>
          </li>
          <li>
            <a href="#">
              <img
                src="images/darkmoon.png"
                alt=""
                width={30}
                height={30}
                className="hover:opacity-70"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

