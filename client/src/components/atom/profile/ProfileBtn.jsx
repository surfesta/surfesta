import React from "react";

function ProfileBtn({ name, handleSubmit }) {
  return (
    <button type="button" className="profile-btn" onClick={handleSubmit}>
      <div>{name}</div>
    </button>
  );
}

export default ProfileBtn;
