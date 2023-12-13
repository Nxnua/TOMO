import React from "react";
import Guide from "../components/home/guideComponent";
import { guide } from "../data";
import { StarRating } from "../components/review/StarRating";
import { useState } from "react";
import Slider from "rc-slider";
// import "./navbar"
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
export const Guides = () => {
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
        <div className="flex mx-auto font-Nunito flex-col ">
            <div className=" mb-12  p-[1vh] h-[10vh] md:static float-left md:min-h-fit min-h-[60vh] ml-0 top-0 w-[70vh]inline-block flex items-center">
                <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mx-auto">
                    <div className="stroke" id="mainNav">
                        <ul>
                            <li>
                                <a href="#">All guides</a>
                            </li>
                            <li>
                                <a href="#">By Business</a>
                            </li>
                            <li>
                                <a href="#">By Travel</a>
                            </li>
                            <li>
                                <a href="#">Most reviewed</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" flex flex-row mx-28">
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
                                {ratingCat.map((item, i) => {
                                    return (
                                        <a
                                            key={"rating_category_item_" + i}
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
                                {activitiesCat.map((item, i) => {
                                    return (
                                        <a
                                            key={"active_cat_item_trips_" + i}
                                            href=""
                                            className=" flex flex-row items-center"
                                        >
                                            <input
                                                type="checkbox"
                                                className=" dark:bg-darkbg w-4 h-4 rounded-sm border-2 bg-orange-100 border-orange-300 mr-2 appearance-none checked:bg-orange-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 "
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
                                {durationCat.map((item, i) => {
                                    return (
                                        <a
                                            key={
                                                "durationCat_cat_item_trips_" +
                                                i
                                            }
                                            href=""
                                            className=" flex flex-row items-center"
                                        >
                                            <input
                                                type="checkbox"
                                                className=" dark:bg-darkbg w-4 h-4 rounded-sm border-2 bg-orange-100 border-orange-300 mr-2 appearance-none checked:bg-orange-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 "
                                            />
                                            <p className="text-sm font-normal ">
                                                {item.duration}
                                            </p>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" grid grid-cols-2 gap-12  ml-28">
                        {guide.map((item, i) => {
                            return <Guide guide={item} />;
                        })}
                        <div>
                            <a
                                href=""
                                className=" w-[80%] flex justify-center items-center ml-[350px]"
                            >
                                <p className=" font-medium ">View more </p>
                                <img src="/images/downarrow.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
