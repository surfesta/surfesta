import React from "react";
import toggleVisibility from "../../molecule/profile/ProfileForm";

function ProfileBtn({ name, handleClick }) {
  return (
    <button type="button" className="profile-btn" onClick={handleClick}>
      <div>{name}</div>
    </button>
  );
}

export default ProfileBtn;
