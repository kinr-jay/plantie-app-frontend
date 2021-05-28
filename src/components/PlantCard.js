import { Link } from "react-router-dom"
const Card = ({plant, setSelectedPlant}) => {

const handleSelected = ()=> {
        setSelectedPlant(plant)
    }

    return (
      <Link to={`/plant/${plant.name}`}>
        <div className="plantcard" onClick={handleSelected}>
          <img src={plant.species.img} alt={plant.species.type} />
          <h2>{plant.name}</h2>
          <h4>{plant.species.type}</h4>
        </div>
      </Link>
    )
}

export default Card