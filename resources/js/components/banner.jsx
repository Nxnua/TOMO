export default function Banner() {
    return (
            <div className="relative z-10">
                <img src="/images/background.png" alt="" className="h-screen" />
                <img src="/images/roadlines.png" className="z-0  absolute bottom-[23vh] left-[20px]"/>
                <img src="/images/car.png" className="z-0 h-[20vh] left-[22vw]  absolute bottom-[23vh] "/>
                <img src="/images/bushes.png" className=" h-[15vh] absolute bottom-[0vh] left-[5vw]"/>
        </div>
    );
}
