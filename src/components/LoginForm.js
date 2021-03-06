import React, { useState } from "react"
import { Link } from "react-router-dom"

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent PlantFormfrom Refreshing
    // props.handleSubmit(formData); // Submit to Parents desired function
    // props.history.push("/"); //Push back to display page
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="login-part"  > 
      <img style={{ height:"200px",
        width: "auto",}}
          src="https://res.cloudinary.com/kinr-jay/image/upload/v1621966095/GA/plantie%20app/plantie-icon-vector_bjdb6k.svg"
          alt="plantie logo"
        />
        <h1 className="welcomeback">plantie</h1>
        <p className="wb">WELCOME BACK!</p>

        <div className="emailAddress">
            <h4 >Email Address</h4>
          <input className="login-email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="passwordText">
          <h4>Password</h4>
          <input className="login-pw"
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
      </div>
      <Link to="/tasks">
        <button className="signin-bttn"> Sign In</button>
      </Link>
    </form>
  )
}

export default LoginForm


{/* <label htmlFor="birthday">When did the plant join the family? </label><br/> */}