import {useState} from 'react'
import PlantList from "../components/PlantList"
import DropButton from "../components/GardenDropButton"
import Drop from "../components/GardenDropdown"

const MyGarden = (props) => {

    const [visable, setVisable] = useState(false)

    const handleVisable = () => {
      if(visable===true){
        setVisable(false)
      } else {
        setVisable(true)
      }
    
      }

    return (
        <div className = "garden">
            <DropButton
            handleVisable={handleVisable}/>
            <Drop
            visable={visable}/>
            <h1>My Plants</h1>
            <h3>You have # plants in your garden!</h3>
            <PlantList
            plants={props.plants}
            setSelectedPlant= {props.setSelectedPlant}
            />
        </div>
    )
}

export default MyGarden
