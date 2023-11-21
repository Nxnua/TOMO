import Header from "../components/header";
import { v4 } from "uuid";
import Review from "../components/review/review";
import ReviewSection from "../components/review/ReviewSection";
import { tripList, tripDays } from "./data";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { Accordion, Datepicker } from "flowbite-react";
import BreadCrumb from "../components/breadcrumb";
import TripComponent from "../components/tripComponent";
import SvgComponent from "../components/Map";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// const customTheme: CustomFlowbiteTheme["accordion"] = {
//     color: {
//         primary: "bg-red-500 hover:bg-red-600",
//     },
// };
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const length = text.length > 500;

    return (
        <p>
            {isReadMore ? text.slice(0, 500) : text}
            {length ? (
                <span
                    onClick={toggleReadMore}
                    className="read-or-hide text-orange cursor-pointer"
                >
                    {isReadMore ? "...read more" : " show less"}
                </span>
            ) : (
                ""
            )}
        </p>
    );
};
export const GuideDetail = () => {
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".section");
            const scrollPosition = window.scrollY;
            sections.forEach((section) => {
                const { top, bottom } = section.getBoundingClientRect();
                if (top <= 120 && bottom >= 120) {
                    setActiveLink(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="">
            <Header />
            <div className=" pt-20"></div>
            <BreadCrumb />
            <div
                className={` mx-28  z-10   h-10 dark:bg-darknav bg-[#F6F6F6] flex flex-row items-center justify-between rounded-md border-b-2 border-[#D9D9D9] dark:border-gray-600 overflow-x-hidden top-[8.5vh] sticky `}
            >
                <div className="  flex flex-row  items-center ">
                    {menuList.map((item, i) => {
                        return (
                            <a
                                href={item.link}
                                key={"some_item_" + i}
                                className={
                                    "text-xs sm:text-sm font-semibold px-2 sm:px-6   " +
                                    (item.isActive
                                        ? " font-extrabold "
                                        : "bg-[#F6F6F6]") +
                                    "rounded-[3px]  " +
                                    (activeLink === item.link.replace("#", "")
                                        ? "menu-active"
                                        : "")
                                }
                            >
                                {item.menu}
                            </a>
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

            <div className=" flex flex-col">
                <div className=" mx-2 sm:mx-14 lg:mx-28 flex justify-start flex-col ">
                    <br />

                    {/* body */}

                    <div className=" flex flex-col mt-8 mx-2 ">
                        <div className=" flex lg:flex-row flex-col">
                            <div
                                id="photos"
                                className=" flex-1 flex-col sm:mr-10"
                            >
                                <div className="section flex flex-row  justify-between mb-2">
                                    <div className=" text-left text-xl w-[65%] leading-5 mr-4">
                                        {guideData.title}
                                    </div>
                                    <div className=" ">
                                        <Review reviews="250" rating="4.7" />
                                    </div>
                                </div>
                                <div className=" flex justify-start flex-row w-[100%]">
                                    <div className=" flex relative flex-col z-0 mr-2">
                                        {imageGallery
                                            .slice(0, 5)
                                            .map((item, i) => {
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
                                    <div className="section flex relative flex-col w-[100%]">
                                        {imageGallery
                                            .slice(0, 1)
                                            .map((item, i) => {
                                                return (
                                                    <img
                                                        src={item.img}
                                                        alt=""
                                                        className={
                                                            "  rounded-md hover:relative w-[100%] "
                                                        }
                                                    />
                                                );
                                            })}
                                    </div>
                                </div>
                                <div className="section flex flex-col">
                                    <p
                                        id="overview"
                                        className=" text-xl text-start font-extrabold mt-4"
                                    >
                                        Overview
                                    </p>
                                    <p className=" mt-4 font-medium tracking-tight text-justify ">
                                        {guideData.overview}
                                    </p>
                                </div>
                            </div>
                            <div className=" lg:w-[30vw] sm:w-[100%] ">
                                <div className=" flex flex-col text-sm tracking-tight sm:mt-2  ">
                                    <div className=" flex justify-end items-center  sm:justify-start">
                                        <img
                                            src="/images/agency-logo.png"
                                            alt=""
                                            className=" w-8 "
                                        />
                                        <p className=" text-lg">
                                            Mongol Tour Agency
                                        </p>
                                    </div>
                                    <div>
                                        <Info />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex lg:flex-row flex-col">
                            <div className="flex-1 lg:mr-10 ">
                                <div className="mt-4 flex flex-col">
                                    {/* Itinerary */}
                                    <div
                                        id="itinerary"
                                        className="section mt-8 flex flex-col"
                                    >
                                        <p className=" ml-1 text-xl text-start font-extrabold">
                                            Itinerary
                                        </p>
                                        <div className=" mt-4">
                                            <DayInfo />
                                        </div>
                                    </div>

                                    {/* Inclusions */}
                                    <div
                                        id="inclusions"
                                        className="section flex flex-col mt-8"
                                    >
                                        <p className=" ml-1 text-xl text-start font-extrabold">
                                            Inclusions
                                        </p>
                                        <Inclusion />
                                    </div>
                                    {/* packing list */}
                                    <div className=" flex flex-col mt-8">
                                        <p className=" ml-1 text-xl text-start font-extrabold">
                                            Packing List
                                        </p>
                                        <PackingList />
                                    </div>
                                    <div
                                        id="review"
                                        className="section mt-8 flex flex-col"
                                    >
                                        <p className=" ml-1 text-xl text-start font-extrabold">
                                            Review
                                        </p>
                                        <div className=" h-screen  mt-4">
                                            <ReviewSection />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="bar-fixed"
                                className=" lg:w-[30vw] sm:w-[100%] "
                            >
                                <div>
                                    <CheckAvailability />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" h-screen "></div>
                <div className="ml-8  grid  xl:grid-cols-4 md:gap-8 lg:gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {tripList.map((item, i) => {
                        return (
                            <TripComponent
                                title={item.title}
                                location={item.location}
                                image={item.image}
                                review={item.review}
                                rating={item.rating}
                                discount={item.discount}
                                duration={item.duration}
                                price={item.price}
                                key={v4()}
                            />
                        );
                        <div className="relative flex items-center mt-10 ml-72 mr-72 ">
                            <MdChevronLeft
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideLeft}
                                size={40}
                            />
                            <div
                                id="slider"
                                className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                            >
                                {TripComponent.map((item) => (
                                    <img
                                        className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                                        src={item.img}
                                        alt=""
                                    />
                                ))}
                            </div>
                            <MdChevronRight
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideRight}
                                size={40}
                            />
                        </div>;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

const DayInfo = () => {
    return (
        <Accordion className=" border-2 ">
            {guideData.dailyData.map((item, i) => {
                return (
                    <Accordion.Panel>
                        <Accordion.Title className=" focus:ring-0 ">
                            <p className=" text-base sm:text-md font-bold text-start tracking-tighter">
                                {item.number} {item.title}
                            </p>
                        </Accordion.Title>
                        <Accordion.Content>
                            <div>
                                <p className=" font-medium tracking-tight leading-5  text-justify ">
                                    <ReadMore>{item.description}</ReadMore>
                                </p>
                                <div className=" flex flex-row mt-2">
                                    <img
                                        // src="/images/thumbnail1.png"
                                        src={
                                            "https://www.toursmongolia.com" +
                                            item.images
                                        }
                                        alt=""
                                        className=" w-auto rounded-md mr-1"
                                    />
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>
                );
            })}
        </Accordion>
    );
};

function Info() {
    return (
        <div className=" w-[100%] rounded-lg  border-2  mt-4 font-semibold text-xs">
            <div className="   rounded-xl h-[20vw] border-[1px]  drop-shadow-[_0px_15px_15px_rgba(0,0,0,0.05)] flex flex-row">
                <div className=" w-[35%]  flex flex-col justify-between    ">
                    <div className=" rounded-lg border-[1px] ">
                        <img
                            src="images/profile3.jpg"
                            alt=""
                            className=" w-[180px] h-[150px] rounded-lg "
                        />
                    </div>
                    <a href="">Zoloo</a>
                    <div className="info  w-[160px] h-[150px] ">
                        <div className=" flex flex-col ml-5  md:items-start  gap-3 ">
                            <div className=""></div>
                            <a href="#">Tomhlnd95@gmail.</a>
                            <a href="#">asdf asd</a>
                            <a href="#">Age-32</a>
                            <a href="#"></a>
                        </div>
                    </div>
                </div>
                <div className=" flex-1 ">
                    <div className=" flex h-16 justify-center items-center">
                        <div className="rating  justify-center flex flex-row  ml-48 mt-5 ">
                            <div className="star  flex flex-col justify-center">
                                <div>
                                    <Review reviews="122" rating="4.6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="descrption h-[50%] flex flex-row ">
                        <div className="m-4 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ad quod corporis eum amet distinctio est atque
                            illo voluptatem aut accusantium.Loremlo Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Totam
                            molestiae pariatur architecto quos tempore atque
                            explicabo debitis reprehenderit, nesciunt, porro in
                            assumenda ratione numquam a inventore aspernatur
                            qui, saepe adipisci hic laborum rem ullam. Fugit
                            facere, at minus rerum ex veritatis neque laborum
                            illum officia veniam aperiam quisquam deleniti
                            impedit aliquid minima temporibus amet quos magnam.
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-start ml-4 mt-2">WORK EXPERIENCE</div>
            <div className=" grid grid-col-2 ">
                <div className=" flex flex-row items-center mx-4 my-2">
                    <img
                        src="/images/duration-icon.svg"
                        className=" h-8"
                        alt=""
                    />
                    <p className=" ml-2 flexs">
                        {" "}
                        {guideData.dailyData.length}Year Teacher, {""}
                        {guideData.dailyData.length} Year Guide{" "}
                    </p>
                </div>
                {/* <div className=" flex flex-row items-center mx-4 my-2">
                    <img
                        src="/images/groupsize-icon.svg"
                        className=" h-6"
                        alt=""
                    />
                    <p className=" ml-2">16 (max)</p>
                </div> */}
            </div>
            <hr className=" border-[1px]" />
            <div className=" flex justify-start ml-4 mt-2">HELPING</div>
            <div className=" grid grid-cols-5 mx-4 my-2 items-center">
                {inclusions.map((item, i) => {
                    return (
                        <div className=" mr-4 flex flex-col justify-center">
                            <img src={item.icon} className=" h-6" alt="" />
                            <p className=" ">{item.name}</p>
                        </div>
                    );
                })}
            </div>
            <hr className=" border-[1px]" />
            <div className=" flex flex-col">
                <div className=" flex justify-start ml-4 mt-2">STAY</div>
                <div className=" flex flex-col mb-4 mx-4">
                    <div className=" flex flex-row justify-between mt-1">
                        <div className="flex flex-row items-center">
                            <img
                                src="/images/stay-icon.svg"
                                alt=""
                                className=" mr-2"
                            />
                            <p>Selenge </p>
                        </div>
                        <p> 2 nights</p>
                    </div>
                    <div className=" flex flex-row justify-between mt-1">
                        <div className="flex flex-row items-center">
                            <img
                                src="/images/stay-icon.svg"
                                alt=""
                                className=" mr-2"
                            />
                            <p>Selenge </p>
                        </div>
                        <p> 4 days and 3 nights</p>
                    </div>
                    <div className=" flex flex-row justify-between mt-1">
                        <div className=" flex flex-row items-center">
                            <img
                                src="/images/stay-icon.svg"
                                alt=""
                                className=" mr-2"
                            />
                            <p>Selenge </p>
                        </div>
                        <p> 2 nights</p>
                    </div>
                </div>
            </div>
            <hr className=" border-[1px]" />
            <div className=" flex justify-start ml-4 mt-2">LANGUAGE</div>
            <div className=" flex flex-col">
                <div className=" flex flex-row mx-4 my-2 items-center">
                    <div className=" mr-4 flex flex-col justify-center">
                        <img
                            src="/images/flagmo.png"
                            className="h-8 w-8 "
                            alt=""
                        />
                        <p>MGL</p>
                    </div>

                    <div className=" mr-4 flex flex-col justify-center">
                        <img
                            src="/images/flagko.png"
                            className=" h-8 w-8"
                            alt=""
                        />
                        <p>KOR</p>
                    </div>
                    <div className=" mr-4 flex flex-col justify-center">
                        <img
                            src="/images/flagen.png"
                            className=" h-8 w-8"
                            alt=""
                        />
                        <p>ENG</p>
                    </div>
                    <div className=" mr-4 flex flex-col justify-center">
                        <img
                            src="/images/falgch.png"
                            className=" h-8 w-8"
                            alt=""
                        />
                        <p>CHINA</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CheckAvailability() {
    return (
        <div>
            <Datepicker title=" start date" />
            <Datepicker title=" start date" />
            <Datepicker title=" start date" />
        </div>
    );
}

const menuList = [
    { isActive: true, menu: "Photos", link: "#photos" },
    { isActive: false, menu: "Itinerary", link: "#itinerary" },
    { isActive: false, menu: "Inclusions", link: "#inclusions" },
    { isActive: false, menu: "Review", link: "#review" },
];
const imageGallery = [
    { isSelected: true, img: "/images/thumbnail5.png" },
    { isSelected: false, img: "/images/thumbnail1.png" },
    { isSelected: false, img: "/images/thumbnail2.png" },
    { isSelected: false, img: "/images/thumbnail3.png" },
    { isSelected: false, img: "/images/thumbnail4.png" },
];

function PackingList() {
    return (
        <div className="  mt-4 ">
            <div className=" round flex flex-col rounded-lg border-gray-200 dark:border-gray-700 border-2 p-4 w-full mr-4 ">
                <p className=" text-lg text-start ml-4">Packing list </p>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    <ul className=" mt-4 text-start pl-4 text-base font-medium ">
                        <li className=" list-disc ">Backpack or soft bag</li>
                        <li className=" list-disc ">Waterproof bag cover</li>
                        <li className=" list-disc ">Daypack</li>
                        <li className=" list-disc ">Headlamp/flashlight</li>
                        <li className=" list-disc ">Spare batteries/bulb</li>
                    </ul>
                    <ul className=" mt-4 text-start pl-4 text-base font-medium ">
                        <li className=" list-disc ">Waterproof hiking boots</li>
                        <li className=" list-disc ">
                            Waterproof jacket with hood
                        </li>
                        <li className=" list-disc ">
                            Fleece jacket or wool jumper
                        </li>
                        <li className=" list-disc ">Cotton t-shirts</li>
                        <li className=" list-disc ">Long sleeve shirts</li>
                    </ul>
                    <ul className=" mt-4 text-start pl-4 text-base font-medium ">
                        <li className=" list-disc ">Lightweight trousers</li>
                        <li className=" list-disc ">Shorts</li>
                        <li className=" list-disc ">
                            Resealing/Ziploc plastic bags
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
    );
}

function Inclusion() {
    return (
        <div className=" grid lg:grid-cols-2 gap-4 mt-4 sm:grid-cols-1">
            <div className=" round flex flex-col rounded-lg border-gray-200 dark:border-gray-700 border-2 p-4 w-full mr-4 ">
                <p className=" text-lg text-start ml-4">Tour includes</p>
                <ul className=" mt-4 text-start pl-4 text-base font-medium ">
                    <li className=" list-disc ">
                        Transfers upon arrival and departure
                    </li>
                    <li className=" list-disc ">
                        In the countryside, all lodging will be in ger camps and
                        nomadic family’s Ger.
                    </li>
                    iol
                    <li className=" list-disc ">
                        All meals are provided as stated in the itinerary.
                    </li>
                    <li className=" list-disc ">Park entrance fees</li>
                    <li className=" list-disc ">Horse and Camel ride</li>
                </ul>
            </div>
            <div className=" round flex flex-col rounded-lg border-gray-200 border-2 dark:border-gray-700 p-4 w-full ">
                <p className=" text-lg text-start ml-4">Not includes</p>
                <ul className=" mt-4 text-start pl-4 text-base font-medium ">
                    <li className=" list-disc ">
                        Accommodation in a hotel or hostel in Ulaanbaatar
                    </li>
                    <li className=" list-disc ">
                        Hotel extras, such as telephone calls, bar bills, and
                        laundry services
                    </li>
                    <li className=" list-disc ">
                        Travel insurance, medical insurance
                    </li>
                    <li className=" list-disc ">Visa application fees</li>
                    <li className=" list-disc ">Alcoholic beverages</li>
                    <li className=" list-disc ">
                        Personal expenses such as IDD call, the internet,
                        laundry, items of a personal nature
                    </li>
                </ul>
            </div>
        </div>
    );
}

const guideData = {
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
            images: ["/uploads/Golden eagle festival tour west mongolia.jpg"],
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

const inclusions = [
    { name: "Meal", icon: "/images/meal-icon.svg" },
    { name: "Flight", icon: "/images/flight-icon.svg" },
    { name: "Transport", icon: "/images/transport-icon.svg" },
    { name: "Accomodation", icon: "/images/accomodation-icon.svg" },
    { name: "Entry fees", icon: "/images/entryfees-icon.svg" },
];
const slideLeft = () => {
    var slider = document.getElementById("slider");
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
};

const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
};
