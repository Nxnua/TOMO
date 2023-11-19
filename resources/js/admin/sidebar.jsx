import React from "react";
import { FaTachometerAlt } from "react-icons/fa";

const Sidebar = () =>{
    return(
        <div className="bg-slate-600 h-screen px-[25px]">
            <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#ededed]/[0.3]">
                <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">Admin panel</h1>
            </div>
            <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#ededed]/[0.3]">
                <FaTachometerAlt color="white"/>
                <p className="text-white">Dashboard</p>
            </div>
        </div>
    );
}

export default Sidebar