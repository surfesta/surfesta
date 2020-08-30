import React from 'react';

function ProfileBtn(props) {
  return (
    <div>
      <button className="profile-btn">{props.name}</button>
    </div>
  );
}

export default ProfileBtn;
