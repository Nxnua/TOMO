import { useState } from "react";
import Banner from "../../components/banner";
import { SignUpNavigator } from "../../components/signupnav";
import Start from "../../components/start";
import Login from "../../components/login";
export default function Landing(scroll) {
    const [onStart, setOnStart] = useState(false);
    return (
        <div className={{ scroll } ? "visible" : "hidden"}>
            <div className="flex tracking-tight relative bg-[#bcf5f7]">
                <Banner />
                <div className="z-20 absolute right-0 inset-y-0 bg-white w-[300px] rounded-l-2xl drop-shadow-[-26px_-28px_49px_rgba(0,0,0,0.40)]">
                    {onStart ? (
                        <SignUpNavigator />
                    ) : (
                        <Start
                            startHandler={() => {
                                setOnStart(true);
                            }}
                        />
                    )}
                    
                </div>
            </div>
        </div>
    );
}
