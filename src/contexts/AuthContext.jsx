/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, createContext, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

const AuthContextProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            setLogged(true)
        }
    }, []);

    return <AuthContext.Provider value={{ logged, setLogged }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;