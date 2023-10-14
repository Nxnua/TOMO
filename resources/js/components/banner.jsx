export default function Banner() {
    return (
        // <div className="flex-1 bg-light-banner bg-no-repeat bg-cover h-screen mr-[500px]">
        //     {/* <img src="/images/background.png" alt="" className=" h-screen" /> */}
        //     <img src="/images/roadlines.png" className="z-0 absolute bottom-[calc(100vh - 700px)] left-[20px]"/>
        //     <img
        //         src="/images/car.png"
        //         className="h-[20vh] absolute bottom-[20vh] left-[200px]"
        //     />
        //     <img src="/images/bushes.png" className="  absolute bottom-[0px] left-[5px]"/>
        // </div>
        <div className=" flex-1">
        <div className="relative z-10">
          <img src="/images/background.png" alt="" className="h-screen" />
           <img src="/images/roadlines.png" className="z-0  absolute bottom-[23vh] left-[20px]"/>
           <img src="/images/car.png" className="h-[20vh]  absolute bottom-[23vh] left-[200px]"/>
           <img src="/images/bushes.png" className="  absolute bottom-[0px] left-[5px]"/>
        </div>
        
        </div>
    );
}
