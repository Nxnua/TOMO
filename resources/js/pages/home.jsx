import { Link } from "react-router-dom";
import SvgComponent from "../components/Map";
import { GuideComponent, TripComponent } from "../components/home";
import { tripList } from "../data";
import { useEffect, useState } from "react";
import axios from "axios";
export default function HomePage() {
    const [guides, setGuides] = useState([]);
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        fetchGuides();
        fetchTrips();
    }, []);

    const fetchGuides = () => {
        axios
            .get(`/api/guides?offset=0&limit=6`)
            .then(({ data }) => {
                if (data.status === "success") {
                    setGuides([...guides, ...data.result]);
                } else {
                    alert("Интернэт холболтоо шалгана уу!");
                }
            })
            .catch((e) => {
                alert("Интернэт холболтоо шалгана уу!");
            });
        return;
    };

    const fetchTrips = () => {
        axios
            .get(`/api/trips?offset=0&limit=8`)
            .then(({ data }) => {
                if (data.status === "success") {
                    setTrips(data.result);
                } else {
                    alert("Интернэт холболтоо шалгана уу!");
                }
            })
            .catch((e) => {
                alert("Интернэт холболтоо шалгана уу!");
            });
        return;
    };
    return (
        <>
            <div className="z-20 mx-20 flex justify-center flex-col ">
                <p className=" text-2xl  font-bold mb-12 "> Guides</p>

                <div className="grid justify-between mx-auto 2xl:grid-cols-3 xl:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:gap-20 md:grid-cols-1 md:mx-auto grid-cols-1">
                    {guides.map((item, i) => {
                        return (
                            <GuideComponent
                                guide={item}
                                key={"home_guide_view_" + i}
                            />
                        );
                    })}
                </div>
                <Link to="/guides" className=" mt-10">
                    See more...{" "}
                </Link>

                <p className=" text-2xl  font-bold mb-12 mt-20"> Trips</p>

                <div className="grid justify-between mx-auto xl:grid-cols-4 md:gap-8 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 grid-cols-1">
                    {trips.map((item, i) => {
                        return (
                            <TripComponent
                                key={"home_trips_view_" + i}
                                tripData={item}
                            />
                        );
                    })}
                </div>
                <Link to="/trips" className=" mt-10">
                    See more...
                </Link>
            </div>
            <div className=" mx-28 mt-20 ">
                <SvgComponent />
            </div>

            <div className=" h-12"></div>
        </>
    );
}
