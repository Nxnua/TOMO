import Review from "./review/review";
export default function Guide({ name, description, image, review, star }) {
    return (
        <div className=" mt-4  bg-white rounded-xl h-[20vw] border-[1px] border-neutral-100 drop-shadow-[_0px_15px_15px_rgba(0,0,0,0.05)] flex flex-row">
            <div className=" w-[35%]  flex flex-col justify-between">
                <div className=" rounded-lg border-[1px] border-neutral-200">
                    <img src={image} alt="" className=" w-[190px] h-[180px] rounded-lg " />
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
            
            <div className=" flex-1">
                <div className=" flex h-16 justify-center items-center">
                    <div className="rating  justify-center flex flex-row  ml-48 mt-5 ">
      
                        <div className="star  flex flex-col justify-center">
                        <div>
                    <Review reviews="122" rating="4.6" />
                </div>
                        </div>
                    </div>
                </div>
                <div className="descrption w-auto h-[50%] flex flex-row ">
                    <div className="w-auto m-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quod corporis eum amet distinctio est atque illo voluptatem aut accusantium.</div>
                </div>
                <div className="member flex flex-row ml-5 ">
                    <div>
                        <img src="/images/hun.png" alt="" />
                        2-6
                    </div>
                    2-6
                    <div className="favorite flex ml-60">
                        
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
                        Book now
                    </button>
                </div>

            </div>
        </div>
    );
}