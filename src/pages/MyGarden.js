import PlantList from "../components/PlantList"

const Garden = () => {
    return (
        <div className = "garden">
        <h1>My Plants</h1>
        <h3>You have 1 plant in your garden!</h3>
        <PlantList/>
        </div>
    )
}

export default Garden