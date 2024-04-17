import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
    const { logged } = useAuth();

    if (!logged) return <Link to="/login"><img src="linkedin-signin-small-default.png" /></Link>;

    return (
        <div>
            <h1>Home!!!</h1>
            <p>You are already logged-in</p>
        </div>
    )
}

export default Home