import Footer from "../../components/footer";
import Header from "../../components/header";
import React from "react";
import Guide from "../../components/guideComponent";
import { v4 } from "uuid";
import TripComponent from "../../components/tripComponent";
import SvgComponent from "../../components/Map";
import { guide, tripList } from "../data";
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div className="this-is-my-class">
            <Header />

            <div className=" h-[30vh] bg-white pt-10 mt-40">

                Search

                <form className=" mx-auto w-[900px] relative items-center justify-center">
                    <div className="h-[120px]">
                        <div className="absolute ml-[20px] mt-[20px]">
                            <img src="/images/search.png" />
                        </div>

                        <input
                            type="search "
                            placeholder=" City, landmark"
                            className=" w-full p-4 rounded-full bg-white text-center border-2 "
                        />
                    </div>
                </form>
            </div>

            <div className="z-20 mt-50 mx-28 flex justify-center flex-col ">
                <p className=" text-2xl font-bold mb-12"> Guides</p>


                <div className="  grid grid-cols-3 gap-4">
                    {guide.map((item, i) => {
                        return (
                            <Guide
                                name={item.name}
                                description={item.description}
                                image={item.image}
                                review={item.review}
                                star={item.star}
                                key={v4()}
                            />
                        );
                    })}
                </div>
                <Link to="/guides" className=" mt-20">See more</Link>

                <p className=" text-2xl  font-bold mb-12 mt-20"> Trips</p>

                <div className="  grid  xl:grid-cols-4 md:gap-8 lg:gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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
                <Link to="/trips" className=" mt-20">See more</Link>
            </div>
            <div className=" mx-28 ">
                <SvgComponent />
            </div>

            <div className=" h-12"></div>
            <Footer />
        </div>
    );
}
