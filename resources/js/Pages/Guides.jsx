import React from "react";
import Header from "../components/header";
// import "./navbar"
import Guide from "../components/guideComponent";

export default function Guides() {
    
    
    return (
        <div>
            <Header />

            <div className="flex  justify-start  items-center h-[86px] ml-9 font-Nunito ">
                <div className="float-left ms-10"></div>
                <div className="md:static float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto w-full flex items-center">
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mx-auto">
                        <div className="stroke" id="mainNav">
                            <div className="button">
                                <ul>
                                    <li>
                                        <a href="#">All guides</a>
                                    </li>
                                    <li>
                                        <a href="#">By Business</a>
                                    </li>
                                    <li>
                                        <a href="#">By Travel</a>
                                    </li>
                                    <li>
                                        <a href="#">Most reviewed</a>
                                    </li>
                                    <li>
                                        <a href="#">Most reviewed</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>

            
            <Guide/>
            
        </div>
    );
};