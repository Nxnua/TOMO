import Header from "../components/header";
import { tripList } from "./data";
import TripComponent from "../components/tripComponent";
import { v4 } from "uuid";

export default function Trip() {
    return (
        <div>
            <Header />
            <div className=" mx-28 mt-8">
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
    );
}
