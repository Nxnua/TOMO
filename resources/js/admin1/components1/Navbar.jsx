import { FaEnvelope, FaSearch } from 'react-icons/fa'
import { GrLanguage } from "react-icons/gr";
import React, { useState } from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [tripsDropdownVisible, setTripsDropdownVisible] = useState(false);
const toggleTripsDropdown = () => {
  setTripsDropdownVisible(!tripsDropdownVisible);
};
const closeDropdowns = () => {
  setTripsDropdownVisible(false);
};
  return (
    <div className="h-[50px] flex items-center text-sm text-[#555] border-b-[0.5px] border-b-[rgb(252,251,250)] border-solid bg-white">
      <div className="w-full flex items-center justify-between p-5">
      <div className='flex items-center rounded-[5px]'>
            <input type="text" className='bg-[#f8f9fc] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search for...' />
            <div className='bg-yellow-400 h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
              <FaSearch color='white'/>
            </div>
          </div>
        <div className="flex items-center">
          <div className="flex items-center relative mr-5">
            <div className='mr-1'>
            <GrLanguage  />
            </div>
            <Link to="#">English</Link>
          </div>
          <div className="flex items-center relative mr-5">
            <div className='mr-1'>
            <FaEnvelope/>
            </div>
            <Link to="#">Mail</Link>
            <div className="w-[10px] h-[10px] bg-[red] text-[white] flex items-center justify-center text-[10px] font-[bold] absolute top-[-5px] right-[-5px] rounded-[50%]">2</div>
          </div>
          <div className="flex items-center relative mr-5">
          
          </div>
          <div className="flex items-center relative mr-5">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-[30px] h-[30px] rounded-[50%] mr-2"
            />
            <div
                className="  md:static float-right relative left-0 top-86px md:w-auto sm:justify-between w-full flex items-center"
                onMouseLeave={closeDropdowns}
            >
                <ul>
                <li
                        id="trips"
                        className="relative"
                        onMouseEnter={toggleTripsDropdown}
                    >
                        <Link
                            className="hover:text-gray-500 inline-block"
                        >
                            Gundalai
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
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
