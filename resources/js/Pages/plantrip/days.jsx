import React from 'react'
import Header from "../../components/main/header";
import Footer from "../../components/main/footer";
import { Link } from "react-router-dom";
import { data } from "../data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Fbfaq from "../../components/faq/Fbfaq";

export const Days = () => {
    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    };
  return (
    
    <div>
        <div>
            <Header/>
        </div>
        <div >
                <div className="text-center font-bold text-2xl  mt-10" >
                    When do you want to go? 
                </div>
                <form className="mx-auto w-[900px] mt-10 ">




                    <div className=" text-2xl font-bold mt-10 mr-[700px]">


                        How many days?
                    </div>
                    <input
                        type="tel"
                        id="phone"

                        class="w-full p-4  bg-white  border mt-10"



                        placeholder="number of days"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                    />
                </form>
                <div className=" mt-20 text-center font-bold text-2xl mr-[620px] ">
                    Which month? (optional)
                </div>
        </div>
        <div className="relative flex items-center mt-10 ml-72 mr-72 ">


                <MdChevronLeft
                    className="opacity-50 cursor-pointer hover:opacity-100"
                    onClick={slideLeft}
                    size={40}
                />
                <div
                    id="slider"
                    className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                >
                    {data.map((item) => (
                        <img
                            className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                            src={item.img}
                            alt=""
                        />
                    ))}
                </div>
                <MdChevronRight
                    className="opacity-50 cursor-pointer hover:opacity-100"
                    onClick={slideRight}
                    size={40}
                />
            </div>
            <Link to="/plantrip/prefer"><button className="mt-10 mb-3 rounded-full bg-yellow-400 py-2 px-3.5 text-sm capitalize text-white">next</button></Link>
            
                <Footer/>
            
            <Fbfaq />
    </div>
  ) 
}