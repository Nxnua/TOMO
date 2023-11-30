import { useState } from "react";
import Banner from "../../components/banner/banner";
import { SignUpNavigator } from "../../components/signupnav";
import Start from "../../components/start";
import Login from "../../components/login";
export default function Landing(scroll) {
    const [onStart, setOnStart] = useState(false);
    return (
        <div>
      <div className="flex tracking-tight relative bg-[#bcf5f7] dark:bg-[#00054a]">
        <Banner />
        <div className="z-50 absolute right-0 inset-y-0 md:w-[300px]">
          <Start />
        </div>
      </div>
    </div>
    );
}