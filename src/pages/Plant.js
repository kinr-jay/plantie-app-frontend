
import React from "react";
const Plant = (props) => {

    const plant = [
        {name: "Coctus", img:"https://images.squarespace-cdn.com/content/v1/55d143f0e4b0d49a516f32a9/1596319940898-D4HMT75KOXZ0F0U0PD3Y/ke17ZwdGBToddI8pDm48kL7ZiGTVZ4_WkolJkgbeTjl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uf0tdRk0l1Q3HtMgVa1wUGSf4x025uUlg8CddhKF8AejVzIgDbKuWbU6v7VINLj_HA/bunny+ear+cactus.jpg?format=1000w", frequency: "Three times a Month", sunlight: "direct sun", tempreture: 45 , description: "This is my favorite plant"}
      ]


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
