export default function Banner() {
    return (
            <div className="relative z-10">
                <img src="/images/background.png" alt="" className="h-screen" />
                <img src="/images/roadlines.png" className=" to-left h-[1vh] absolute bottom-[23vh] left-[1vw]"/>
                <img src="/images/car.png" className=" car animate-bounce z-0 h-[25vh] left-[22vw] absolute bottom-[22vh] "/>
                <img src="/images/bushes.png" className=" to-left absolute  h-[15vh] bottom-[0vh] left-[5vw]"/>
        </div>
    );
}
