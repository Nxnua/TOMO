import Landing from "./LandingPage";
import { useEffect, useRef, useState } from "react";
import Main from "./Main";
export default function Home() {
    const [landingVisible, setLandingVisible] = useState(true);
    const [scrollTriggered, setScrollTriggered] = useState(false);
    const [windowTop, setWindowTop] = useState(0);
    const anchorRef = useRef();

    useEffect(() => {
        setScrollTriggered(false);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        
        const handleScroll = (e) => {
         
            setScrollTriggered(true);
            // console.log(window.scrollY, " < ", (anchorRef.current.offsetTop || 0))
            // setLandingVisible(
            //     window.scrollY < (anchorRef.current.offsetTop || 0)
            // );
            setWindowTop(window.scrollY);
        };
        // addEventListener("wheel", (event) => {});

        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };

        // window.addEventListener("scroll", handleScroll);
        // return () => {
        //     window.removeEventListener("scroll", handleScroll);
        // };
    }, []);

    useEffect(() => {
        console.log(
            windowTop,
            " < ",
            anchorRef.current.offsetTop || 0,
            "=",
            windowTop < (anchorRef.current.offsetTop || 0)
        );
        if (
            anchorRef.current &&
            anchorRef.current.offsetTop === 0 &&
            windowTop === 0 &&
            !scrollTriggered
        ) {
            setLandingVisible(true);
        } else {
            setLandingVisible(windowTop < (anchorRef.current.offsetTop || 0));
        }
    }, [windowTop]);

    return (
        <div>
            {landingVisible && <Landing />}
            <a className="mt-5" ref={anchorRef} href="#" />
            <Main />
        </div>
    );
}
