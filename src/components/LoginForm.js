import React, { useState } from "react"

const LoginForm = ({ existingUser, label }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <form>
      <input
        style={existingUser && { display: "none" }}
        type="text"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      <button className="submit-btn">{label}</button>
    </form>
  )
}

export default LoginForm
