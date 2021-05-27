import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
const GardenDropdown = (props) => {
    
    const visable= props.visable
  
    return (
        visable?
        <div className="dropdown">
            <p>Find a plant! <FontAwesomeIcon icon={faSearch}/>
            <button className="searchButton">
            
            </button></p>
        </div>
        : null
    )
}
 export default GardenDropdown
