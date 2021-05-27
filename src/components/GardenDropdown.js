import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSeedling} from "@fortawesome/free-solid-svg-icons"
const GardenDropdown = (props) => {
    
    const visable= props.visable
  
    return (
        visable?
        <div className="dropdown">
            <Link to={`/add-plant`}>
                <p>Add a Plant!<FontAwesomeIcon icon={faSeedling}/>
                <button className="searchButton">
                >
                </button></p>
            </Link>
        </div>
        : null
    )
}
 export default GardenDropdown
