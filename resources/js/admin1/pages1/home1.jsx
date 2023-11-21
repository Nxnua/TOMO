import Sidebar from "../components1/Sidebar";
import Navbar from "../components1/Navbar";
import Widget from "../components1/Widget";
import Featured from "../components1/Featured";
import { Link } from "react-router-dom";

const Home1 = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="flex gap-5 p-5">
          <Link to="/admin/users"><Widget type="user" /></Link>
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="px-5 py-[5px]">
          <Featured />
        
        </div>
        <div className="shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] m-5 p-5">
          <div className="font-medium text-[gray] mb-[15px]">Latest Transactions</div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
