import { useState } from "react";
import Banner from "../../components/banner/banner";
import { SignUpNavigator } from "../../components/signinup/signupnav";
import Start from "../../components/main/start";
import Login from "../../components/signinup/login";
export default function Landing(scroll) {
    const [onStart, setOnStart] = useState(false);
    return (
        <div>
      <div className="flex tracking-tight relative bg-[#bcf5f7]">
        <Banner />
        <div className="z-50 absolute right-0 inset-y-0 md:w-[300px]">
          <Start />
        </div>
      </div>
    </div>
    );
}