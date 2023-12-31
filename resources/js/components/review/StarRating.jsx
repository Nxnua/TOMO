import React, { useState } from "react";

export const StarRating = ({ totalStars, rating, width, margin }) => {
    const renderStar = (index) => {
        const starValue = index + 1;

        if (starValue - 0.2 <= rating) {
            return <StarFull width={width} margin={margin} />;
        } else if (rating >= starValue - 0.6) {
            return <StarHalf width={width} margin={margin} />;
        } else {
            return <StarEmpty width={width} margin={margin} />;
        }
    };
    return (
        <div className=" flex flex-row">
            {[...Array(totalStars)].map((_, index) => {
                return <span key={index}>{renderStar(index)}</span>;
            })}
        </div>
    );
};

export const StarRatingEditable = ({ totalStars, initialRating, onRate }) => {
    const [rating, setRating] = useState(initialRating || 0);

    const handleMouseOver = (hoveredRating) => {
        setRating(hoveredRating);
    };

    const handleMouseLeave = () => {
        setRating(initialRating || 0);
    };

    const handleClick = (selectedRating) => {
        setRating(selectedRating);
        onRate(selectedRating);
    };

    return (
        <div className=" flex flex-row">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        onMouseOver={() => handleMouseOver(starValue)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(starValue)}
                    >
                        {starValue <= rating ? <StarFull /> : <StarEmpty />}
                    </span>
                );
            })}
        </div>
    );
};

function StarFull({ width, margin }) {
    return (
        <div>
            <svg
                className={`w-${width} text-orange ml-${margin} dark:text-white`}
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.59085 3.09827C8.65755 3.15268 8.70773 3.22619 8.73532 3.30988C8.75657 3.39355 8.75471 3.48182 8.72997 3.56443C8.70522 3.64704 8.6586 3.7206 8.59551 3.77656L6.7911 5.60671L7.228 8.20553C7.2436 8.29131 7.23543 8.37997 7.20446 8.46104C7.1735 8.54211 7.12102 8.61222 7.05324 8.66307C6.97827 8.7199 6.88801 8.75034 6.79546 8.75C6.72506 8.75024 6.65581 8.73132 6.59449 8.69509L4.36627 7.46889L2.12932 8.69052C2.05756 8.73036 1.97663 8.74847 1.89559 8.74281C1.81456 8.73715 1.73663 8.70795 1.67056 8.65849C1.60278 8.60764 1.55031 8.53754 1.51934 8.45646C1.48837 8.37539 1.4802 8.28673 1.4958 8.20095L1.93271 5.60214L0.128288 3.77199C0.0721276 3.7133 0.0322879 3.6397 0.0130449 3.55909C-0.00619807 3.47849 -0.00411794 3.39391 0.0190621 3.31445C0.0443851 3.23314 0.0909664 3.16088 0.15352 3.10589C0.216073 3.05089 0.292094 3.01536 0.372955 3.00333L2.85895 2.61899L3.97306 0.258101C4.00883 0.180745 4.06469 0.115506 4.13423 0.0698584C4.20378 0.0242106 4.28419 0 4.36627 0C4.44835 0 4.52876 0.0242106 4.59831 0.0698584C4.66785 0.115506 4.72371 0.180745 4.75949 0.258101L5.87359 2.62357L8.35959 3.00333C8.44382 3.01087 8.52416 3.04385 8.59085 3.09827Z"
                    fill="#E46A12"
                />
            </svg>
        </div>
    );
}
function StarEmpty({ width, margin }) {
    return (
        <div>
            <svg
                className={`w-${width} text-orange ml-${margin} dark:text-white`}
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.73532 3.30988C8.70773 3.22619 8.65755 3.15268 8.59085 3.09827C8.52416 3.04385 8.44382 3.01087 8.35959 3.00333L5.87359 2.62357L4.75949 0.258101C4.72371 0.180745 4.66785 0.115506 4.59831 0.0698584C4.52876 0.0242106 4.44835 0 4.36627 0C4.28419 0 4.20378 0.0242106 4.13423 0.0698584C4.06469 0.115506 4.00883 0.180745 3.97306 0.258101L2.85895 2.61899L0.372955 3.00333C0.292094 3.01536 0.216073 3.05089 0.15352 3.10589C0.0909664 3.16088 0.0443851 3.23314 0.0190621 3.31445C-0.00411794 3.39391 -0.00619807 3.47849 0.0130449 3.55909C0.0322879 3.6397 0.0721276 3.7133 0.128288 3.77199L1.93271 5.60214L1.4958 8.20095C1.4802 8.28673 1.48837 8.37539 1.51934 8.45646C1.55031 8.53754 1.60278 8.60764 1.67056 8.65849C1.73663 8.70795 1.81456 8.73715 1.89559 8.74281C1.97663 8.74847 2.05756 8.73036 2.12932 8.69052L4.36627 7.46889L6.59449 8.69509C6.65581 8.73132 6.72506 8.75024 6.79546 8.75C6.88801 8.75034 6.97827 8.7199 7.05324 8.66307C7.12102 8.61222 7.1735 8.54211 7.20446 8.46104C7.23543 8.37997 7.2436 8.29131 7.228 8.20553L6.7911 5.60671L8.59551 3.77656C8.6586 3.7206 8.70522 3.64704 8.72997 3.56443C8.75472 3.48182 8.75657 3.39355 8.73532 3.30988ZM6.04836 5.14003C5.99712 5.19193 5.95878 5.25617 5.9367 5.32715C5.91461 5.39813 5.90945 5.47369 5.92165 5.54724L6.23623 7.46432L4.59346 6.54924C4.53025 6.51399 4.45973 6.49556 4.38812 6.49556C4.3165 6.49556 4.24598 6.51399 4.18277 6.54924L2.54001 7.46432L2.85458 5.54724C2.86678 5.47369 2.86162 5.39813 2.83953 5.32715C2.81745 5.25617 2.77911 5.19193 2.72788 5.14003L1.41716 3.76741L3.25653 3.48832C3.32731 3.47801 3.39459 3.44967 3.45248 3.4058C3.51037 3.36193 3.5571 3.30385 3.58858 3.23667L4.36627 1.49345L5.18765 3.24125C5.21913 3.30843 5.26586 3.3665 5.32375 3.41038C5.38164 3.45425 5.44892 3.48258 5.5197 3.49289L7.35907 3.77199L6.04836 5.14003Z"
                    fill="#E46A12"
                />
            </svg>
        </div>
    );
}
function StarHalf({ width, margin }) {
    return (
        <div>
            <svg
                className={`w-${width} text-orange ml-${margin} dark:text-white`}
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.60254 3.10366C8.66933 3.15816 8.71958 3.2318 8.74721 3.31563C8.76849 3.39945 8.76663 3.48787 8.74185 3.57063C8.71707 3.65338 8.67038 3.72707 8.60721 3.78313L6.80034 5.61647L7.23784 8.2198C7.25346 8.30573 7.24528 8.39454 7.21427 8.47576C7.18326 8.55697 7.13071 8.6272 7.06284 8.67813C6.98777 8.73507 6.89739 8.76556 6.80471 8.76522C6.73421 8.76546 6.66487 8.74651 6.60346 8.71022L4.37221 7.48188L2.13221 8.70563C2.06036 8.74554 1.97932 8.76368 1.89817 8.75801C1.81703 8.75235 1.739 8.7231 1.67284 8.67355C1.60496 8.62261 1.55242 8.55239 1.52141 8.47117C1.4904 8.38996 1.48222 8.30114 1.49784 8.21522L1.93534 5.61188L0.128463 3.77855C0.0722257 3.71976 0.0323319 3.64603 0.0130627 3.56528C-0.00620651 3.48454 -0.00412354 3.39982 0.019088 3.32022C0.0444455 3.23876 0.0910902 3.16638 0.153729 3.11129C0.216367 3.0562 0.292492 3.02061 0.373463 3.00855L2.86284 2.62355L3.97846 0.25855C4.01429 0.18106 4.07022 0.115707 4.13986 0.0699799C4.2095 0.0242527 4.29003 0 4.37221 0C4.4544 0 4.53493 0.0242527 4.60456 0.0699799C4.6742 0.115707 4.73014 0.18106 4.76596 0.25855L5.88159 2.62813L8.37096 3.00855C8.45531 3.01611 8.53576 3.04915 8.60254 3.10366ZM5.94478 5.33641C5.96689 5.26531 6.00528 5.20096 6.05659 5.14897L7.36909 3.77855L5.52721 3.49897C5.45634 3.48864 5.38896 3.46026 5.331 3.41631C5.27303 3.37236 5.22623 3.31418 5.19471 3.24688L4.37222 1.49607V6.50743C4.3795 6.50705 4.38679 6.50686 4.39409 6.50686C4.4658 6.50686 4.53641 6.52532 4.59971 6.56063L6.24471 7.4773L5.92971 5.55688C5.91749 5.48321 5.92266 5.40751 5.94478 5.33641Z"
                    fill="#E46A12"
                />
            </svg>
        </div>
    );
}
