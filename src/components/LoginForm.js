import React, { useState } from "react"

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
        <p>WELCOME BACK!</p>
      <input className="login-email"
        type="email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <input className="login-pw"
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      </div>
      <button className="signin-bttn"> Sign In</button>
    </form>
  )
}

export default LoginForm
