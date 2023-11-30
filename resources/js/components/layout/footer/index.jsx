import { Link } from "react-router-dom";
export default function Footer() {
    const menu = [
        { id: 1, title: "Trips", link: "/trips" },
        { id: 2, title: "Guides", link: "/guides" },
        { id: 3, title: "Agencies", link: "" },
        { id: 4, title: "Reviews", link: "" },
    ];
    const tripPlanner = [
        { id: 1, title: "Plan a trip", link: "/planyourtrip" },
        { id: 2, title: "Travel Budget", link: "" },
        { id: 3, title: "Flights", link: "" },
        { id: 3, title: "Profile", link: "/profile" },
    ];
    return (
        <div className=" bg-black75 dark:bg-darknav flex flex-col">
            <div className=" lg:h-60 h-full">
                <div className=" h-full grid lg:grid-cols-3 sm:grid-cols-1  text-gray-200 font-semibold text-md  ">
                    <div className=" relative flex items-center justify-center sm:justify-start  ">
                        <img
                            src="/images/tomo-T.png"
                            alt=""
                            className="hidden md:visible absolute md:ml-16 sh-44 lg:ml-32   "
                        />
                        <img
                            src="/images/Tomo-White.png"
                            alt=""
                            className=" h-16 md:h-20 lg:ml-36 md:ml-16"
                        />
                    </div>
                    <div className="flex flex-row py-2 sm:py-12 px-10 sm:px-20 lg:justify-between md:justify-around justify-between tracking-tight m-0">
                        <div>
                            <p className=" text-xl text-orange font-extrabold flex justify-start mb-2 ">
                                Menu
                            </p>

                            <div className=" flex flex-col font-semibold text-md">
                                {menu.map((item, i) => {
                                    return (
                                        <a
                                            key={"menu_item_" + i}
                                            href={item.link}
                                            className=" mt-2  flex justify-start"
                                        >
                                            {item.title}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <p className=" text-xl text-orange font-extrabold flex justify-start mb-2 ">
                                Trip Planner
                            </p>
                            <div className=" flex flex-col ">
                                {tripPlanner.map((item, i) => {
                                    return (
                                        <Link
                                            to={item.link}
                                            key={"menu_trip_lanner_item_" + i}
                                            className=" mt-2   flex justify-start"
                                        >
                                            {item.title}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col mb-4">
                        <div className=" p-4 sm:p-12 flex  flex-col ">
                            <p className=" text-xl text-orange font-extrabold flex justify-center mb-2 ">
                                Connect with us
                            </p>
                            <div className=" flex flex-row justify-center">
                                <img
                                    src="/images/phone.svg"
                                    alt=""
                                    className=" w-[20px] mr-1"
                                />
                                <p>+976 99991234</p>
                            </div>
                        </div>
                        <div className=" flex flex-row px-12 sm:px-24  justify-evenly">
                            <a href="">
                                <img
                                    src="/images/facebook.svg"
                                    alt=""
                                    className=" "
                                />
                            </a>
                            <a href="">
                                {" "}
                                <img src="/images/instagram.svg" alt="" />
                            </a>
                            <a href="">
                                <img src="/images/twitter.svg" alt="" />
                            </a>
                            <a href="">
                                <img src="/images/mail.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center bg-black75 ">
                    <hr className=" w-[80vw] border-[#616161] border-[1px]  " />
                </div>
                <div className=" bg-[#393535] h-12 flex flex-row justify-between px-2 sm:px-20 text-gray-200 text-xs items-center font-medium dark:bg-[#1E202E]  ">
                    <div className=" flex flex-col sm:flex-row">
                        <a href="" className=" sm:mr-10 text-start">
                            TERMS & CONDITIONS
                        </a>
                        <a href="" className=" sm:mr-10 text-start">
                            PRIVACY POLICY
                        </a>
                    </div>
                    <div>
                        &#169; 2023 <strong>TOMO</strong>. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}
