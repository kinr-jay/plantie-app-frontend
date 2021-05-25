import React, { useState } from "react"

const ProfileDropdown = ({ ddTitle, ddContent }) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="profile-dd">
      <div className="profile-dd-title">
        <p>{ddTitle}</p>
        <button onClick={handleClick}>
          {expanded ? (
            <i class="fas fa-chevron-up"></i>
          ) : (
            <i class="fas fa-chevron-down"></i>
          )}
        </button>
      </div>
      <div
        style={expanded ? { display: "block" } : { display: "none" }}
        id="dd-content"
      >
        {ddContent}
      </div>
    </div>
  )
}

export default ProfileDropdown
