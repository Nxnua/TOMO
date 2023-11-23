import Review from "./review/review";
export default function Guide({ name, description, image, review, star }) {
    return (

        <div className="flex mb-5 dark:bg-darknav  bg-white dark:border-gray-800 rounded-2xl w-[450px] h-[300px] border border-neutral-100 drop-shadow-[_0px_15px_15px_rgba(0,0,0,0.05)]">
            <div className=" w-[35%]  flex flex-col justify-between items-center">
                
                <div className="float-left w-full h-[150px] rounded-2xl">
                    <img
                        src={image}
                        alt=""
                        className="float-left w-full h-[150px] rounded-2xl "
                    />
                    
                </div>
                <div className="  flex justify-center ">{name}</div>
                <div className=" grid grid-cols-3 gap-1 m-10 mb-20 w-24 h-3 ">
                    <img
                        src="images/flagmo.png "
                        className=" h-auto w-auto "
                        alt=""
                    />
                    <img src="images/flagko.png" className=" h-auto w-auto" alt="" />
                    <img src="images/flagen.png" className=" h-auto w-auto" alt="" />

                </div>
            </div>
            <div className="flex flex-col w-[65%]">
                <div className=" flex h-10 items-center">
                    <div className="rating flex mt-5 ml-48">
                        <div className="star  flex flex-col">
                            <div>
                                <Review reviews="122" rating="4.6" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="descrption w-auto h-[50%] flex flex-row ">
                    <div className="w-auto m-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quod corporis eum amet distinctio est atque illo voluptatem aut accusantium.</div>
                </div>
                <div className="w-full flex flex-row justify-start ml-3 space-x-[75%]">
                    <div>
                        <img src="/images/hun.png" alt="" />
                        2-6
                    </div>
                    <div className="favorite flex">
                        <div className=" absolute flex justify-center ">
                            <img
                                src="/images/favorite.png"
                                alt=""
                                className=" hover:opacity-50 h-6 w-6"
                            />
                        </div>
                    </div>
                </div>
                <div className=" transition ease-in-out delay-50  hover:scale-105  mt-5 drop-shadow-[_0px_4px_4px_rgba(0,0,0,0.2)] ">
                <button className="text-sm text-white bg-orange dark:border-orange-400 dark:bg-[#383C51] w-[90%] border py-1 rounded-lg font-normal tracking-tight">
                        <a href="/guide">Book now</a>
                    </button>
                </div>

            </div>
        </div>
    );
}
