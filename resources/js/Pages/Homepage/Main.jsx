import Footer from "../../components/footer";
import Header from "../../components/header";
import React from "react";
import Guide from "../../components/guideComponent";
import { v4 } from "uuid";
import TripComponent from "../../components/tripComponent";
import SvgComponent from "./Map";
import { guide, tripList } from "../data";

export default function Main() {
    return (
        <div className="this-is-my-class">
            <Header />
            <div className="z-20 my-10 mx-28 flex justify-center flex-col ">
                <p className=" text-2xl  font-bold mb-12"> Guides</p>

                <div className="  grid grid-cols-3 gap-6">
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

                <p className=" text-2xl  font-bold mb-12 mt-20"> Trips</p>

                <div className="  grid  xl:grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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
            <div className=" mx-28 ">
                <SvgComponent />
            </div>

            <Footer />
        </div>
    );
}
