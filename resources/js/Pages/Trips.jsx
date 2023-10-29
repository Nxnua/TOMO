import Header from "../components/header";
import { tripList } from "./data";
import TripComponent from "../components/tripComponent";
import { v4 } from "uuid";
import Footer from "../components/footer";
import { GrSearch } from "react-icons/gr";

export default function Trip() {
    const filter = [
        {
            catName: "RATING",
            isChecked: false,
            childCat1: "/images/4andup.png",
            childCat2: "/images/3andup.png",
            childCat3: "/images/2andup.png",
            childCat4: "/images/1andup.png",
        },
        {
            catName: "ACTIVITIES",
            isChecked: false,
            childCat1: "Horseback Riding",
            childCat2: "Hiking",
            childCat3: "Festival",
            childCat4: "Photography",
            childCat5: "Camel Riding",
        },
        {
            catName: "PRICE",
            isChecked: false,
            childCat1: "",
            childCat2: "",
            childCat3: "",
            childCat: "",
        },
        {
            catName: "DURATION",
            isChecked: false,
            childCat1: "Up to 1 day",
            childCat2: "1-2 days",
            childCat3: "3-7 days",
            childCat: "7+ days",
        },
    ];

    const ratingCat = [
        { isChecked: false, stars: "/images/4andup.png" },
        { isChecked: false, stars: "/images/3andup.png" },
        { isChecked: false, stars: "/images/2andup.png" },
        { isChecked: false, stars: "/images/1andup.png" },
    ];
    const activitiesCat = [
        { isChecked: true, activities: "Horseback Riding" },
        { isChecked: false, activities: "Hiking" },
        { isChecked: false, activities: "Festival" },
        { isChecked: false, activities: "Photography" },
        { isChecked: false, activities: "Camel Riding" },
    ];
    const durationCat = [
        { isChecked: false, duration: "Up to 1 day" },
        { isChecked: false, duration: "1-2 days" },
        { isChecked: true, duration: "3-7 days" },
        { isChecked: false, duration: "7+ days" },
    ];
    
    return (
        <div>
            <Header />
            <div className=" mx-28 mt-4 flex justify-start flex-col">
                <div className=" w-100 flex justify-start">
                    Trips &gt; All trips
                </div>
                <div className=" flex flex-row">
                    <div className=" w-1/4 flex flex-col relative">
                        <div id="bar-fixed" className=" mt-4 flex justify-start w-[250px] flex-col top-16 ">
                            <div>
                                <p className=" w-full  border-b-2 flex justify-start">
                                    {" "}
                                    &emsp; RATING
                                </p>
                                <div className=" mt-4 ml-2">
                                    {ratingCat.map((item) => {
                                        return (
                                            <a
                                                key={v4()}
                                                href=""
                                                className=" flex flex-row mt-1 items-center"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className=" w-3 h-3 bg-gray-100 border-gray-300 "
                                                />
                                                <img
                                                    src={item.stars}
                                                    alt=""
                                                    className=" w-20 ml-2"
                                                />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className=" mt-8">
                                <p className=" w-full  border-b-2 flex justify-start">
                                    &emsp; ACTIVITIES
                                </p>
                                <div className=" mt-4 ml-2">
                                    {activitiesCat.map((item) => {
                                        return (
                                            <a
                                                key={v4()}
                                                href=""
                                                className=" flex flex-row items-center"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className=" w-3 h-3  bg-gray-100 border-gray-300 "
                                                />
                                                <p className=" ml-2 text-sm font-normal">
                                                    {item.activities}
                                                </p>
                                            </a>
                                        );
                                    })}
                                </div>
                                <a
                                    href=""
                                    className=" w-[80%] flex justify-center items-center"
                                >
                                    <p className=" font-medium ">View more </p>
                                    <img src="/images/downarrow.png" alt="" />
                                </a>
                            </div>
                            <div className=" mt-8">
                                <p className=" w-full border-b-2 flex justify-start">
                                    &emsp; PRICE
                                </p>
                                <div className=" mt-4 ml-2">
                                    <img src="/images/price.png" alt="" />
                                </div>
                            </div>

                            <div className=" mt-8">
                                <p className=" w-full  border-b-2 flex justify-start">
                                    &emsp; DURATION
                                </p>
                                <div className=" mt-4 ml-2">
                                    {durationCat.map((item) => {
                                        return (
                                            <a
                                                key={v4()}
                                                href=""
                                                className=" flex flex-row items-center"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className=" w-3 h-3 bg-slate-500  border-red-300 active:outline-none  "
                                                />
                                                <p className="ml-2 text-sm font-normal">
                                                    {item.duration}
                                                </p>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-1 mt-4">
                        <div className="flex justify-start  flex-col ">
                            <div className=" flex flex-row items-center mb-4">
                                <input
                                    type="text"
                                    className=" w-[400px] px-4 h-8 text-sm border-2 rounded-3xl outline-gray-300 active:border-gray-300 mr-2 " placeholder="search"
                                />
                                <a href="">
                                    {" "}
                                    <GrSearch className=" text-2xl fill-black50" />
                                </a>
                            </div>
                            <div className=" flex flex-row items-center mb-4">
                                <p className=" text-lg font-bold">
                                    (255 trips)
                                </p>
                                <div className=" flex flex-row items-center bg-gray-200 rounded-md px-2 mx-2">
                                   <p className=" text-sm font-semibold "> Horseback Riding </p>
                                   <img src="/images/clearbutton.png" alt="" className=" w-4 h-4 ml-1" />
                                </div>
                                <div className=" flex flex-row items-center bg-gray-200 rounded-md px-2 mx-2">
                                   <p className=" text-sm font-semibold "> 4.0 and up </p>
                                   <img src="/images/clearbutton.png" alt="" className=" w-4 h-4 ml-1" />
                                </div>
                            </div>
                            <div className=" grid  mb-8 xl:grid-cols-3 gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
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
                                })}
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
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
