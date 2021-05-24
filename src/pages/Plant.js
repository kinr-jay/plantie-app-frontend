import React from "react";
const Plant = (props) => {

const { plants } = props
// return the jsx for when we have the plants
const loaded = () => (
    <div className='individualPlant'>
      {plants.map((plant) => (
        <article key={plant._id}>
          <img src={plant.img}/>
          <h1>{plant.name}</h1>
          <h4>{plant.frequency}</h4>
          <h4>{plant.sunligh}</h4>
          <h4>{plant.tempreture}</h4>
          <h4>{plant.description}</h4>
        </article>
      ))}
    </div>
)

// adding the loading function for when there is nothing to display
const loading = () => <h1>Loading</h1>

return plants.length > 0 ? loaded() : loading()
}

export default Plant