import { createContext, useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { privateApiInstance } from "../http-common";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null)
    const [profile, setProfile] = useLocalStorage("profile", null)
    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);

        localStorage.setItem('token', data.api_token)
        // console.log(data.api_token)
        privateApiInstance.defaults.headers['authorization'] = `Bearer ${data.api_token}`
        console.log(privateApiInstance.defaults.headers)
        window.location.reload();
    };

    const userProfile = async (data) => {
        setProfile(data)
    }

    const logout = () => {
        setUser(null);
        navigate("/", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            userProfile,
            profile,
            login,
            logout
        }),
        [user, profile]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};