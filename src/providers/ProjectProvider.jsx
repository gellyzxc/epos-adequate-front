import { createContext, useContext, useMemo, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", null)
    const [modalOpened, setModalOpened] = useState(false)
    const [modalChildren, setModalChildren] = useState(null);
    useEffect(() => {
        if (!theme) {
            setTheme('light')
        } else {
            document.documentElement.dataset.theme = theme
        }
    }, [theme])

    const changeTheme = async (data) => {
        document.documentElement.dataset.theme = theme
        setTheme(data);
    };

    const toggleModal = async (children) => {
        setModalOpened(!modalOpened)
        
        setModalChildren(children)
    }

    const value = useMemo(
        () => ({
            theme,
            modalOpened,
            modalChildren,
            toggleModal,
            changeTheme,
        }),
        [theme, modalOpened, modalChildren]
    );
    return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
};

export const useProject = () => {
    return useContext(ProjectContext);
};