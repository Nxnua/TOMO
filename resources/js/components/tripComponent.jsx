export default function TripComponent({
    title,
    image,
    location,
    duration,
    review,
    rating,
    price,
    sale,
}) {
    const cons = () => {
        console.log(sale);
    };
    return (
        <div className=" h-[400px] border-2 border-neutral-100 rounded-2xl bg-white flex flex-col drop-shadow-[_0px_9px_34px_rgba(0,0,0,0.08)]">
            <div className=" relative h-[45%] rounded-2xl rounded-b-md">
                <img src={image} alt="" className=" h-[180px] w-full " />
                <div className=" absolute flex justify-center left-3 top-4 rounded-md bg-[#32B837] w-14 h-5 drop-shadow-[_0px_0px_8px_rgba(0,0,0,0.)] text-white text-xs items-center">
                    {sale}%
                </div>
                <div className=" absolute flex justify-center right-3 top-2 w-7 items-center">
                    <img src="/images/favorite.png" alt="" />
                </div>
            </div>
            <div
                onMouseOver={cons}
                className=" mx-4 my-2 h-12 flex justify-center text-lg leading-5 items-center font-semibold"
            >
                <p>{title}</p>
            </div>
        </div>
    );
}
