import { StarRating } from "./StarRating";

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
        <div className="flex flex-row">
            <div className=" w-1/3">
            <div className=" flex-1 flex-col justify-center">
                <div className="flex items-center mb-2">
                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        {averageRating} out of 5
                    </p>
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {totalRating} global ratings
                </p>
            </div>
            <div className="">
                {ratingDetailed.map((item, i) => {
                    const percentage = (
                        (item.amount / totalRating) *
                        100
                    ).toFixed(0);
                    const fill = {
                        width: percentage + "%",
                    };
                    return (
                        <div className={`flex items-center mt-4 w-[70%]`}>
                            <div>
                                <StarRating
                                    totalStars={5}
                                    rating={item.star}
                                    width={2}
                                 
                                />
                            </div>
                            <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div
                                    className={`h-5 bg-orange rounded`}
                                    style={fill}
                                ></div>
                            </div>
                            <span className="text-sm h-2 font-medium text-gray-500 dark:text-gray-400">
                                {percentage}%
                            </span>
                        </div>
                    );
                })}
            </div>
            </div>
        </div>
    );
}

const ratingDetailed = [
    { star: 5, amount: 56 },
    { star: 4, amount: 71 },
    { star: 3, amount: 21 },
    { star: 2, amount: 2 },
    { star: 1, amount: 0 },
];
