import { StarRating } from "./StarRating";
import { useState } from "react";
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const length = text.length > 300;

    return (
        <p>
            {isReadMore ? text.slice(0, 300) : text}
            {length ? (
                <span
                    onClick={toggleReadMore}
                    className="read-or-hide text-orange cursor-pointer"
                >
                    {isReadMore ? "...read more" : " show less"}
                </span>
            ) : (
                ""
            )}
        </p>
    );
};
const ratingDetailed = [
    { star: 5, amount: 56 },
    { star: 4, amount: 71 },
    { star: 3, amount: 21 },
    { star: 2, amount: 2 },
    { star: 1, amount: 0 },
];

export default function ReviewSection() {
    var sum = 0;
    var average = 0;
    ratingDetailed.map((item) => {
        return (sum += item.amount);
    });
    ratingDetailed.map((item) => {
        return (average += item.star * item.amount);
    });
    const totalRating = sum;
    const averageRating = (average / totalRating).toFixed(1);

    return (
        <div className="flex flex-col">
            <div className=" flex flex-row  items-center">
                <div className=" flex-1 flex-col justify-center border-r-2">
                    <p className=" text-2xl font-extrabold text-black dark:text-gray-300">
                        {averageRating}
                    </p>
                    <div className="flex justify-center ">
                        <StarRating totalStars={5} rating={4.2} width={4} />
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                        {totalRating} global ratings
                    </p>
                    <button className="  mt-2 text-white rounded-lg bg-orange py-2 px-4 text-xs">
                        Write a Review
                    </button>
                </div>
                <RatingDetailed totalRating={totalRating} />
            </div>
            <div className="  justify-start w-full  mt-6  ">
                <div className="flex  justify-start text-sm w-auto  border-b-2 pb-3  md:items-center md:gap-[4vw] ">
                    <div className="stroke   pl-8  " id="">
                        <ul className=" flex gap-6 flex-row ">
                            <li className=" underline decoration-orange">
                                <a href="#">All reviews(150)</a>
                            </li>
                            <li>
                                <a href="#">Reviews with photos(48)</a>
                            </li>
                            <li>
                                <a href="#">Reviews with videos(2)</a>
                            </li>
                            <li>
                                <a href="#">Recommended</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <UserReview />
            <UserReview />
            
        </div>
    );
}

function RatingDetailed({ totalRating }) {
    return (
        <div className=" w-[70%] ms-4 ">
            {ratingDetailed.map((item, i) => {
                const percentage = ((item.amount / totalRating) * 100).toFixed(
                    0
                );
                const fill = {
                    width: percentage + "%",
                };
                return (
                    <div className={`flex items-center mb-2 w-[90%]`}>
                        <div className=" w-16 text-sm text-black75 text-start dark:text-gray-400">
                            {/* <StarRating
                                totalStars={5}
                                rating={item.star}
                                width={4}
                                margin={1}
                            /> */}
                            {item.star} {item.star !== 1 ? "stars" : "star"}
                        </div>
                        <div className="w-full h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div
                                className={`h-4 bg-orange rounded`}
                                style={fill}
                            ></div>
                        </div>
                        <span className="text-sm w-10 h-2 text-black50 dark:text-gray-400">
                            {percentage}%
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

function UserReview() {
    return (
        <div className=" mt-4 mb-4">
            

            <div className=" mx-10 mt-4">
                <article className=" flex flex-row">
                    <div className=" flex-1 ">
                        <div className="flex flex-col mb-6 ">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="/images/avatar/tomo-1.png"
                                alt=""
                            />
                            <p className=" text-start">CuteTomo123</p>
                        </div>
                        
                        <div className="">
                            <StarRating totalRating={5} rating={4} width={4} />
                        </div>
                        
                    </div>
                    <div className=" w-[80%] text-justify flex flex-col">
                        <div className="flex items-start mb-2">
                            <div className="pe-4">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Reviewed:{" "}
                                    <time datetime="2023-11-15 19:00">
                                        November 15, 2023
                                    </time>
                                </p>

                                <h4 className="text-lg font-bold dark:text-white">
                                    Great Experience
                                </h4>
                            </div>
                        </div>
                        <p className="mb-2 font-medium text-black leading-6 dark:text-gray-400">
                            <ReadMore>
                                Mongolia for 9 days as incredible. Nurka proved
                                to be a well organised, trusted and a dedicated
                                guide. She speaks very good English and talks
                                with enthusiasm about Mongolia, food, cultured
                                its history as well as providing insight into
                                Mongolia customs. We enjoyed tea parties, games
                                and also got to mix with the locals who were
                                friendly and kind people who showed us their
                                herds and how to make traditional cake. Part of
                                the activities was hiking for 5 days where she
                                led us into touristic sites and wonderful
                                sceneries surrounded by beautiful lakes and
                                panorama views, which thoroughly enjoyed and
                                took many photos!. She was knowledgeable about
                                all the routes we took provided us with a packed
                                and varied programmes, helped organise our yaks
                                and the tents were well equipped with good gear
                                to keep us dry during rainy days. it was an
                                amazing and unforgettable experience! She also
                                had an incredible team who supported her all
                                along including skilful drivers who drove us
                                through unmarked roads in such a vast place, and
                                Boogy the cook, who was enthusiastic and
                                passionate about his cooking sckill he made us
                                delicious food that we enjoyed. All in all I
                                deeply thank Nurka for this wonderful trip were
                                we felt safe and welcome.Our happiness was
                                always her top priority and I highly recommend
                                Nurka as a good and well experienced guide also
                                I think the August month was a best choice to
                                visit Mongolia.
                            </ReadMore>
                        </p>
                        <div className=" flex flex-row">
                            <img src="/images/review1.jpg" alt="" className=" w-20 rounded-md mr-1" />
                            <img src="/images/review2.jpg" alt="" className=" w-20 rounded-md mr-1" />
                            <img src="/images/review3.jpg" alt="" className=" w-20 rounded-md mr-1" />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
