import React from "react"
import { Link } from "react-router-dom"
import ProfileDropdown from "../components/ProfileDropdown"

const Profile = ({ garden }) => {
  return (
    <div className="profile-page">
      <h2>Hello {garden.firstName}!</h2>
      <ProfileDropdown
        dropDownTitle={"Account"}
        dropDownContent={
          <div>
            <p>Name: {garden.firstName + " " + garden.lastName}</p>
            <p>Email: {garden.email}</p>
            <Link to="/edit-account">
              <button>Edit Info</button>
            </Link>
          </div>
        }
      />
      <ProfileDropdown
        dropDownTitle={"Settings"}
        dropdownContent={
          <div>
            <p>Watering Units</p>
          </div>
        }
      />
      <ProfileDropdown
        dropDownTitle={"Terms of Use"}
        dropdownContent={
          <div>
            <p>
              By using our application, you agree to allow us to harvest your
              plants for any reason during a waxing or waning crescent moon.
            </p>
          </div>
        }
      />
      <ProfileDropdown
        dropDownTitle={"Privacy Policy"}
        dropdownContent={
          <div>
            <p>
              We value your privacy, so we will only sell your data if we get a
              really, really good deal.
            </p>
          </div>
        }
      />
      <h3>Need some help?</h3>
      <p>
        If you have any questions or need some help from the pant experts, just
        contact us.
      </p>
      <button className="contact-btn">Contact Us</button>
      <button className="logout-btn">Logout</button>
    </div>
  )
}

export default Profile
