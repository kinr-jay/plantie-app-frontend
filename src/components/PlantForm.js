import React from "react";

const PlantForm = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.plant)
  const [imageFile, setImageFile] = React.useState(null)

  //State of all species options
  const [species, setSpecies] = React.useState(null)

  //State Variable to track whether a plant species has been selected.
  const [plantSelected, setPlantSelected] = React.useState(false)

  // useEffect to pull a list of Plant species for the dropdown selection input
  const url = "https://plantie-group-project.herokuapp.com"
  React.useEffect(() => {
    fetch(url + "/plants")
      .then((response) => response.json())
      .then((data) => setSpecies(data))
  }, [])

  //FUNCTIONS
  ///////////

  // Submit handler function
  const handleSubmit = (event) => {
    event.preventDefault() // Prevent PlantFormfrom Refreshing
    if (plantSelected) {
      props.handleSubmit(formData, imageFile) // Submit to Parents desired function
      props.history.push("/garden") //Push back to Garden page
    } else {
      alert("Please select a plant species.")
    }
  }

  // Change handler function for name and birthday form inputs
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  // Change handler function for plant species option collection
  const handleOptionChange = (event) => {
    setPlantSelected(true)
    const index = event.target.options.selectedIndex
    setFormData({
      ...formData,
      [event.target.name]: event.target.options[index].value,
    })
  }

  // Change handler function for file selection
  const handleFileSelect = (event) => {
    let file = event.target.files[0]
    setImageFile(file)
  }

  const loading = () => {
    return <h1>Sowing...</h1>
  }

  const loaded = () => {
    return (
      <div className="plantFormForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">What's your plant's name? </label> <br/>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="birthday">When did the plant join the family? </label><br/>
          <input
            type="date"
            name="birthday"
            id="birthday"
            value={formData.birthday}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="species">Select your Plant's species </label><br/>
          <select name="species" id="species" onChange={handleOptionChange}>
            <option value="select-a-plant">Select a Plant</option>
            {species.map((species, index) => (
              <option key={index} value={species._id}>
                {species.type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="img" id="image">Add A Photo (PNG or JPEG)</label>
          <input
            style={{ opacity: 0, height: "1px", width: "1px" }}
            type="file"
            name="img"
            id="img"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileSelect}
          />
        </div>
        <div className="img-preview">
          {imageFile && (
            <img src={URL.createObjectURL(imageFile)} alt="plant preview" />
          )}
        </div>
        <input type="submit" value={props.label} id="addToGarden" /> 
      </form>
      </div>
    )
  }

  return species ? loaded() : loading()
};

export default PlantForm;
