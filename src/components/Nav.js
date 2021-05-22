import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome} from "@fortawesome/free-solid-svg-icons"
import {faSeedling} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faCalendar} from "@fortawesome/free-solid-svg-icons"
import {faCodeBranch} from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
    return (
        <div className= "NavBar">
            <Link to="/">
                <FontAwesomeIcon icon={faHome}/>
            </Link>
            <Link to="/garden">
                <div><FontAwesomeIcon icon={faSeedling}/></div>
            </Link>
            <Link to="/calendar">
                <div><FontAwesomeIcon icon={faCalendar}/></div>
            </Link>
            <Link to="/profile">
                <div><FontAwesomeIcon icon={faUser}/></div>
            </Link>
            <Link to="/team">
                <div><FontAwesomeIcon icon={faCodeBranch}/></div>
            </Link>
        </div>
    )
}

export default Nav