import React, { useState } from "react"

const ProfileDropdown = ({ dropDownTitle, dropDownContent }) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="profile-dd">
      <div className="profile-dd-title">
        <p>{dropDownTitle}</p>
        <button className="toggle" onClick={handleClick}>
          {expanded ? (
            <i class="fas fa-chevron-up"></i>
          ) : (
            <i class="fas fa-chevron-down"></i>
          )}
        </button>
      </div>
      <hr />
      <div
        style={expanded ? { display: "block" } : { display: "none" }}
        id="dd-content"
      >
        {dropDownContent}
      </div>
    </div>
  )
}

export default ProfileDropdown
