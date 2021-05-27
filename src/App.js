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

function App() {
  const url = "https://plantie-group-project.herokuapp.com"
  const [garden, setGarden] = useState([])
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

  const getGarden = () => {
    fetch(url + "/garden/60ac1567b7cdcf1018e93c85")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(setGarden(data), 5000)
        console.log(data)
      })
      
  }
  React.useEffect(() => {
    getGarden()
  }, [])

  // handle create
  const handleCreate = (newPlants) => {
    fetch(url + "/:gardenId/plants/:plantId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlants),
    }).then(() => getGarden())
  }
  // handle update
  const handleUpdate = (plants) => {
    fetch(url + "/:gardenId/plants/:plantId", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plants),
    }).then(() => getGarden())
  }

  const selectPlant = (plant) => {
    setSelectedPlant(plant)
  }

  const deletePlant = (plant) => {
    fetch(url + "/:gardenId/plants/:plantId", {
      method: "delete",
    }).then(() => {
      getGarden()
    })
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home
            plants={garden.plants}
            selectPlant={selectPlant}
            deletePlant={deletePlant}
             setSelectedPlant={setSelectedPlant}
          />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route
          path="/signup"
          render={(routerProps) => (
            <AccountForm
              {...routerProps}
              
            />
          )}
        />
        <Route
          path="/signin"
          render={(routerProps) => (
            <AccountForm
              {...routerProps}
              
            />
          )}
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
          render={(routerProps) => <Plant {...routerProps} />}
        />
          <Route
          path="/plant">
          <Plant 
           plant={garden && garden.plants ? garden.plants[0] : emptyPlant }
           deletePlant={deletePlant}
           />
        </Route>
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