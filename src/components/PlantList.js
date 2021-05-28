import PlantCard from "./PlantCard"

const PlantList = (props) => {

    const {plants} = props

    const loaded = () => (
        <div className="plantlist">
            {plants.map((plant, index) => (
                <PlantCard
                key= {index}
                plant={plant}
                setSelectedPlant= {props.setSelectedPlant}/> 
            ))} 
        </div>
    )

    const loading = () => <h1>Loading</h1>

    return plants ? loaded() : loading ()
}

export default PlantList
