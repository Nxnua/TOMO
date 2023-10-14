import { useState } from "react";
import Banner from "../components/banner";
import SignUp from "../components/signup";
import Start from "../components/start";
export default function Home() {
    const [onStart, setOnStart] = useState(false);
    return (
        <div>
            <div className="flex tracking-tight relative bg-[#bcf5f7]">
                <Banner />
                <div className="z-20 sabsolute right-0 inset-y-0 bg-white w-[500px] rounded-l-3xl drop-shadow-[-26px_-28px_49px_rgba(0,0,0,0.40)]">
                    {onStart ? (
                        <SignUp />
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
