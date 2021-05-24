import React from "react";
const Plant = (props) => {

const { plants } = props
// return the jsx for when we have the plants

     return <div className='individualPlant'>
    
        <article key={plant._id}>
          <img src={plant.img}/>
          <h1>{plant.name}</h1>
          <h4>Fruequency: {plant.frequency}</h4>
          <h4>Sunlight: {plant.sunligh}</h4>
          <h4>Temprature: {plant.tempreture}</h4>
          <h4>Description: {plant.description}</h4>
        </article>
    </div>
}


export default Plant