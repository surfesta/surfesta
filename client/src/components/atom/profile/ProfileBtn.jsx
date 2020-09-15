import React from 'react';

function ProfileBtn({ name, handleClick }) {
  return (
    <button type="button" className="profile-btn" onClick={handleClick}>
      <div>{name}</div>
    </button>
  );
}

export default ProfileBtn;
