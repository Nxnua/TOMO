
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex-1 min-h-screen bg-slate-500 border-r-[0.5px] border-r-[rgb(230,227,227)] border-solid">
      <div className="h-[50px] flex items-center justify-center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="text-xl font-[bold] text-[#ff9539]">SOTOMO</span>
        </Link>
      </div>
      <hr className="h-0 border-[0.5px] border-solid border-[rbg(230,227,227)]"/>
      <div className="pl-2.5">
        <ul className="m-0 p-0">
          <p className=" text-[10px] font-[bold] text-[#fff] mt-[15px] mb-[5px] ">MAIN</p>
          <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
            
            <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Dashboard</span>
          </li>
          <p className="text-[10px] font-[bold] text-[#fff] mt-[15px] mb-[5px]">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
             
              <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Users</span>
            </li>
          </Link>
          <Link to="/travel" style={{ textDecoration: "none" }}>
            <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
             
              <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Travel</span>
            </li>
          </Link>
          <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
            
            <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Orders</span>
          </li>
          <p className="text-[10px] font-[bold] text-[#fff] mt-[15px] mb-[5px]">SERVICE</p>
          <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
           
            <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Logs</span>
          </li>
          <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
            
            <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Settings</span>
          </li>
          <p className="text-[10px] font-[bold] text-[#fff] mt-[15px] mb-[5px]">USER</p>
          <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
           
            <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Profile</span>
          </li>
          <li className="flex items-center cursor-pointer p-[5px] hover:bg-[#ff9539]">
          
            <span className="text-[13px] font-semibold text-[#fff] ml-2.5">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
