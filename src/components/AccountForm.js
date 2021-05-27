import React, { useState } from "react"

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
    <form onSubmit={handleSubmit}>
    <div style={{ display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily:"Comfortaa, cursive"}} className="signin-page">
    <img style={{ height:"200px",
        width: "auto",}}
          src="https://res.cloudinary.com/kinr-jay/image/upload/v1621966095/GA/plantie%20app/plantie-icon-vector_bjdb6k.svg"
          alt="plantie logo"
        />
                
    <input style={{backgroundColor:"white", color: "#242424",
        fontWeight: "600",
        padding: "8px 50px",
        margin: "5px 0",
        borderRadius: "16px",
        borderStyle:"solid",
        borderColor: "black", 
        border: "",
        width: "200px",
        fontFamily:"Comfortaa, cursive"}}
         type="email"
         name="email"
         onChange={handleChange}
         value={formData.email}
         />

    </div>
    <div>
   
        <input style={{backgroundColor:"white", color: "#242424",
        fontWeight: "600",
        padding: "8px 50px",
        margin: "5px 0",
        borderRadius: "16px",
        borderStyle:"solid",
        borderColor: "black", 
        border: "",
        width: "200px",
        fontFamily:"Comfortaa, cursive"}}
           type="password"
           name="password"
           onChange={handleChange}
           value={formData.password}
        />
    
        </div>

      <button style={{backgroundColor:" #326E62", color: "white",
        fontWeight: "600",
        padding: "8px 50px",
        margin: "5px 0",
        borderRadius: "20px",
        border: "0",
        width: "200px",
        fontFamily:"Comfortaa, cursive"}}>Sign Up</button>
    </form>
  )
}

export default AccountForm





