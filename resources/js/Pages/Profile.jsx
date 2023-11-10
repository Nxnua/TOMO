import Header from "../components/header";
import Footer from "../components/footer";
import profile from "../components/profileComponent";
import Profiles from "../components/profileComponent";
import ProfileEditPage from "../components/profileComponent";
export const Profile = () => {
    return (
        <div>
            <div className="border-[1px]">
                <Header />
            </div>
            
            <div className="flex flex-row mx-12 mt-2 w-11/12 justify-center shadow-md h-28">
                <div className="grid grid-cols-3 gap-2     ">
                    <a href="#">
                        <img
                            src="images/profile4.jpg "
                            alt=""
                            width={100}
                            height={100}
                            className="flex  border-[2px]  rounded-full h-24 mt-1 "
                        />
                    </a>
                    <div className="name flex flex-row items-end mb-4">
                        Tom Riddle
                    </div>
                </div>

                <div className=" flex flex-row  items-end ml-[880px] mb-4 ">
                    <div className="edit flex  border-[2px] w-16 h-7 rounded-md border-slate-600  items-center justify-center text-sm text-orange font-bold shadow-lg ">
                        <button>
                            Edit
                        </button>
                    </div>
                    <div className="flex flex-col w-20 justify-center ">
                        <button>
                            <img 
                            src="./images/arrow.png" 
                            alt=""
                            className="border-[2px] w-7 h-7 rounded-md border-slate-600 shadow-lg"
                            />
                        </button>
                        
                    </div>
                </div>
            </div>
            
            <div className=" ml-14  justify-start mt-3 h-12    w-full   ">
                <div className="flex mt-2 justify-start md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mx-auto">
                <div className="stroke" id="mainNav">
                    <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Notication</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="#">Review</a></li>
                    </ul>
                </div>

                </div>
            </div>

            <div className="info   flex justify-start bg-slate-100 ">
                <div className="info w-96 h-[20vw] flex flex-col justify-between rounded-md bg-white mt-5 ml-10 mb-5 ">
                    <div className=" h-[400px] bg-white flex flex-col  md:items-start md:ml-8 gap-1 shadow-md">
                        <div className="text-orange text-left mt-4 ">Info</div>
                        <div>
                            
                        </div>
                        <a  img src="images/flagen.png"  className=" h-5 w-5" alt="" href="#"> Usa</a>
                        <a img="" href="#">Tomhlnd95@gmail.com</a>
                        <a href="#"></a>
                        <a href="#">Review</a>
                        <a href="#">Write some details about yourself</a>
                        
                    </div>
                </div>


                <div className="post w-[990px] h-[20vw] flex flex-col justify-between rounded-md bg-white mt-5 ml-10 mb-5 shadow-md">
                    bio 
                </div>          
            </div>

            <div className="mt-10">
                <div>
                    <ProfileEditPage/>
                </div>
                <Footer />
            </div>
        </div>
    );
};
