import Header from "../header";
import Footer from "../footer";
import Fbfaq from "./Fbfaq";
import Closediv from "./faqclosediv";

export default function Accordion() {
    return (
        <div>
            <Header />
            <Fbfaq />
            <div className="mt-10 h-[200vh] px-4 pt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-32">
                    <Closediv />
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}
