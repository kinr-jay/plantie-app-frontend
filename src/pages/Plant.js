import React from "react";
const Plant = (props) => {

    return (
      <div className="individualPlant">
        <article>
          <img
            src={props.plant.img}
            alt={props.plant.species.type}
          />
          <h1>{props.plant.name}</h1>
          <section className="details">
            <h4>Frequency: {props.plant.species.frequency}</h4>
            <h4>Sunlight: {props.plant.species.sunlight}</h4>
            <h4>
              Temperature: {props.plant.species.temperature.min} -{" "}
              {props.plant.species.temperature.max}
            </h4>
          </section>
          <hr />
          <form>
            <h4>Description: {props.plant.species.description}</h4>
          </form>
        </article>
        <button
          onClick={() => {
            props.deletePlant(props.plant)
          }}
        >
          Delete Plant
        </button>
      </div>
    )
}

export default Plant


