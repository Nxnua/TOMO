import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineClockCircle } from "react-icons/ai";
import Review from "../review";
import { Link } from "react-router-dom";
export default function TripComponent({ tripData }) {
    const {
        title,
        image,
        location,
        duration,
        review,
        rating,
        price,
        discount,
    } = tripData;
    const isDiscountNull = discount === null ? true : false;
    return (
        <div className=" duration-200 h-[420px] md:w-[300px] lg:w-[310px] xl:w-[320px] border-2 dark:border-neutral-400 border-neutral-100 rounded-2xl bg-white dark:bg-darknav  flex flex-col drop-shadow-[_0px_9px_34px_rgba(0,0,0,0.08)]">
            <div className=" relative h-[45%] rounded-t-2xl rounded-b-md">
                <img src={image} alt="" className=" h-[180px] w-full " />
                <div
                    className={
                        " absolute flex justify-center left-3 top-4 rounded-2xl bg-[#32B837] w-16 h-6 drop-shadow-[_0px_0px_5px_rgba(0,0,0,0.25)] text-white text-xs " +
                        (isDiscountNull ? " hidden" : "visible") +
                        " items-center"
                    }
                >
                    {discount}% off
                </div>
                <div className=" absolute flex justify-center right-3 top-2 w-7 items-center">
                    <img
                        src="/images/favorite1.png"
                        alt=""
                        className=" hover:opacity-50"
                    />
                </div>
            </div>
            <div className=" mx-4 my-1 h-12 flex justify-center text-lg leading-5 items-center font-bold">
                <p>{title}</p>
            </div>
            <div className=" h-8 mb-2 mx-4 flex flex-row items-center ">
                <span className=" text-black50 text-xl mr-2">
                    <FaLocationDot />
                </span>
                <div className=" leading-4 text-black75 dark:text-gray-400 font-medium text-sm">
                    {location}
                </div>
            </div>

            <div className=" flex flex-row justify-center items-center">
                <span className=" mr-2 text-xl font-bold text-orange">
                    <AiOutlineClockCircle />
                </span>
                <div className=" text-sm font-semibold">{duration}</div>
            </div>
            <div className=" flex flex-row justify-between mx-4 mt-4">
                <div>
                    <Review reviews={review} rating={rating} />
                </div>
                <div className=" flex items-center">
                    <p
                        className={
                            "text-xs " +
                            (isDiscountNull ? " hidden" : "visible") +
                            ""
                        }
                    >
                        <del> ${price + (price / 100) * discount}</del>
                    </p>
                    <p className=" ml-1 text-lg">${price}</p>
                </div>
            </div>
            <div className=" transition ease-in-out delay-50  hover:scale-105  mt-5 drop-shadow-[_0px_4px_4px_rgba(0,0,0,0.2)] ">
                <Link to={"/trip/" + tripData.slug}>
                    <button className="mx-auto text-sm text-white bg-orange dark:border-orange-400 dark:bg-[#383C51] w-[90%] border py-1 rounded-lg font-normal tracking-tight">
                        Book now
                    </button>
                </Link>
            </div>
        </div>
    );
}
