import React from "react";

const PlantForm = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.plant)

  //State of all species options
  const [species, setSpecies] = React.useState(null)

  //State Variable to track whether a plant species has been selected.
  const [plantSelected, setPlantSelected] = React.useState(false)

  const url = "https://plantie-group-project.herokuapp.com"
  React.useEffect(() => {
    fetch(url + "/plants")
      .then((response) => response.json())
      .then((data) => setSpecies(data))
  }, [])

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault() // Prevent PlantFormfrom Refreshing
    if (plantSelected) {
      props.handleSubmit(formData) // Submit to Parents desired function
      props.history.push("/garden") //Push back to Garden page
    } else {
      alert("Please select a plant species.")
    }
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleOptionChange = (event) => {
    setPlantSelected(true)
    const index = event.target.options.selectedIndex
    setFormData({
      ...formData,
      [event.target.name]: event.target.options[index].value,
    })
  }

  /* help found through https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript */
  const handleFileSelect = (event) => {
    let file = event.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      // console.log("RESULT", reader.result)
      setFormData({ ...formData, img: reader.result })
    }
    reader.readAsDataURL(file)
  }

  const loading = () => {
    return <h1>Sowing...</h1>
  }

  const loaded = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Plant's Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="birthday">Plant's Birthday: </label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            value={formData.birthday}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="species">Select your Plant's species: </label>
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
          <label htmlFor="img">Add A Photo (PNG or JPEG)</label>
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
          {formData.img !== "" && (
            <img src={formData.img} alt="plant preview" />
          )}
        </div>
        <input type="submit" value={props.label} />
      </form>
    )
  }

  return species ? loaded() : loading()
};

export default PlantForm;
