import {useState} from 'react'
import PlantList from "../components/PlantList"
import DropButton from "../components/GardenDropButton"
import Drop from "../components/GardenDropdown"

const MyGarden = (props) => {

    const {plants} = props

    const [visable, setVisable] = useState(false)

    const handleVisable = () => {
      if(visable===true){
        setVisable(false)
      } else {
        setVisable(true)
      }
    
      }

      const loaded = () => (
        <h3>You have {plants.length} plants in your garden!</h3>
      )

      const loading = () => (
        <h3>You have no plants in your garden!</h3>
      )

    return (
        <div className = "garden">
            <DropButton
            handleVisable={handleVisable}/>
            <Drop
            visable={visable}/>
            <h1>My Plants</h1>
            {plants? loaded (): loading ()}
            <PlantList
            plants={plants}
            setSelectedPlant= {props.setSelectedPlant}
            />
        </div>
    )
}

export default MyGarden
