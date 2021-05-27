import React, { useState } from "react"

const LoginForm = (props) => {
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
      <button className="submit-btn"> Sign In</button>
    </form>
  )
}

export default LoginForm
