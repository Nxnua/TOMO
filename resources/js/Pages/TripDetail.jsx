import Header from "../components/header";
import { v4 } from "uuid";
import Review from "../components/review";
import { tripList, tripDays } from "./data";
import Footer from "../components/footer";
import { useState } from "react";
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

    const tripData = {
        title: "Golden Eagle Festival and Altai Mountain 2024 Tour",
        overview:
            "Traveling through Mongol Altai mountains - the country’s largest and highest mountain range with glacier topped peaks over 3000 meters, crystal clear mountain rivers, and glistening streams were to inhabit the world’s largest wild sheep - argali, ibex, snow leopard, wolves, eagles, and many other bird species. Then heading to Ulgii town, enjoy Golden Eagle Festival, experience ancient eagle hunting tradition and Kazakh culture. \n\nThe name Altai Tavan Bogd (Five Holy Peaks of  Altai) was given to a  cluster of 5 dramatic peaks that tower this extensive Mongol Altai mountain range. The climate is extreme with very little vegetation, giving the surrounding landscape a barren appearance. Trekking session leads us to the holy 5 peaks where the highest is Khuiten peak at 4374m. We trek through the snowy mountains, cross the longest glaciers of the country.\nThe official opening ceremony begins with a parade of the hunters on horseback with their eagles. The most elaborate clothing and accessories are rewarded with the highest points. Later in the day, the eagles are judged for their speed and agility. The second day of the competition is packed with action-eagles fly from the cliff’s edge to chase bait dragged by their human hunting partners, and the men demonstrate their courage in an ancient test of horsemanship.",
        locations: [
            "Altai Tavan Bogd National Park",
            "3 days horse riding",
            "Relax at the beautiful lakes",
            "Eagle hunting family",
            "Golden Eagle Festival",
        ],
        price: ["2 PAX", "3530$", "3-4 PAX", "3310$", "5-8 PAX", "3135$"],
        dailyData: [
            {
                number: "DAY 1.",
                title: "(11 Sep) Arrival in Ulaanbaatar",
                description:
                    "Transfer to the hotel. Unpack and rest in the hotel. Short city tour with Gandan Monastery, the National Museum of Mongolia, which represents Mongolian Culture starting from Stone Age to the 21st century and Buddhism, and Sukhbaatar Square (also known as Chingis Khaan Square). In Gandan you can take local prayers, monks, the biggest standing indoor Buddha statue and temples own figure. Prepare for the trip. (B/L/D)",
                images: [
                    "/uploads/Ulaanbaatar (Sukhbaatar Square & Gandan Monastery).jpg",
                ],
            },
            {
                number: "DAY 2.",
                title: "(12 Sep) Fly to Western Mongolia",
                description:
                    "Take a flight to Khovd. Then dive to Ulgii town - the central town of Bayan-Ulgii province where 90% of the population is Kazakhs who have their own language and unique culture. Kazakhs are famous for their Eagle hunting game tradition. Meet our vehicle and the local team. Visit the local museum to know more about Bayan-Ulgii province and its majority ethnic group - Kazakhs. Drive to Sagsay River to meet eagle hunter's family. In the evening, we come back to Ulgii town to stay overnight in a local hotel or ger camp (B/L/D)",
                images: [
                    "/uploads/Golden eagle festival tour west mongolia.jpg",
                ],
            },
            {
                number: "DAY 3.",
                title: "(13 Sep) Arrive at Shiveet Khairkhan Mountain",
                description:
                    "Today we head to Altai MountaiWe are entering Altai high mountain area and arrive at Shiveet Khairkhan mountain- the closest place to the Altai peaks reachable by car. We are traveling at the altitude of 2500-3000 m. We will visit a local Kazakh family to explore their lives as well as rent horses for our further trip. Here you can meet the local people and take portraits and the daily life of Kazakhs. They have a bigger Ger dwelling than the Khalkha majority group and they are characteristic. Prepare our luggage for the next 3 day-trekking trips to Altai peaks. (B/L/D)",
                images: [
                    "/uploads/Oigor-(Golden_Eagle_Festival_and_Altai_Mountain_2021_Tour).jpg",
                ],
            },
            {
                number: "DAY 4.",
                title: "(14 Sep) Altai Tavan Bogd Peak",
                description:
                    "Leave our vehicle and load our luggage to the horses and trek toward the Altai Tavan Bogd peaks of 4100-4374m. You can take photos of a horse or camel caravan which suites the Western Mongolian landscape, rocky and show-capped mountains. Arrive at the foot of the high peaks. (B/L/D)",
                images: ["/uploads/photo tour to Altai Mountains Mongolia.jpg"],
            },
            {
                number: "DAY 6.",
                title: "(15 Sep) Arrive at Tsagaan Gol - White River",
                description:
                    "Head to Tsagaan Gol to change our horses or relax if you trek. Tsagaan Gol, or White river, owes its color to glacial milk, the suspended powder of rock eroded by the high glaciers. Here you have a chance to photograph both landscape and people. Tent near nomad family. Talking with nomads and sharing our experiences. (B/L/D)",
                images: [
                    "/uploads/Tsagaan_Gol-(Golden_Eagle_Festival_and_Altai_Mountain_2021_Tour).jpg",
                ],
            },
            {
                number: "DAY 7.",
                title: "(16 Sep) Back to Ulgii town",
                description:
                    "Drive back to Ulgii town for the Golden Eagle Festival. On the way, we will take plenty of Landscape photos and families. During this time most of the Kazakh people moved to the winter house. Arrive in Ulgii and stay overnight at a local hotel or ger camp. (B/L/D)",
                images: [
                    "/uploads/Golden eagle festival and mongolia altai mountains photographic expedition.jpg",
                ],
            },
            {
                number: "DAY 8-9.",
                title: "(17-18 Sep) The Golden Eagle Festival",
                description:
                    "The first day of the Sagsai Golden Eagle Festival is to experience the culture and lifestyle of nomadic eagle hunters. Kazakh eagle hunters in Mongolia have been living in both pastoral and eagle falconry living ways. Pastoral living is summer time, and eagle falconry living in the wintertime. This kind of lifestyle makes them true nomadic eagle falconers and heritage keepers in this modern world. Today we will learn all about their life and culture. The procedure of assembly of Kazak Ger (yurt) and the Migration of nomadic families will be the highlights of the first day of the festival. (B/L/D)",
                images: [],
            },
            {
                number: "DAY 10.",
                title: "(19 Sep) Fly back to Ulaanbaatar",
                description:
                    "Take a flight back to Ulaanbaatar and relax at the hotel. Option to go shopping for souvenirs and cashmere products. Farewell dinner together. (B/L/D)",
                images: ["/uploads/Ulaanbaatar_Night.jpg"],
            },
            {
                number: "DAY 11.",
                title: "(20 Sep) Departure Day",
                description:
                    "Transfer to Chinggis Khaan International Airport or Train station and depart Mongolia. (B)",
                images: [],
            },
        ],
        inclusions:
            "Accommodation: Hotel****, local hotel or ger camp, tented camping\nGuiding and interpreting service\nFull board meals\nTransport: 4x4 vehicle or minivan\nDomestic round-trip flights (UB-Ulgii-UB)\nFestival tax\nEntrance fees to protected areas and national parks\nMuseums and cultural performance\nCamping equipment\nHorseback riding /optional/",
        notIncludes:
            "Accommodation: Hotel****, local hotel or ger camp, tented camping\nGuiding and interpreting service\nFull board meals\nTransport: 4x4 vehicle or minivan\nDomestic round-trip flights (UB-Ulgii-UB)\nFestival tax\nEntrance fees to protected areas and national parks\nMuseums and cultural performance\nCamping equipment\nHorseback riding /optional/",
    };

    return (
        <div className=" relative mt-20">
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
                                    {tripData.overview}
                                </p>
                            </div>
                            {/* Itinerary */}
                            <div className="mt-8 flex flex-col">
                                <p className=" ml-1 text-xl text-start font-extrabold">
                                    Itinerary
                                </p>

                                {tripData.dailyData.map((item, i) => {
                                    return (
                                        <div className=" mt-4 flex flex-col rounded-lg border-gray-200 border-2 p-4">
                                            <div className=" flex flex-row justify-between items-center pr-2">
                                                <p className=" text-lg text-start">
                                                    {item.number} : {item.title}
                                                </p>
                                                <button>
                                                    <img
                                                        src="/images/up-arrow.png"
                                                        alt=""
                                                        className={
                                                            "" +
                                                            (item.isActive
                                                                ? " rotate-0"
                                                                : "rotate-180") +
                                                            ""
                                                        }
                                                    />
                                                </button>
                                            </div>
                                            <div
                                                className={
                                                    " " +
                                                    (item.isActive
                                                        ? "visible"
                                                        : "visible") +
                                                    ""
                                                }
                                            >
                                                <p className=" mt-4 font-medium tracking-tight  text-justify ">
                                                    {item.description}
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
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Inclusions */}
                            <div className=" flex flex-col mt-8">
                                <p className=" ml-1 text-xl text-start font-extrabold">
                                    Inclusions
                                </p>
                                <div className=" grid lg:grid-cols-2 gap-4 mt-4 sm:grid-cols-1">
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
                            {/* packing list */}
                            <div className=" flex flex-col mt-8">
                                <p className=" ml-1 text-xl text-start font-extrabold">
                                    Packing List
                                </p>
                                <div className="  mt-4 ">
                                    <div className=" round flex flex-col rounded-lg border-gray-200 border-2 p-4 w-full mr-4 ">
                                        <p className=" text-lg text-start ml-4">
                                            Packing list{" "}
                                        </p>
                                        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                                            <ul className=" mt-4 text-start pl-4 text-base font-medium ">
                                                <li className=" list-disc ">
                                                    Backpack or soft bag
                                                </li>
                                                <li className=" list-disc ">
                                                    Waterproof bag cover
                                                </li>
                                                <li className=" list-disc ">
                                                    Daypack
                                                </li>
                                                <li className=" list-disc ">
                                                    Headlamp/flashlight
                                                </li>
                                                <li className=" list-disc ">
                                                    Spare batteries/bulb
                                                </li>
                                            </ul>
                                            <ul className=" mt-4 text-start pl-4 text-base font-medium ">
                                                <li className=" list-disc ">
                                                    Waterproof hiking boots
                                                </li>
                                                <li className=" list-disc ">
                                                    Waterproof jacket with hood
                                                </li>
                                                <li className=" list-disc ">
                                                    Fleece jacket or wool jumper
                                                </li>
                                                <li className=" list-disc ">
                                                    Cotton t-shirts
                                                </li>
                                                <li className=" list-disc ">
                                                    Long sleeve shirts
                                                </li>
                                            </ul>
                                            <ul className=" mt-4 text-start pl-4 text-base font-medium ">
                                                <li className=" list-disc ">
                                                    Lightweight trousers
                                                </li>
                                                <li className=" list-disc ">
                                                    Shorts
                                                </li>
                                                <li className=" list-disc ">
                                                    Resealing/Ziploc plastic
                                                    bags
                                                </li>
                                                <li className=" list-disc ">
                                                    Insurance confirmation copy
                                                </li>
                                                <li className=" list-disc ">
                                                    Emergency contact number
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-[30vw] ">
                        <div className=" flex flex-col ">
                            <div className=" flex justify-end items-center ">
                                <img
                                    src="/images/agency-logo.png"
                                    alt=""
                                    className=" w-8 "
                                />
                                <p className=" text-lg"> Mongol Tour Agency</p>
                            </div>
                            <div className=" w-[100%] rounded-lg border-gray-200 border-2 h-64 mt-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-24"></div>

            <Footer />
        </div>
    );
};
