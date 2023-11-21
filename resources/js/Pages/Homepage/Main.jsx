import Footer from "../../components/footer";
import Header from "../../components/header";
import React from "react";
import Guide from "../../components/guideComponent";
import { v4 } from "uuid";
import TripComponent from "../../components/tripComponent";
import SvgComponent from "../../components/Map";
import { guide, tripList } from "../data";
import { Link } from "react-router-dom";
import { Search, SearchCategory } from "../../components/search";

export default function Main() {
    return (
        <div className="this-is-my-class ">
            <Header />
            <div className=" mt-20 h-[30vh] pt-10   px-28 ">
                <SearchCategory/>
            </div>

            <div className="z-20 mx-20 flex justify-center flex-col ">
            <p className=" text-2xl  font-bold mb-12 mt-20"> Guides</p>

                <div className="grid justify-between mx-auto 2xl:grid-cols-3 xl:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:gap-20 md:grid-cols-1 md:mx-auto grid-cols-1">
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
                <Link to="/guides" className=" mt-12">
                    See more{" "}
                </Link>

                <p className=" text-2xl  font-bold mb-12 mt-12"> Trips</p>

                <div className="grid justify-between mx-auto xl:grid-cols-4 md:gap-8 lg:gap-8 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 grid-cols-1">
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
                <Link to="/trips" className=" mt-20">
                    See more
                </Link>
            </div>
            <div className=" mx-28 ">
                <SvgComponent />
            </div>

            <div className=" h-12"></div>
            <Footer />
        </div>
    );
}
