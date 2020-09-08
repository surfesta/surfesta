import React from 'react';

function ProfileBtn(props) {
  return (
    <div>
      <button className="profile-btn" onClick={props.handleClick}>
        {props.name}
      </button>
    </div>
  );
}

export default ProfileBtn;
