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
                            className=" absolute  h-44 ml-32   "
                        />
                        <img
                            src="/images/Tomo-White.png"
                            alt=""
                            className=" h-20 ml-36 "
                        />
                    </div>
                    <div className="flex flex-row py-12 px-20 justify-between tracking-tight m-0">
                        <div>
                            <p className=" text-xl text-orange font-extrabold flex justify-start mb-2 ">
                                Menu
                            </p>

                            <div className=" flex flex-col font-semibold text-md">
                                {menu.map((item, i) => {
                                    return (
                                        <a
                                            key={item.id}
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
                                        <a
                                            key={item.id}
                                            href={item.link}
                                            className=" mt-2   flex justify-start"
                                        >
                                            {item.title}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        <div>sdgrzsdg</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
