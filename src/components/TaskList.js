// import React from 'react';
// import Calendar from "../pages/Calendar"
import Task from "./Task" 
import React, { useState, useEffect } from "react";
function TaskList () {
		const url = "http://localhost:4500/garden/60ac448e579f1a21ccc1b98a"
		const [tasklist, setTasklist] = useState([])
    const [task,setTask]=useState([])
    const setTaskState =(task) =>{
      setTask(task)
    }
    
	const getTasks = () => {
		console.log("get tasks")
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // setTasklist([data]) 
      setTimeout (setTasklist([data]), 5000);
    })
    console.log(tasklist)
    // console.log(tasklist[0])
    // console.log(tasklist[0].firstname)

// console.log(tasklist[0].lastname)
// console.log(tasklist[0].plants)
// console.log(tasklist[0].plants[0])
  }
  
	
	React.useEffect(() =>{
    getTasks()
		console.log("Here")
		
  }, [])

const loaded = () => (
  <div className="plantlist">
    {tasklist[0].plants.map((plant, index) => (
     <div className="plantcard" key={index}>
     <img src={plant.species.img} onClick={()=> setTaskState(plant)}/>
     <h4>Name: {plant.name}</h4>
     <h4>Birthday: {plant.birthday}</h4>
     <h4>Last Watered: {plant.lastWatered}</h4>
     </div>
    
    ))}
    
  </div>
)  


const loading = () => {
 return  <h1> Loading . . . .</h1>
  }
  
  return (
    <div>
    {tasklist.length > 0 ? loaded() : loading()};
   
  <Task plant={task}/>
  </div>
  )}

export default TaskList;