import './App.css';
import './style/style.scss'
import React, {useState} from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import MyGarden from "./pages/MyGarden"
import PlantForm from "./components/PlantForm"
import Calendar from "./pages/Calendar"
import Profile from "./pages/MyProfile"
import Team from "./pages/Team"
import Plant from "./pages/Plant"
import Nav from "./components/Nav"
import AccountForm from './components/AccountForm';
import LoginForm from './components/LoginForm'

// date-fns imports
import { format } from "date-fns"

function App() {
  const url = "https://plantie-group-project.herokuapp.com"
//   const url = "http://localhost:4500"
  const cloudinary = "https://api.Cloudinary.com/v1_1/kinr-jay/image/upload"
  const [garden, setGarden] = useState([])
  const todaysDateFormatted = format(new Date(), "MM-dd-yyyy")
  console.log("today's date", todaysDateFormatted)

  const emptyPlant = {
    birthday: "2021-05-24",
    lastWatered: todaysDateFormatted,
    name: "",
    img: "",
    species: {
      type: "",
      frequency: "",
      water: 0,
      sunlight: "",
      temperature: {
        min: 0,
        max: 0,
      },
      description: "",
      img: "",
    },
  }

  const [selectedPlant, setSelectedPlant] = useState(emptyPlant)

  const getGarden = () => {
    fetch(url + "/garden/60ac1567b7cdcf1018e93c85")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(setGarden(data), 5000)
      })
  }
  React.useEffect(() => {
    getGarden()
  }, [])

  // handle create
  const handleCreate = (newPlant, image) => {
    // console.log(newPlant)
    const imageData = new FormData()
    imageData.append("file", image)
    imageData.append("upload_preset", "plantie")
    const options = {
      method: "POST",
      body: imageData,
    }
    fetch(cloudinary, options)
      .then((res) => res.json())
      .then((data) => {
        newPlant.img = data.secure_url
        fetch(
          url + "/garden/60ac1567b7cdcf1018e93c85/plants/" + newPlant.species,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newPlant),
          }
        ).then(() => getGarden())
      })
  }

  // handle update
  const handleUpdate = (plant) => {
    fetch(url + "/garden/60ac1567b7cdcf1018e93c85/plants/" + plant._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    }).then(() => getGarden())
  }

  const selectPlant = (plant) => {
    setSelectedPlant(plant)
  }

  const deletePlant = (plant) => {
    fetch(url + "/garden/60ac1567b7cdcf1018e93c85/plants/" + plant._id, {
      method: "delete",
    }).then(() => {
      getGarden()
    })
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/tasks">
          <Home
            plants={garden.plants}
            selectPlant={selectPlant}
            deletePlant={deletePlant}
            setSelectedPlant={setSelectedPlant}
          />
        </Route>
        <Route
          path="/signup"
          render={(routerProps) => <AccountForm {...routerProps} />}
        />
        <Route
          path="/signin"
          render={(routerProps) => <LoginForm {...routerProps} />}
        />
        <Route path="/garden">
          <MyGarden
            plants={garden.plants}
            setSelectedPlant={setSelectedPlant}
          />
        </Route>
        <Route
          path="/add-plant"
          render={(routerProps) => (
            <PlantForm
              {...routerProps}
              label={"Add to Garden"}
              handleSubmit={handleCreate}
              plant={emptyPlant}
            />
          )}
        />
        <Route
          path="/edit-plant"
          render={(routerProps) => (
            <PlantForm
              {...routerProps}
              label={"Update Plant"}
              handleSubmit={handleUpdate}
              plant={selectedPlant}
            />
          )}
        />
        <Route
          path="/plant/:name"
          render={(routerProps) => (
            <Plant
              {...routerProps}
              plant={selectedPlant}
              deletePlant={deletePlant}
            />
          )}
        />
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/profile">
          <Profile garden={garden} />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
      </Switch>
      <Nav />
    </div>
  )
}

export default App;
