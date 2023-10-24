export default function TripComponent({
    title,
    image,
    location,
    duration,
    review,
    rating,
    price,
    sale
}) {
    return (
        <div className=" h-[400px] border-2 border-neutral-100 rounded-2xl bg-white flex flex-col drop-shadow-[_0px_9px_34px_rgba(0,0,0,0.08)]">
            <div className=" h-[45%] rounded-2xl rounded-b-md">
                <div>
                    <img src={image} alt="" className=" h-[180px] w-full" />
                </div>
            </div>

            <div>
                <p>{title}</p>
            </div>
        </div>
    );
}
