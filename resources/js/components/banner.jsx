export default function Banner() {
    return (
            <div className="relative z-10">
                <img src="/images/background.png" alt="" className="h-screen" />
                {/* <img src="/images/bushes1.png"  className=" to-left h-[1vh] max-w-max absolute bottom-[23vh] left-[1vw]"/> */}
                <img src="/images/car.png" className=" car animate-bounce z-10 h-[25vh] left-[22vw] absolute bottom-[22vh] "/>
            
               
                <div className=" absolute  flex flex-row z-0 ">
                <img src="/images/bushes1.png" className="to-left absolute h-[1vh] max-w-max left-[5vw] bottom-[23vh] "/>
                <img src="/images/bushes1.png" className="to-left1 absolute  h-[1vh] max-w-max bottom-[23vh] "/>
                </div>
                <div className=" absolute  flex flex-row z-0 ">
                <img src="/images/bushes.png" className="to-left absolute h-[15vh] max-w-max left-[5vw] bottom-[0vh] "/>
                <img src="/images/bushes.png" className="to-left1 absolute h-[15vh] max-w-max left-[5vw] bottom-[0vh] "/>
                </div>
        </div>
    );
}
