import React from "react";
import {Link} from "react-router-dom";
const Plant = (props) => {


     return <div className='individualPlant'>
        <Link to="/garden">
            <i class="fas fa-chevron-circle-left fa-20px fa-customize"></i>
        </Link>
        <article>
          <img src={props.plant.species.img} alt="plantimage" id="plantImage"/>
          <h1>{props.plant.name}</h1>
          <section className= "details">
            <h4>
              <i class="far fa-calendar"></i>  Frequency: {props.plant.species.frequency}
            </h4>
            <h4>
              <i class="fas fa-sun"></i>  Sunlight: {props.plant.species.sunlight}
            </h4>
            <h4>
              <i class="fas fa-temperature-high"></i> Temperature: {props.plant.species.temperature.min} - {props.plant.species.temperature.max}

            </h4>
          </section>
          <hr />
          <div className="description">
            <h4>Description: {props.plant.species.description}</h4>
            </div>
        </article>
        <button onClick={() => {
            props.deletePlant(props.plant)
                props.history.push("/garden") 
            
          }}>
            Delete Plant
        </button>
        <Link to="/edit-plant">
            <button>Edit Plant</button>
        </Link>
        {/* <button>Edit Plant
            {props.history.push("/edit-plant")}Edit Plant
        </button> */}
        
    </div>
}

export default Plant


