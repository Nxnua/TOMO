
import Landing from "./LandingPage";
import { useState } from "react";
export default function Home() {
    const [scroll, setScroll] = useState(false);
    const handleScroll = (event) => {
        setScroll(event.currentTarget.scrollTop);
      };
  

    return (
        <div onScroll={()=> setScroll(true)}>
            <Landing scroll = {scroll} />
        </div>
    );
}
