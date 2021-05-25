import TaskList from "../components/TaskList"
// import {useState} from "react"

const Home =(props)=> {
        console.log(props.plants)
           return (
                <div>
                <h1>Today tasks</h1>
                <TaskList/>
          
                </div>
            )
        }
export default Home