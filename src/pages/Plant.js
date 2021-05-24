import React from "react";
const Plant = (props) => {

const { plants } = props
// return the jsx for when we have the plants
const loaded = () => (
    <div style={{textAlign: "center"}}>
      {plants.map((plant) => (
        <article key={plant._id}>
          <img src={plant.img}/>
          <h1>{plant.name}</h1>
          <h3>{plant.description}</h3>
          <h3>{plant.frequency}</h3>
          <h3>{plant.lastWatered}</h3>
          <h3>{plant.description}</h3>
        </article>
      ))}
    </div>
}

export default Plant