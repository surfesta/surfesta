import React from 'react';

function ProfileBtn({ name, handleClick }) {
  return (
    <button type="button" className="profile-btn" onClick={handleClick}>
      {name}
    </button>
  );
}

export default ProfileBtn;
