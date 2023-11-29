import { UserReview } from "../components/review/ReviewSection";
import Header from "../components/main/header";
import Footer from "../components/main/footer";
import BreadCrumb from "../components/breadcrumb";
export default function Reviews() {
    return (
        <div className="">
            <Header />
            <div className=" pt-20"></div>
            <BreadCrumb />
            <div className=" mt-12 mx-28 grid grid-cols-2 gap-4 overflow-hidden ">
                <div class="  pt-8 relative w-30 h-10 sm:after:content-[''] sm:after:absolute sm:after:w-[1px] sm:after:min-h-[500vh] sm:after:bg-black50 sm:after:right-[-1rem]"></div>
                <div class="relative w-30 h-10 lg:after:content-[''] lg:after:absolute lg:after:w-[1px] lg:after:min-h-[500vh] lg:after:bg-black50 lg:after:right-[-1rem]"></div>
                <UserReview />
                <UserReview />
                <UserReview />
                <UserReview />
                <UserReview />
                <UserReview />
            </div>
            <div className=" mt-20">
                <Footer />
            </div>
        </div>
    );
}
