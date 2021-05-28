import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTint } from "@fortawesome/free-solid-svg-icons"

import format from "date-fns/format"

function TaskList(props) {
  const loaded = () => {
    let today = new Date()

    props.plants.map((plant) => {
      let lastWatered = new Date(plant.lastWatered)
      let daysTilWatering =
        Math.round((today - lastWatered) / 1000 / 86400) +
        plant.species.frequency
      plant.daysTilWatering = daysTilWatering
      return plant
    })

    props.plants.sort((plant1, plant2) => {
      return plant1.daysTilWatering - plant2.daysTilWatering
    })

    return (
      <div className="tasklist">
        {props.plants.map((plant, index) => (
          <div className="plantcards" key={index}>
            <div
              className="imgcontainer"
              style={{ backgroundImage: `url(${plant.species.img})` }}
            ></div>
            <div className="taskinfo">
              <h4>Name: {plant.name}</h4>
              <h4>Next Watering: {plant.daysTilWatering} days</h4>
              <h4>
                Last Watered: {format(new Date(plant.lastWatered), "MMM, dd")}
              </h4>
            </div>
            <FontAwesomeIcon icon={faTint} />
          </div>
        ))}
      </div>
    )
  }

  const loading = () => {
    return <h1> Loading . . . .</h1>
  }

  return props.plants ? loaded() : loading()
}

export default TaskList
