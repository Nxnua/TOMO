import Review from "./review/review";
export default function Guide({ name, description, image, review, star }) {
    return (
        <div className=" mt-4  bg-white dark:bg-darknav rounded-xl h-[20vw] border-[1px] dark:border-gray-800 border-neutral-100 drop-shadow-[_0px_15px_15px_rgba(0,0,0,0.05)]">
            <div className="  flex flex-row">
            <div className=" w-[35%] h-[100%] flex flex-col justify-between">
                <div className=" rounded-lg border-[2px] border-neutral-200 dark:border-gray-600">
                    <img src={image} alt="" className="w-[100%] h-[20vh] rounded-lg " />
                </div>
                <div className="  flex justify-center ">{name}</div>
                <div className=" grid grid-cols-3 gap-1 m-10 mb-20  ">
                    <img src="images/flagmo.png " className=" h-auto w-auto " alt="" />
                    <img src="images/flagko.png"  className=" h-auto w-auto" alt="" />  
                    <img src="images/flagen.png"  className=" h-auto w-auto" alt="" /> 
                                  
                </div>
                
                
            </div>
            
            <div className=" flex-1 w-full">
                <div className=" flex h-16 justify-center items-center">
                    <div className="rating  justify-center flex flex-row  w-auto">
      
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
                <div className="w-fullmember flex flex-row ml-3 ">
                    <div>
                        <img src="/images/hun.png" alt="" />
                    </div>
                    2-6
                    <div className="favorite flex ml-[23vh]">
                        
                        <div className=" absolute flex justify-center ">
                        <img
                            src="/images/favorite.png"
                            alt=""
                            className=" hover:opacity-50 h-[3vh] w-[3vh]"
                        />
                    </div>
                        
                    </div>
                </div>
                <div className=" transition ease-in-out delay-50  hover:scale-105  mt-2 mx-4 drop-shadow-[_0px_4px_4px_rgba(0,0,0,0.2)] ">
                <button className="w-full text-sm text-white bg-orange dark:border-orange-400 dark:bg-[#383C51] w-[75%] border py-1 rounded-lg font-normal tracking-tight">
                    Book now
                </button>
            </div>
            </div>
            
            </div>
        </div>
        
        

    );
}
