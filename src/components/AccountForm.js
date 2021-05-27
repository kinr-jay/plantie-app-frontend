import React, { useState } from "react"
import {Link} from "react-router-dom"

const AccountForm = ({ existingUser, label }) => {
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
    console.log(event.target.value)
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileSelect = (event) => {
    console.log(event.target.files[0])
    setFormData({...formData, img: event.target.files[0]})
  }


  return (
    <form onSubmit={handleSubmit} style= {{backgroundColor:"#FEF8F7"}}>
    <div className="signin-page">
    <img style={{ height:"200px",
        width: "auto",}}
          src="https://res.cloudinary.com/kinr-jay/image/upload/v1621966095/GA/plantie%20app/plantie-icon-vector_bjdb6k.svg"
          alt="plantie logo"
        />
        
    <input className="signup-email" 
         type="email"
         name="email"
         onChange={handleChange}
         value={formData.email}
         />

    </div>
    <div style= {{backgroundColor:"#FEF8F7"}}>
        {/* <label> Password </label> */}
        <input className="signup-password"
        type="password"
           name="password"
           onChange={handleChange}
           value={formData.password}
        />
   
        </div>

      <button className="signup-bttn">Sign Up</button>
    
    </form>
  )
}

export default AccountForm





