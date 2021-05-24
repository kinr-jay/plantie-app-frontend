import PlantList from "../components/PlantList"
import Drop from "../components/GardenDropdown"

const Garden = () => {
    return (
        <div className = "garden">
        <h1>My Plants</h1>
        <Drop/>
        <h3>You have 1 plant in your garden!</h3>
        <PlantList/>
        </div>
    )
}

export default Garden