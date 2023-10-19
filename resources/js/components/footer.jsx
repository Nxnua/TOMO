export default function Footer(){
    const menu = ["Trips", "Guides", "Agencies", "Reviews"];
    const tripPlanner = ["Plan a trip", "Travel Budget", "Flights"];
    return(
        
        <div className=" bg-black75 flex flex-col ">
            <div className=" h-72 ">
                <div className=" h-full grid grid-cols-3">
                    <div className=" relative flex items-center ">
                        <img src="/images/tomo-T.png" alt="" className=" absolute  h-52 ml-36   " />
                        <img src="/images/Tomo-White.png" alt="" className=" h-20 ml-44 " />
                    </div>
                    <div className=" bg-black flex flex-row p-12">
                        <div>
                            <p className=" text-2xl text-orange font-extrabold">Menu</p>
                        </div>
                        <div>
                            <p>jsdg</p>
                        </div>
                    </div>
                    <div>sdgrzsdg</div>
                </div>
                <hr></hr>
            </div>
            <div className=" bg-[#393535] h-24 ">

            </div>
            
        </div>
    );
}