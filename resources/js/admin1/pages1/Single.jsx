import Sidebar from "../components1/Sidebar";
import Navbar from "../components1/Navbar";

const Single = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="flex gap-5 p-5">
          <div className="flex-1 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] relative p-5 webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47)">
            <div className="absolute text-xs text-[#7451f8] bg-[#7551f818] cursor-pointer p-[5px] rounded-[0px_0px_0px_5px] right-0 top-0">Edit</div>
            <h1 className="text-base text-[lightgray] mb-5">Information</h1>
            <div className="flex gap-5">

            </div>
          </div>
        </div>
        <div className="shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] mx-5 my-2.5 p-5 webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47)">
        <h1 className="text-base text-[lightgray] mb-5">Last Transactions</h1>
        </div>
      </div>
    </div>
  );
};

export default Single;
