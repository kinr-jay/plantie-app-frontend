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

function App() {
  const url = "https://plantie-group-project.herokuapp.com/garden"
  const [plants, setPlants] = useState([])
  const emptyPlant = {
    birthday: "2021-05-24",
    lastWatered: "2021-05-24",
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

  const getPlants = () => {
    fetch(url + "/garden/:_id")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(setPlants([data]), 5000)
      })
  }
  React.useEffect(() => {
    getPlants()
  }, [])

  // handle create
  const handleCreate = (newPlants) => {
    fetch(url + "/:gardenId/plants/:plantId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlants),
    }).then(() => getPlants())
  }
  // handle update
  const handleUpdate = (plants) => {
    fetch(url + "/:gardenId/plants/:plantId", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plants),
    }).then(() => getPlants())
  }

  const selectPlant = (plant) => {
    setSelectedPlant(plant)
  }

  const deletePlant = (plant) => {
    fetch(url + "/:gardenId/plants/:plantId", {
      method: "delete",
    }).then(() => {
      getPlants()
    })
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home
            plants={plants}
            selectPlant={selectPlant}
            deletePlant={deletePlant}
            // plant={emptyPlant}
            // handleSubmit={handleCreate}
            // plant={selectedPlant}
            // handleSubmit={handleUpdate}
          />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/garden">
          <MyGarden />
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
          render={(routerProps) => <Plant {...routerProps} />}
        />
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/profile">
          <Profile />
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