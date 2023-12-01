import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Landing from "./landing";
import Header from "./header";
import { SearchCategory } from "./search";
import Footer from "./footer";
import Fbfaq from "./faq/Fbfaq";
import BreadCrumb from "./breadcrumb";
export default function MainLayout() {
    const [landingVisible, setLandingVisible] = useState(true);
    const [scrollTriggered, setScrollTriggered] = useState(false);
    const [windowTop, setWindowTop] = useState(0);
    const anchorRef = useRef();

    useEffect(() => {
        setScrollTriggered(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        const handleScroll = (e) => {
            setScrollTriggered(true);
            setWindowTop(window.scrollY);
        };
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    useEffect(() => {
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
    const location = useLocation();
    return (
        <div>
            {landingVisible && location.pathname == "/" && <Landing />}
            <a className="mt-5" ref={anchorRef} href="#" />
            <div id="main-wrapper">
                <Header />
                <div className=" pt-20"></div>
                {/* <BreadCrumb /> */}
                {location.pathname == "/" && (
                    <div className="mt-20 h-[30vh] pt-10 px-28">
                        <SearchCategory />
                    </div>
                )}
                <Outlet />

                <div className=" h-12"></div>
                <Footer />
                <Fbfaq />
            </div>
        </div>
    );
}
