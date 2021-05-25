import React from "react"
import ProfileDropdown from "../components/ProfileDropdown"

const Profile = () => {
  return (
    <div className="profile-page">
      <h2>Hello Annie!</h2>
      <ProfileDropdown
        ddTitle={"Account"}
        ddContent={
          <div>
            <p>Name</p>
            <p>Email</p>
            <p>Password</p>
          </div>
        }
      />
      <ProfileDropdown
        ddTitle={"Settings"}
        ddContent={
          <div>
            <p>Watering Units</p>
          </div>
        }
      />
      <ProfileDropdown
        ddTitle={"Terms of Use"}
        ddContent={
          <div>
            <p>
              By using our application, you agree to allow us to harvest your
              plants for any reason during a waxing or waning crescent moon.
            </p>
          </div>
        }
      />
      <ProfileDropdown
        ddTitle={"Privacy Policy"}
        ddContent={
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
    </div>
  )
}

export default Profile
