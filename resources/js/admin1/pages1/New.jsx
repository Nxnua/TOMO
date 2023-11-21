import Sidebar from "../components1/Sidebar";
import Navbar from "../components1/Navbar";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] flex m-5 p-2.5 webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47)">
          <h1 className="text-[lightgray] text-xl">{title}</h1>
        </div>
        <div className="shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] flex m-5 p-2.5 webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47)">
          <div className=" flex-1 text-center">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-[50%]"
            />
          </div>
          <div className="flex-[2]">
            <form>
              <div className="w-2/5t">
                <label className="flex items-center gap-2.5" htmlFor="file">
                  Image: 
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="w-2/5" key={input.id}>
                  <label className="flex items-center gap-2.5">{input.label}</label>
                  <input className="w-full p-[5px] border-b-[gray] border-[none] border-b border-solid" type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button className="w-[150px] bg-[teal] text-[white] font-[bold] cursor-pointer mt-2.5 p-2.5 border-[none]">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
