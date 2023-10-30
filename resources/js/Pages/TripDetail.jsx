import Header from "../components/header";
import { v4 } from "uuid";
import Review from "../components/review";
import { tripList } from "./data";
import Footer from "../components/footer";

export const TripDetail = () => {
    const menuList = [
        { isActive: true, menu: "Photos", link: "" },
        { isActive: false, menu: "Itinerary", link: "" },
        { isActive: false, menu: "Inclusions", link: "" },
        { isActive: false, menu: "Review", link: "" },
    ];
    return (
        <div>
            <Header />
            <div className="mx-28 mt-4 flex justify-start flex-col">
                <div className=" w-100 flex justify-start">
                    Trips &gt; All trips &gt; Terelj a day trip
                </div>
                <br />
                <div className=" w-[100%] h-8 bg-[#F6F6F6] flex flex-row items-center justify-between rounded-md border-b-2 border-[#D9D9D9]  ">
                    <div className=" flex flex-row  h-[100%] items-center ">
                        {menuList.map((item, i) => {
                            return (
                                <div
                                    key={v4()}
                                    className={
                                        " text-sm font-semibold  " +
                                        (item.isActive
                                            ? " bg-[#D9D9D9] h-full pt-1"
                                            : "bg-[#F6F6F6]") +
                                        " px-6 rounded-[3px]  "
                                    }
                                >
                                    {item.menu}
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <img
                            src="/images/favorite-gray.png"
                            alt=""
                            className=" h-7 pr-4"
                        />
                    </div>
                </div>

                {/* body */}

                <div className=" flex lg:flex-row sm:flex-col mt-4 mx-2 ">
                    <div className=" flex-1 flex-col mr-10">
                        <div className=" flex flex-row  justify-between mb-2">
                            <div className=" text-left text-xl w-[65%] leading-5 mr-4">
                                A day trip to Terelj National Park and Statue of
                                Chinggis Khan
                            </div>
                            <div className=" ">
                                <Review reviews="250" rating="4.7" />
                            </div>
                        </div>
                        <div>
                            <img
                                src="/images/photos.png"
                                alt=""
                                className=" w-[100%]"
                            />
                        </div>
                    </div>
                    <div className=" w-[30vw] mx-2 bg-slate-300 h-52">
                        sakgjlkg
                    </div>
                </div>
            </div>
            <div className=" h-24"></div>
            <Footer />
        </div>
    );
};
