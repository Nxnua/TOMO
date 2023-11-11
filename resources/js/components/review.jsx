export default function Review({ rating, reviews, stars }) {
    return (
        <div className=" w-24 flex flex-row text-orange items-center dark:opacity-80 ">
            <div className="flex  border-[3px] w-8 h-7 rounded-md border-orange items-center justify-center text-sm  font-bold   ">
                {rating}
            </div>
            <div className=" flex flex-col w-20 justify-center">
                <div className="flex justify-center">
                    <img src="/images/stars.png" alt="" className=" w-12" />
                </div>
                <div className=" text-xs font-medium ">
                    {reviews} reviews
                </div>
            </div>
        </div>
    );
}
