import { onAuthStateChanged, signOut } from "firebase/auth";
import { initFlowbite } from "flowbite";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
const AuthContext = createContext({});
export const AuthContextProvider = ({ children }) => {
    const [_user, _setUser] = useState();
    const setUser = (newState) => {
        _setUser(newState);
    };

    const onLogout = async () => {
        signOut(auth)
            .then(() => {
                setUser(undefined);
            })
            .catch(() => {
                setUser(undefined);
            });
    };
    const contextValue = {
        user: _user,
        setUser,
        onLogout,
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                _setUser(user);
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(
            "useAuthContext must be used within a AuthContextProvider"
        );
    }
    return context;
};
