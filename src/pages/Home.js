import TaskList from "../components/TaskList"
// import {useState} from "react"

const Home = (props) => {
  return (
    <div className="tt">
      <h1>Today Tasks</h1>
      <TaskList plants={props.plants} />
    </div>
  )
}
        
export default Home
