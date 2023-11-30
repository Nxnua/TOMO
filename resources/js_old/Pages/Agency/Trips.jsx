import Header from "../../components/header";
import { tripList } from "../data";
import TripComponent from "../../components/tripComponent";
import { v4 } from "uuid";
import Footer from "../../components/footer";
import { GrSearch } from "react-icons/gr";
import BreadCrumb from "../../components/breadcrumb";
import { Search } from "../../components/search";
import { StarRating } from "../../components/review/StarRating";
import { useState } from "react";
import Fbfaq from "../../components/faq/Fbfaq";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const RangeSlider = () => {
    const [range, setRange] = useState([80, 1500]);

    const handleRangeChange = (newRange) => {
        setRange(newRange);
    };

    return (
        <div className=" px-4">
            <Slider
                range={true}
                min={0}
                max={3500}
                step={1}
                value={range}
                onChange={handleRangeChange}
            />
            <p>
                Price: ${range[0]} - ${range[1]}
            </p>
        </div>
    );
};

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
        { isChecked: false, rating: 4 },
        { isChecked: false, rating: 3 },
        { isChecked: false, rating: 2 },
        { isChecked: false, rating: 1 },
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
            <div className=" h-20"></div>
            <BreadCrumb />
            <div className=" mx-28 mt-4 flex justify-start flex-col">
                <div className=" flex flex-row">
                    <div className=" w-1/4 flex flex-col relative">
                        <div
                            id="bar-fixed"
                            className=" overflow-y-auto mt-4 flex justify-start w-[250px] flex-col top-16 "
                        >
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
                                                className=" flex flex-row mt-1 items-center dark:opacity-80"
                                            >
                                                {/* <input
                                                    type="checkbox"
                                                    className=" w-3 h-3 bg-gray-100 border-gray-300 mr-1 "
                                                /> */}

                                                <StarRating
                                                    totalStars={5}
                                                    rating={item.rating}
                                                    width={4}
                                                />
                                                <p className=" ml-1  text-sm leading-3 font-medium">
                                                    {" "}
                                                    & up
                                                </p>
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
                                                    className=" dark:bg-darkbg w-4 h-4 rounded-sm border-2 bg-gray-100 border-gray-300 mr-2  "
                                                />
                                                <p className="text-sm font-normal">
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
                                <RangeSlider />
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
                                                    className=" dark:bg-darkbg w-4 h-4 rounded-sm border-2 bg-gray-100 border-gray-300 mr-2 "
                                                />
                                                <p className="text-sm font-normal">
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
                            <div className="  items-center mb-4">
                                <Search />
                            </div>
                            <div className=" flex flex-row items-center mb-4">
                                <p className=" text-lg font-bold">
                                    (255 trips)
                                </p>
                                <div className=" flex flex-row items-center dark:bg-darknav bg-gray-200 rounded-md px-2 mx-2">
                                    <p className=" text-sm font-semibold ">
                                        {" "}
                                        Horseback Riding{" "}
                                    </p>
                                    <img
                                        src="/images/clearbutton.png"
                                        alt=""
                                        className=" w-4 h-4 ml-1"
                                    />
                                </div>
                                <div className=" flex flex-row items-center dark:bg-darknav bg-gray-200 rounded-md px-2 mx-2">
                                    <p className=" text-sm font-semibold ">
                                        {" "}
                                        4.0 and up{" "}
                                    </p>
                                    <img
                                        src="/images/clearbutton.png"
                                        alt=""
                                        className=" w-4 h-4 ml-1"
                                    />
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
            <Fbfaq />
        </div>
    );
}
