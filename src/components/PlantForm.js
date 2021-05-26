import React from "react";

const PlantForm= (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.plant);
  const previewImgSrc = "";

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent PlantFormfrom Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
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
      <div>
        <label htmlFor="name" >Plant's Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="birthday" >Plant's Birthday: </label>
        <input
          type="date"
          name="birthday"
          id="birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
        </div>
      <div>
        <label htmlFor="img">Add A Photo (PNG or JPEG)</label>
        <input
          style={{opacity:0, height: "1px", width: "1px"}}
          type="file"
          name="img"
          id="img"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileSelect}
        />
      </div>
      <div className="img-preview" >
        {formData.img !== "" &&
        <img src={URL.createObjectURL(formData.img)} alt="plant preview"/>
        }
      </div>
      <input type="submit" value={props.label} />
    </form>
  );
};

export default PlantForm;
