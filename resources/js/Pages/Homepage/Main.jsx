import Footer from "../../components/footer";
import Header from "../../components/header";
import React from "react";
import Guide from "../../components/guideComponent";
import { v4 } from "uuid";
import TripComponent from "../../components/tripComponent";

export default function Main() {
    const guide = [
        {
            id: 1,
            name: "Zoloo",
            description:
                "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id felis turpis. Integer sit amet nibh non ligula vehicula pulvinar sed eget neque. Proin aliquet tincidunt lectus. In tempor, metus eu vestibulum fermentum, ipsum libero tristique sapien, eget efficitur mauris lorem nec eros. ",
            image: "/images/car.png",
            review: "47 view",
            star: "4.5",
        },
        {
            id: 2,
            name: "Zulaa",
            description:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
            image: "/images/car.png",
            review: "9 view",
            star: "2.1",
        },
        {
            id: 3,
            name: "Zolboo",
            description:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
            image: "/images/google.png",
            review: "10 view",
            star: "1.5",
        },
        {
            id: 4,
            name: "Uyanga",
            image: "/images/car.png",
            description:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
            review: "47 view",
            star: "*",
        },
    ];
    const tripList = [
        {
            id: 1,
            title: "Overnight Semi-Gobi Tour",
            location:
                "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id felis turpis. Integer sit amet nibh non ligula vehicula pulvinar sed eget neque. Proin aliquet tincidunt lectus. In tempor, metus eu vestibulum fermentum, ipsum libero tristique sapien, eget efficitur mauris lorem nec eros. ",
            image: "/images/semi-gobi.png",
            review: "47 view",
            star: "4.5",
        },
        {
            id: 2,
            title: "A day trip to Terelj National Park and Statue of Chinggis Khan",
            location:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
                image: "/images/terelj.png",
            review: "9 view",
            star: "2.1",
        },
        {
            id: 3,
            title: "Zolboo",
            location:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
                image: "/images/manzushir.png",
            review: "10 view",
            star: "1.5",
        },
        {
            id: 4,
            title: "Uyanga",
            image: "/images/manzushir.png",
            location:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
            review: "47 view",
            star: "*",
        },
        {
            id: 4,
            title: "Uyanga",
            image: "/images/semi-gobi.png",
            location:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
    
            review: "47 view",
            star: "*",
        },
        {
            id: 4,
            title: "Uyanga",
            image: "/images/terelj.png",
            location:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
    
            review: "47 view",
            star: "*",
        },
        {
            id: 4,
            title: "Uyanga",
            image: "/images/semi-gobi.png",
            location:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
    
            review: "47 view",
            star: "*",
        },
        {
            id: 4,
            title: "Uyanga",
            image: "/images/semi-gobi.png",
            location:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
    
            review: "47 view",
            star: "*",
        },
    
    ];
    return (
        <div>
            <Header />
            <div className=" my-10 mx-28 flex justify-center flex-col ">
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

                <div className="  grid grid-cols-4 gap-6">
                    {tripList.map((item, i) => {
                        return (
                            <TripComponent
                                title={item.title}
                                location={item.location}
                                image={item.image}
                                review={item.review}
                                star={item.star}
                                key={v4()}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
