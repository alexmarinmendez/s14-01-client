import { useState, useEffect } from "react";
import { useAuth } from '../contexts/AuthContext';

const LinkedinAuth = () => {
    const { setLogged } = useAuth();

    const [error, setError] = useState(false)
    const [user, setUser] = useState({})
    useEffect(() => {
        async function fetchData() {
            let response
            try {
                response = await fetch("https://s14-01-api.vercel.app/api/login/");
                response = await response.json();
                setUser(response.payload.user)
                localStorage.setItem('token', JSON.stringify(response.payload.token))
                setLogged(true)
            } catch (err) {
                setError(true)
            }
        }
        fetchData();
    }, [setLogged]);
    return (
        <>
            {!error ? <h1>Welcome {user.name}!!!</h1> : <p>Ha ocurrido un error {`Boolean Value: ${error}`}</p>}
        </>
    )
}

export default LinkedinAuth