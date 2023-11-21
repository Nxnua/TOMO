import React from "react";
import { FaChevronCircleLeft, FaChevronCircleRight, FaRegSun, FaStickyNote, FaTachometerAlt, FaWrench , FaUserAlt } from "react-icons/fa";

const Sidebar = () =>{
    return(
        <div className="bg-slate-600 h-screen px-[25px]">
            <div>
                <img src="/images/Logo.png" alt=""  className="px-[15px] flex items-center justify-center hover:opacity-80 border-b-[1px] border-[#ededed]/[0.3]" />
            </div>
            <div className="px-[15px] py-[15px] flex items-center justify-center border-b-[1px] border-[#ededed]/[0.3]">
            <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">Admin panel</h1>
            </div>
            <div className="flex items-center gap-[15px] py-[10px] border-b-[1px] border-[#ededed]/[0.3]">
                <FaTachometerAlt color="white"/>
                <p className="text-white">Dashboard</p>
            </div>
            <div className="pt-[15px] border-b-[1px] border-[#ededed]/[0.3]">
                <p className="text-[20px] font-extrabold leading-[16px] text-white/[0.4]">interface</p>
                <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
                    <div className="flex items-center gap-[10px]">
                        <FaUserAlt color="white"/>
                        <p className="text-[15px] leading-[20px] font-normal text-white">User</p>
                    </div>
                    <FaChevronCircleRight color="white"/>
                </div>
                <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
                    <div className="flex items-center gap-[10px]">
                        <FaUserAlt color="white"/>
                        <p className="text-[15px] leading-[20px] font-normal text-white">Guide</p>
                    </div>
                    <FaChevronCircleRight color="white"/>
                </div>
            </div>
            <div className="pt-[15px] border-b-[1px] border-[#ededed]/[0.3]">
                <p className="text-[20px] font-extrabold leading-[16px] text-white/[0.4]">Addons</p>
                <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
                    <div className="flex items-center gap-[10px]">
                        <FaStickyNote color="white"/>
                        <p className="text-[15px] leading-[20px] font-normal text-white">Components</p>
                    </div>
                    <FaChevronCircleRight color="white"/>
                </div>
                <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
                    <div className="flex items-center gap-[10px]">
                        <FaWrench color="white"/>
                        <p className="text-[15px] leading-[20px] font-normal text-white">Unilities</p>
                    </div>
                    <FaChevronCircleRight color="white"/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar