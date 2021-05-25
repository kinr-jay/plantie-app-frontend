import './App.css';
import './style/style.scss'
// import {useState} from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Garden from "./pages/MyGarden"
import Calendar from "./pages/Calendar"
import Profile from "./pages/MyProfile"
import Team from "./pages/Team"
import Plant from "./pages/Plant"
import Nav from "./components/Nav"

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/garden">
          <Garden/>
        </Route>
        <Route path="/plant/:name"
            render={
              (routerProps) => <Plant {...routerProps}
              />
            }
            />
        <Route path="/calendar">
          <Calendar/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/team">
          <Team/>
        </Route>
      </Switch>
      <Nav/>
    </div>
  );
}

export default App;
