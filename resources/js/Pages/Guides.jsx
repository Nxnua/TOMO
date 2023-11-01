import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { guide } from "./data";
import Guide from "../components/guideComponent";
import {v4} from "uuid";
// import "./navbar"

export const Guides = () => {
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
    <Header/>
    <div className="flex justify-center  mx-auto font-Nunito flex-col ">
            {/* <div className="float-left ms-15">
            
            </div> */}
            <div className=" mb-12 mt-16 h-20 md:static float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto w-full flex items-center shadow-lg border-[2px]">
                <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mx-auto">
                <div className="stroke" id="mainNav">
                    <ul>
                    <li><a href="#">All guides</a></li>
                    <li><a href="#">By Business</a></li>
                    <li><a href="#">By Travel</a></li>
                    <li><a href="#">Most reviewed</a></li>
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
                <div>
                <div className=" grid grid-cols-2 gap-12  ml-28">
                    {guide.map((item, i) => {
                        return (
                            <Guide
                                name={item.name}
                                description={item.description}
                                image={item.image}
                                review={item.review}
                                star={item.star}
                                
                            />
                        );
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
                
            </div >
         
            <div className="mt-10">
            <Footer />
            </div>
            
       
        </div>
    );
};
