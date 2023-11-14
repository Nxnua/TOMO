import { createContext, useContext, useState } from "react";
const ThemeContext = createContext("light");
export const ThemeContextProvider = ({children}) => {
    const [isDark, setDark] = useState(false);
    const setDarkMode = (newState) => {
        setDark(newState);
    };
    const contextValue = {
        darkMode: isDark,
        setDarkMode,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
            "useThemeContext must be used within a ThemeContextProvider"
        );
    }
    return context;
};
