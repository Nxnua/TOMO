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
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="w-[100px] h-[100px] object-cover rounded-[50%]"
              />
              <div className="details">
                <h1 className="text-[#555] mb-2.5">Jane Doe</h1>
                <div className="text-sm mb-2.5">
                  <span className="font-[bold] text-[gray] mr-[5px]">Email:</span>
                  <span className="font-light">janedoe@gmail.com</span>
                </div>
                <div className="text-sm mb-2.5">
                  <span className="font-[bold] text-[gray] mr-[5px]">Phone:</span>
                  <span className="font-light">+1 2345 67 89</span>
                </div>
                <div className="text-sm mb-2.5">
                  <span className="font-[bold] text-[gray] mr-[5px]">Address:</span>
                  <span className="font-light">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="text-sm mb-2.5">
                  <span className="font-[bold] text-[gray] mr-[5px]">Country:</span>
                  <span className="font-light">USA</span>
                </div>
              </div>
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
