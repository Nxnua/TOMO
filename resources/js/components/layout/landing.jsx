import Banner from "./banner";
import Start from "./start";

export default function Landing() {
    return (
        <div className="relative z-[99]">
            <div className="flex tracking-tight relative bg-[#bcf5f7] dark:bg-[#00054a]">
                <Banner />
                <div className="z-50 absolute right-0 inset-y-0 md:w-[300px]">
                    <Start />
                </div>
            </div>
        </div>
    );
}
