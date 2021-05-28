// import React from 'react';
// import Task from "./Task" 
// import React, { useState, useEffect } from "react";
import format from "date-fns/format"


function TaskList(props) {
  

  const loaded = () => {
    let today = new Date()

    props.plants.map((plant) => {
      let lastWatered = new Date(plant.lastWatered)
      let daysTilWatering = 
        Math.round((today - lastWatered) / 1000 / 86400) + plant.species.frequency
      plant.daysTilWatering = daysTilWatering
      return plant
    })

    props.plants.sort((plant1, plant2) => {
      return plant1.daysTilWatering - plant2.daysTilWatering
    })

    return (
      <div className="plantlist">
        {props.plants.map((plant, index) => (
          <div className="plantcards" key={index}>
            <img
              className="imgbg"
              src={plant.species.img}
              onClick={() => ""}
              alt={plant.species.type}
            />
            <h4>Name: {plant.name}</h4>
            {/* <h4>Birthday: {plant.birthday}</h4> */}
            <h4>Next Watering: {plant.daysTilWatering} days</h4>
            <h4>Last Watered: {format(new Date(plant.lastWatered), "MMM, dd")}</h4>
          </div>
        ))}
      </div>
    )
  }

  const loading = () => {
    return <h1> Loading . . . .</h1>
  }

  return (
    <div>
      {props.plants ? loaded() : loading()};{/* <Task /> */}
    </div>
  )
}

export default TaskList;



	// const url = "https://plantie-group-project.herokuapp.com"
		// const [tasklist, setTasklist] = useState([])
    // const [task,setTask]=useState([])
    // const setTaskState =(task) =>{
    //   setTask(task)
    // }
    
	// const getTasks = () => {
		// console.log("get tasks")
    // fetch(url)
    // .then((response) => response.json())
    // .then((data) => {
      // setTasklist([data]) 
      // setTimeout (setTasklist([data]), 5000);
    // })
    // console.log(tasklist)
    // console.log(tasklist[0])
    // console.log(tasklist[0].firstname)

// console.log(tasklist[0].lastname)
// console.log(tasklist[0].plants)
// console.log(tasklist[0].plants[0])
  // }
  
	
	// React.useEffect(() =>{
  //   getTasks()
	// 	console.log("Here")
		
  // }, [])