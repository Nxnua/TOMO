import { useMainContext, useThemeContext } from "../contexts";
import { LoginView, RegisterView } from "./auth";

export default function ModalHandler() {
    const { currentModal, setModal } = useMainContext();
    const { darkMode } = useThemeContext();

    const renderer = () => {
        switch (currentModal) {
            case "signIN":
                return <LoginView />;
            case "signUP":
                return <RegisterView />;
            default:
                return <p>Modal not found</p>;
        }
    };

    return (
        <>
            <div className="z-[100] flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="w-[75vw] self-center p-0 flex relative h-[600px]">
                    {renderer()}
                    <div className="absolute float right-4 top-4">
                        <button onClick={() => setModal("")}>
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div
                modal-backdrop=""
                className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-[60]"
            ></div>
        </>
    );
}
