// import React from 'react';
import Task from "./Task" 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTint} from "@fortawesome/free-solid-svg-icons"

// import React, { useState, useEffect } from "react";


function TaskList (props) {
const loaded = () => (
  <div className="tasklist">
    {props.plants.map((plant, index) => (

     <div className="plantcards" key={index}>
     <img className="imgbg" src={plant.species.img} onClick={()=> ""} alt={plant.species.type}/>
     <div className="taskinfo">
     <h4>Name: {plant.name}</h4>
     <h4>Last Watered: {plant.lastWatered}</h4>
     </div>
     <FontAwesomeIcon icon={faTint}/>

     </div>

    
    ))}
    
  </div>
)  


const loading = () => {
  return  <h1> Loading . . . .</h1>
  }
  
  return (
    <div>

    {props.plants ? loaded() : loading()}
   
  <Task/>
  </div>

  )}

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