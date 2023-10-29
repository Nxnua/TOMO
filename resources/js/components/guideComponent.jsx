
export default function Guide({ name, description, image, review, star }) {
    return (
        <div className="  bg-white rounded-xl h-[20vw] border-[1px] border-neutral-100 drop-shadow-[_0px_15px_15px_rgba(0,0,0,0.05)] flex flex-row">
            <div className=" w-[40%]  flex flex-col justify-between">
                <div className=" rounded-lg border-[1px] border-neutral-200">
                    <img src={image} alt="" className=" w-[187px] h-[170px] rounded-lg " />
                </div>
                <div className="mb-9  flex justify-center ">{name}</div>
                <div className=" grid grid-cols-3 gap-4 m-10   ">
                    <img src="images/flagmo.png " className=" h-7 w-7 " alt="" />
                    <img src="images/flagko.png"  className="flex h-7 w-7" alt="" />  
                    <img src="images/flagen.png"  className=" h-7 w-7" alt="" /> 
                                  
                </div>
                
                
            </div>
            
            <div className=" flex-1">
                <div className=" flex h-16 justify-center items-center">
                    <div className="rating  justify-center flex flex-row  ml-48 mt-5 ">
                        <div className=" text-xs border-2 rounded border-orange mr-1 mb-20 mt-10 text-orange">4.5</div>
                        <div className="star  flex flex-col justify-center">
                                <span className="text-xs"> ****** </span>
                                <span className="text-xs flex-col mb-10 text-orange ">45view</span>
                        </div>
                    </div>
                </div>
                <div className="descrption h-[50%] flex flex-row ">
                    <div className="m-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quod corporis eum amet distinctio est atque illo voluptatem aut accusantium.</div>
                </div>
                <div className="member flex flex-row ml-5 ">
                    <div>
                        <img src="/images/hun.png" alt="" />
                    </div>
                    2-6
                    <div className="favorite flex ml-44">
                        
                        <div className=" absolute flex justify-center ">
                        <img
                            src="/images/favorite.png"
                            alt=""
                            className=" hover:opacity-50 h-6 w-6"
                        />
                    </div>
                        
                    </div>
                </div>
                <div className=" transition ease-in-out delay-50  hover:scale-105  mt-2 drop-shadow-[_0px_4px_4px_rgba(0,0,0,0.2)] ">
                <button className=" bg-white w-[75%] border-2 py-1 border-black50 rounded-lg font-extrabold tracking-tighter">
                    Book now
                </button>
            </div>
            </div>
            
        </div>
    );
}
