import { useThemeContext } from "../../contexts";
import Login from "./login";
import Register from "./register";

function AuthLayout({ children }) {
    const { darkMode } = useThemeContext();
    return (
        <div className="flex w-full">
            <div className="flex-1 rounded-2xl">
                <img
                    className="h-full w-full object-cover object-left"
                    
                    src={
                        darkMode
                            ? "/images/bg-dark.png"
                            : "/images/bg-light.png"
                    }
                    alt=""
                />
            </div>
            <div className="w-96 rounded-2xl bg-white dark:bg-darkbg h-full float-right">
                {children}
            </div>
        </div>
    );
}

export const LoginView = () => {
    return (
        <AuthLayout>
            <Login />
        </AuthLayout>
    );
};

export const RegisterView = () => {
    return (
        <AuthLayout>
            <Register />
        </AuthLayout>
    );
};
