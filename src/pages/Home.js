import TaskList from "../components/TaskList"
// import {useState} from "react"

const Home =(props)=> {
  // console.log(props.plants)
  return (
    <div style={{ backgroundColor: "#FEF8F7" }}>
      <h1 style={{ fontFamily: "Work Sans, sans-serif", color: "#242424" }}>
        Today Tasks
      </h1>
      <TaskList plants={props.plants} />
    </div>
  )
}
export default Home