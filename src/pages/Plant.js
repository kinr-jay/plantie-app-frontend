import React from "react";
const Plant = (props) => {
      
    const { plant } = props

     return <div className='individualPlant'>
    
        <article>
          <img src={props.plant.species.img} alt="plantimage"/>
          <h1>{props.plant.name}</h1>
          <section className= "details">
            <h4>
              <i class="far fa-calendar"></i> 
              Frequency: {props.plant.species.frequency}
            </h4>
            <h4>
              <i class="fas fa-sun"></i> 
              Sunlight: {props.plant.species.sunlight}
            </h4>
            <h4>
              <i class="fas fa-temperature-high"></i> Temperature: {props.plant.species.temperature.min} - {props.plant.species.temperature.max}
            </h4>
          </section>
          <hr/>
          <form><h4>Description: {props.plant.species.description}</h4></form>
        </article>
        <button onClick={() => {
            props.deletePlant(plant)
          }}>
            Delete Plant
          </button>
    </div>
}

export default Plant


