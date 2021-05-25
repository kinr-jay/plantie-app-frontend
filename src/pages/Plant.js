import React from "react";
const Plant = (props) => {

    const plant = [
        {name: "Coctus",
         img:"https://canary.contestimg.wish.com/api/webimage/5c7fa4fefc2f9d48b8020088-large.jpg?cache_buster=8f0d33c27ee1d5acbebf084b43b6a520", alt:"plant",
        frequency: 2, 
        sunlight: "direct", 
        temperature: { min: 45, max: 80},
        description: "This is my favorite plant"}
      ]

     return <div className='individualPlant'>
    
        <article>
          <img src={props.plant.img}/>
          <h1>{props.plant.name}</h1>
          <h4>Frequency: {props.plant.frequency}</h4>
          <h4>Sunlight: {props.plant.sunlight}</h4>
          <h4>Temperature: {props.plant.temperature}</h4>
          <h4>Description: {props.plant.description}</h4>
        </article>
    </div>
}

export default Plant
