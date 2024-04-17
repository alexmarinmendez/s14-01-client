import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
    const { logged } = useAuth();

    return (
        <>
            <Link to="/">Home</Link> |
            {logged ? <><Link to="/profile">Profile</Link> | <Link to="/logout">Logout</Link></> : " "}
            <hr />
        </>
    )
}

export default Navbar