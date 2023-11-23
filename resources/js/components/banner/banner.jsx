import Movement from "./bannerSVG";
import MovementDark from "./bannerSVG-dark";
import { useThemeContext } from "../darkmode/states";

export default function Banner() {
    const { darkMode } = useThemeContext();
    return (
        <div className="relative z-50 h-screen">
            <div className=" absolute z-20  bottom-0 left-0">
                {darkMode ? <MovementDark /> : <Movement />}
            </div>
        </div>
    );
}
