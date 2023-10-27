
export default function Guide({ name, description, image, review, star }) {
    return (
        <div className="  bg-white rounded-xl h-[20vw] border-[1px] border-neutral-100 drop-shadow-[_0px_15px_15px_rgba(0,0,0,0.05)] flex flex-row">
            <div className=" w-[40%]  flex flex-col justify-between">
                <div className=" rounded-lg border-[1px] border-neutral-200">
                    <img src={image} alt="" className=" w-[100%] h-[100%]  " />
                </div>
                <div className="mb-28 ">{name}</div>
                <div className=" justify-center mb-56">
                    <div className="Languege bg-slate-950 flex  ">
                        <img src="images/flagmo.png " className=" h-6 w-6 " alt="" />
                        <img src="images/flagko.png"  className=" h-6 w-6" alt="" />  
                        <img src="images/flagen.png"  className=" h-6 w-6" alt="" /> 
                    </div>
                    <div className="KeyLanguage bg-slate-600 flex">
                        MGL
                        KOR 
                        ENG
                    </div>
                    
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
                    <div className="m-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quod corporis eum amet distinctio est atque illo voluptatem aut accusantium.</div>
                </div>
                <div className="member flex flex-row ml-5 ">
                    <div>
                        <img src="/images/hun.png" alt="" />
                    </div>
                    2-6
                    <div className="favorite flex ml-44">
                    <div>
                        <img src="/images/favorite.png " className="w-4 h-4" alt="" />
                    </div>
                        
                    </div>
                </div>
                <div className="booking">
                    <button className="mt-5 border-4  px-8  rounded-lg ">Book Now</button>
                </div>
            </div>
            

        </div>
    );
}
