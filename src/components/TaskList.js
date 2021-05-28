// import React from 'react';
import Task from "./Task" 

function TaskList(props) {

  const loaded = () => {
    
    props.plants.sort((plant1, plant2) => {
      let lastWatered1 = new Date(plant1.lastWatered)
      let lastWatered2 = new Date(plant2.lastWatered)
      let today = new Date()
      let daysTilWatering1 = Math.round((today - lastWatered1)/1000/86400)
      console.log(daysTilWatering1)
      let daysTilWatering2 = Math.round((today - lastWatered2)/1000/86400)
      console.log(daysTilWatering2)
      return daysTilWatering1-daysTilWatering2
    })
    console.log(props.plants)
    
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
          <h4>Birthday: {plant.birthday}</h4>
          <h4>Last Watered: {plant.lastWatered}</h4>
        </div>
      ))}
    </div>
  )}

  const loading = () => {
    return <h1> Loading . . . .</h1>
  }

  return (
    <div>
      {props.plants ? loaded() : loading()};
      <Task />
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