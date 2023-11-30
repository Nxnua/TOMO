import { UserReview } from "../components/review/ReviewSection";

export default function Reviews() {
    return (
        <div className=" mt-12 mx-28 grid grid-cols-2 gap-4 overflow-hidden ">
            <div className="  pt-8 relative w-30 h-10 sm:after:content-[''] sm:after:absolute sm:after:w-[1px] sm:after:min-h-[500vh] sm:after:bg-black50 sm:after:right-[-1rem]"></div>
            <div className="relative w-30 h-10 lg:after:content-[''] lg:after:absolute lg:after:w-[1px] lg:after:min-h-[500vh] lg:after:bg-black50 lg:after:right-[-1rem]"></div>
            <UserReview />
            <UserReview />
            <UserReview />
            <UserReview />
            <UserReview />
            <UserReview />
        </div>
    );
}
