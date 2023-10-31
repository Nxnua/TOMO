
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
    const imageGallery = [
        { isSelected: true, img: "/images/thumbnail5.png" },
        { isSelected: false, img: "/images/thumbnail1.png" },
        { isSelected: false, img: "/images/thumbnail2.png" },
        { isSelected: false, img: "/images/thumbnail3.png" },
        { isSelected: false, img: "/images/thumbnail4.png" },
    ];
    return (
        <div className=" relative">
            <Header />
            <div className="mx-28 mt-4 flex justify-start flex-col">
                <div className=" w-100 flex justify-start">
                    Trips &gt; All trips &gt; Terelj a day trip
                </div>
                <br />
                <div className="  w-[100%] h-10 bg-[#F6F6F6] flex flex-row items-center justify-between rounded-md border-b-2 border-[#D9D9D9]  ">
                    <div className=" flex flex-row  h-[100%] items-center ">
                        {menuList.map((item, i) => {
                            return (
                                <div
                                    key={v4()}
                                    className={
                                        " text-sm font-semibold  " +
                                        (item.isActive
                                            ? " bg-[#D9D9D9] h-full pt-2"
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

                <div className=" flex lg:flex-row  sm:flex-col mt-8 mx-2 ">
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
                        <div className=" flex justify-start flex-row w-[100%]">
                            <div className=" flex relative flex-col z-0 mr-2">
                                {imageGallery.slice(0, 5).map((item, i) => {
                                    return (
                                        <button
                                            key={v4()}
                                            className={
                                                " z-10  mb-1 rounded-md" +
                                                (item.isSelected
                                                    ? " bg-none"
                                                    : "bg-black opacity-50")
                                            }
                                        >
                                            <img
                                                src={item.img}
                                                alt=""
                                                className={
                                                    "  rounded-md hover:relative w-28 h-16 -z-10"
                                                }
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                            <div className=" flex relative flex-col w-[100%]">
                                {imageGallery.slice(0, 1).map((item, i) => {
                                    return (
                                        <img
                                            src={item.img}
                                            alt=""
                                            className={
                                                "  rounded-md hover:relative w-[100%] -z-10"
                                            }
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className=" mt-4 flex flex-col">
                            {/* overview */}
                            <div className=" flex flex-col">
                                <p className=" text-xl text-start font-extrabold">
                                    Overview
                                </p>
                                <p className=" mt-4 font-medium tracking-tight text-justify">
                                    Welcome to a unique adventure in Mongolia!
                                    Fly to Ulgii city, located in the western
                                    part of the country, where you'll have the
                                    opportunity to witness the ancient tradition
                                    of Eagle Hunting, a practice passed down
                                    through generations. Trek through the
                                    stunning Altai Tavan Bogd mountain range and
                                    immerse yourself in the beauty of Mongolia's
                                    natural landscape. Enjoy a traditional
                                    Mongolian dinner and learn about the
                                    country's rich culture. Conclude your trip
                                    by flying back to Ulaanbaatar with
                                    unforgettable memories of your time in
                                    Mongolia.
                                </p>
                            </div>
                            {/* Itinerary */}
                            <div className="mt-8 flex flex-col">
                                <p className=" ml-1 text-xl text-start font-extrabold">
                                    Itinerary
                                </p>
                                <div className=" mt-4 flex flex-col rounded-lg border-gray-200 border-2 p-4">
                                    <div className=" flex flex-row justify-between items-center pr-2">
                                        <p className=" text-lg text-start">
                                            Day 1: Eagle Hunting Mongolia
                                            Tour-Fly to Ulgii City.
                                        </p>
                                        <img
                                            src="/images/up-arrow.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className=" mt-4 font-medium tracking-tight  text-justify ">
                                        We start on our flight towards the
                                        Mongolian Far West. We fly over the
                                        central lakes and the Western mountains,
                                        then arrive in Ulgii.Olgii is the
                                        capital of the province of Bayan Ulgii,
                                        1636 kilometres (1016,56 miles) from
                                        Ulan Bator and 1710 meters (1,06 mile)
                                        above the sea level. Main people living
                                        in Olgii are Kazakhs, and its atmosphere
                                        is very influenced by Central Asia:
                                        there are many signs written in Arabic.
                                        We will learn about Kazakh culture and
                                        vist the city
                                    </p>
                                    <div className=" flex flex-row mt-2">
                                        <img
                                            src="/images/thumbnail1.png"
                                            alt=""
                                            className=" w-20 rounded-md mr-1"
                                        />
                                        <img
                                            src="/images/thumbnail2.png"
                                            alt=""
                                            className=" w-20 rounded-md mr-1"
                                        />
                                        <img
                                            src="/images/thumbnail3.png"
                                            alt=""
                                            className=" w-20 rounded-md mr-1"
                                        />
                                    </div>
                                </div>
                                <div className=" mt-4 flex flex-col rounded-lg border-gray-200 border-2 p-4">
                                    <div className=" flex flex-row justify-between items-center pr-2">
                                        <p className=" text-lg text-start">
                                            Day 2: Visit the eagle Hunters
                                        </p>
                                        <img
                                            src="/images/up-arrow.png"
                                            alt=""
                                            className=" rotate-180"
                                        />
                                    </div>
                                </div>
                                <div className=" mt-4 flex flex-col rounded-lg border-gray-200 border-2 p-4">
                                    <div className=" flex flex-row justify-between items-center pr-2">
                                        <p className=" text-lg text-start">
                                            Day 3: return flight to Ulaanbaatar.
                                        </p>
                                        <img
                                            src="/images/up-arrow.png"
                                            alt=""
                                            className=" rotate-180"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Inclusions */}
                            <div className=" flex flex-col mt-8">
                                <p className=" ml-1 text-xl text-start font-extrabold">
                                    Inclusions
                                </p>
                                <div className=" grid grid-cols-2 gap-4 mt-4 ">
                                    <div className=" round flex flex-col rounded-lg border-gray-200 border-2 p-4 w-full mr-4 ">
                                        <p className=" text-lg text-start ml-4">
                                            Tour includes
                                        </p>
                                        <ul className=" mt-4 text-start pl-4 text-base font-medium ">
                                            <li className=" list-disc ">
                                                Transfers upon arrival and
                                                departure
                                            </li>
                                            <li className=" list-disc ">
                                                In the countryside, all lodging
                                                will be in ger camps and nomadic
                                                family’s Ger.
                                            </li>
                                            <li className=" list-disc ">
                                                All meals are provided as stated
                                                in the itinerary.
                                            </li>
                                            <li className=" list-disc ">
                                                Park entrance fees
                                            </li>
                                            <li className=" list-disc ">
                                                Horse and Camel ride
                                            </li>
                                        </ul>
                                    </div>
                                    <div className=" round flex flex-col rounded-lg border-gray-200 border-2 p-4 w-full ">
                                        <p className=" text-lg text-start ml-4">
                                            Not includes
                                        </p>
                                        <ul className=" mt-4 text-start pl-4 text-base font-medium ">
                                            <li className=" list-disc ">
                                                Accommodation in a hotel or
                                                hostel in Ulaanbaatar
                                            </li>
                                            <li className=" list-disc ">
                                                Hotel extras, such as telephone
                                                calls, bar bills, and laundry
                                                services
                                            </li>
                                            <li className=" list-disc ">
                                                Travel insurance, medical
                                                insurance
                                            </li>
                                            <li className=" list-disc ">
                                                Visa application fees
                                            </li>
                                            <li className=" list-disc ">
                                                Alcoholic beverages
                                            </li>
                                            <li className=" list-disc ">
                                                Personal expenses such as IDD
                                                call, the internet, laundry,
                                                items of a personal nature
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-[30vw] bg-slate-300 h-70">sakgjlkg</div>
                </div>
            </div>
            <div className=" h-24"></div>

            <Footer />
        </div>
    );
};

