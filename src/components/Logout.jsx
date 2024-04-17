import { useEffect } from "react";
import { useAuth } from '../contexts/AuthContext';

const Logout = () => {
    const { setLogged } = useAuth();

    useEffect(() => {
        localStorage.removeItem('token')
        setLogged(false)
    }, [setLogged]);
    return (
        <>
            <p>Successfully logout</p>
        </>
    )
}

export default Logout