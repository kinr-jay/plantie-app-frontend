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
      <button className="signin-bttn"> Sign In</button>
    </form>
  )
}

export default LoginForm
