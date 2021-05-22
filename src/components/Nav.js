import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className= "NavBar">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/garden">
                <div>My Garden</div>
            </Link>
            <Link to="/calendar">
                <div>Calendar</div>
            </Link>
            <Link to="/profile">
                <div>Profile</div>
            </Link>
            <Link to="/team">
                <div>Team</div>
            </Link>
        </div>
    )
}

export default Nav