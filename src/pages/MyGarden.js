import PlantList from "../components/PlantList"
import Drop from "../components/GardenDropdown"

const MyGarden = () => {
    return (
        <div className = "garden">
        <h1>My Plants</h1>
        <Drop/>
        <h3>You have # plants in your garden!</h3>
        <PlantList/>
        </div>
    )
}

export default MyGarden
