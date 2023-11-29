import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { FaThList } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex-1 min-h-screen bg-slate-500 border-r-[0.5px] border-r-[rgb(230,227,227)] border-solid">
      <div className="h-[50px] flex items-center justify-center">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <img src="/images/tomo-new.png" alt="" className="w-[13vw] h-[12vh] hover:opacity-80 " />
        </Link>
      </div>
      <hr className="h-0 border-[0.5px] border-solid border-[rbg(230,227,227)]"/>
      <div className="pl-2.5">
        <ul className="m-0 p-0">
          <p className=" text-[10px] font-lg text-[#fff] mt-[15px] mb-[5px] ">MAIN</p>
          <Link to="/admin"><li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
            <MdDashboard color="white"/> 
            <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Dashboard</span>
          </li></Link>
          <p className="text-[10px] font-lg text-[#fff] mt-[15px] mb-[5px]">LISTS</p>
          <Link to="/admin/users" >
            <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
              <FaUser color="white"/>
              <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Users</span>
            </li>
          </Link>
          <Link to="/admin/travel" >
            <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
              <MdTravelExplore color="white"/>
              <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Travel</span>
            </li>
          </Link>
          <Link to="/admin/orders" >
          <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
          <MdBorderColor color="white"/>
            <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Orders</span>
          </li>
          </Link>
          <Link to="/admin/logs">
          <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
          <FaThList color="white"/>
            <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Logs</span>
          </li></Link>
          <p className="text-[10px] font-lg text-[#fff] mt-[15px] mb-[5px]">USER</p>
          <Link to="/admin/profile">
          <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
          <CgProfile color="white"/>
            <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Profile</span>
          </li>
          </Link>
          <Link to="/">
          <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
          <CiLogout color="white"/>
            <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Logout</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
