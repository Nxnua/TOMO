import Header from "../../components/main/header";
import Footer from "../../components/main/footer";
import { Link } from "react-router-dom";
import Fbfaq from "../../components/faq/Fbfaq";


export default function Plantrip () {
    
    
    return (
        <div>
            <Header />
            <div className="mt-10">
                <div className="text-center font-bold text-2xl mt-10">
                    Where do you want to go?
                </div>
                <form className=" mx-auto w-[900px] relative items-center justify-center mt-10">
                    <div >
                        <div className="absolute ml-[20px] mt-[20px]">
                            <img src="/images/search.png" />
                        </div>
                        <input
                            type="search "
                            placeholder=" City, landmark"
                            className=" w-full p-4 rounded-full bg-white text-center border-2 "
                        />
                    </div>
                </form>
                <div className="mr-[600px] mt-10 mb-10">
                    <div className=" font-bold text-2xl ">
                        Popular destinations go ?
                    </div>
                </div>
                <div className=" flex justify-center items-center rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                            <div className=" h-96 w-72 ">
                                <img
                                    className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-3xl "
                                    src="/images/ub.png"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-slate-500 group-hover:via-slate/60 group-hover:to-slate/70"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                                <h1 className="text-3x1 font-bold text-white">
                                    Ulaanbaatar
                                </h1>
                                <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Consequuntur impedit
                                    soluta atque.
                                </p>
                            </div>
                        </div>
                        <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                            <div className=" h-96 w-72 ">
                                <img
                                    className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-3xl"
                                    src="/images/ER.png"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-slate-500 group-hover:via-slate/60 group-hover:to-slate/70"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                                <h1 className="text-3x1 font-bold text-white">
                                    Erdenet
                                </h1>
                                <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Consequuntur impedit
                                    soluta atque.
                                </p>
                            </div>
                        </div>
                        <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                            <div className=" h-96 w-72 ">
                                <img
                                    className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-3xl "
                                    src="/images/Kh.png"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-slate-500 group-hover:via-slate/60 group-hover:to-slate/70"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                                <h1 className="text-3x1 font-bold text-white">
                                    Khuwsgul
                                </h1>
                                <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Consequuntur impedit
                                    soluta atque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/planyourtrip/days"><button className="mt-10 mb-3 rounded-full bg-yellow-400 py-2 px-3.5 text-sm capitalize text-white">next</button></Link>
            
            
            
            <Footer />
            <Fbfaq />
            
        </div>
    );
}