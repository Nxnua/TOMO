import { createContext, useContext, useState } from "react";
import { ThemeContextProvider } from "./theme";
import { AuthContextProvider } from "./auth";
import ModalHandler from "../modals";

const MainContext = createContext({});
export default function MainContextProvider({ children }) {
    const [_isLoading, _setLoading] = useState();
    const [_modal, _setModal] = useState("");
    const contextValue = {
        isLoading: _isLoading,
        currentModal: _modal,
        setModal: (modalName) => {
            _setModal(modalName);
        },
        setLoading: (state) => {
            _setLoading(state);
        },
    };
    return (
        <MainContext.Provider value={contextValue}>
            <ThemeContextProvider>
                <AuthContextProvider>
                    {_modal && <ModalHandler />}
                    {children}
                </AuthContextProvider>
            </ThemeContextProvider>
        </MainContext.Provider>
    );
}

export const useMainContext = () => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error(
            "useMainContext must be used within a MainContextProvider"
        );
    }
    return context;
};

export { useThemeContext } from "./theme";
export { useAuthContext } from "./auth";
