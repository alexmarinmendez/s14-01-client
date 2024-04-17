import { useState, useEffect } from "react";

const Profile = () => {
    const [error, setError] = useState(false)
    const [user, setUser] = useState({})
    useEffect(() => {
        async function fetchData() {
            const token = JSON.parse(localStorage.getItem('token'))
            let response
            try {
                response = await fetch("https://s14-01-api.vercel.app/api/profile", {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                response = await response.json();
                if (response.status === 'error') setError(true)
                else setUser(response.payload)
            } catch (err) {
                setError(true)
            }
        }
        fetchData();
    }, []);
    return (
        <>
            {!error ? <><h1>Welcome {user.name}!!!</h1><p>This is your profile (member only)</p><ul><li>name: {user.name}</li><li>lastname: {user.lastname}</li><li>email: {user.email}</li></ul></> : <p>Ha ocurrido un error {`Boolean Value: ${error}`}</p>}
        </>
    )
}

export default Profile