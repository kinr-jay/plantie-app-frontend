import React from "react"
import {Link} from "react-router-dom"
import format from "date-fns/format"

const Plant = ({plant, deletePlant, history}) => {

  let waterOverdue = false

  const lastWatered = new Date(plant.lastWatered)
  const today = new Date()
  const daysTilWatering = Math.round((today - lastWatered) / 1000 / 86400) - plant.species.frequency
  if (daysTilWatering > 0) {
    waterOverdue = true
  }

  return (
    <div className="individualPlant">
      <Link to="/garden">
        <i class="fas fa-chevron-circle-left fa-20px fa-customize"></i>
      </Link>
      <article>
        <img
          src={plant.species.img}
          alt="plantimage"
          id="plantImage"
        />
        <h1>{plant.name}</h1>
        <section className="details">
          <h4>
            <i class="fas fa-sun"></i> Sunlight:{" "}
            {plant.species.sunlight}
          </h4>
          <h4>
            <i class="fas fa-temperature-high"></i> Temperature:{" "}
            {plant.species.temperature.min} -{" "}
            {plant.species.temperature.max}
          </h4>
          <h4>
            <i class="far fa-calendar"></i>{" "}
            Watering Frequency: Every {plant.species.frequency} Days
          </h4>
          {waterOverdue ? (
            <h4><i class="fas fa-exclamation-circle"></i> Watering is {daysTilWatering} overdue!</h4>
          ) : (
            <h4><i class="fas fa-tint"></i> Next Watering in {Math.abs(daysTilWatering)} days</h4>
          )
          }
        </section>
        <hr />
        <div className="description">
          <h4>Description: {plant.species.description}</h4>
        </div>
      </article>
      <button
        onClick={() => {
          deletePlant(plant)
          history.push("/garden")
        }}
      >
        Delete Plant
      </button>
      <Link to="/edit-plant">
        <button>Edit Plant</button>
      </Link>
    </div>
  )
}

export default Plant


