export default function Footer() {
    const menu = [
        { id: 1, title: "Trips", link: "" },
        { id: 2, title: "Guides", link: "" },
        { id: 3, title: "Agencies", link: "" },
        { id: 4, title: "Reviews", link: "" },
    ];
    const tripPlanner = [
        { id: 1, title: "Plan a trip", link: "" },
        { id: 2, title: "Travel Budget", link: "" },
        { id: 3, title: "Flights", link: "" },
    ];
    return (
        <div className=" bg-black75 flex flex-col ">
            <div className=" h-72 ">
                <div className=" h-full grid grid-cols-3">
                    <div className=" relative flex items-center ">
                        <img
                            src="/images/tomo-T.png"
                            alt=""
                            className=" absolute  h-52 ml-36   "
                        />
                        <img
                            src="/images/Tomo-White.png"
                            alt=""
                            className=" h-20 ml-44 "
                        />
                    </div>
                    <div className="flex flex-row p-12 justify-between ">
                        <div>
                            <p className=" text-2xl text-orange font-extrabold">
                                Menu
                            </p>

                            <div className=" flex flex-col font-semibold ">
                                {menu.map((item, i) => {
                                    return (
                                        <a
                                            key={item.id}
                                            href={item.link}
                                            className=" mt-2 text-white"
                                        >
                                            {" "}
                                            {item.title}{" "}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <p className=" text-2xl text-orange font-extrabold ">
                                Trip Planner
                            </p>
                            <div className=" flex flex-col font-semibold">
                                {tripPlanner.map((item, i) => {
                                    return (
                                        <a key={item.id} href={item.link}>
                                            {" "}
                                            {item.title}{" "}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        <div>sdgrzsdg</div>
                    </div>
                    <hr></hr>
                </div>
                <div className=" bg-[#393535] h-24 "></div>
            </div>
        </div>
    );
}
