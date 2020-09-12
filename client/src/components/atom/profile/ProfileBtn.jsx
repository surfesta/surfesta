import React from 'react';

function ProfileBtn(props) {
  return (
    <button type="button" className="profile-btn" onClick={props.handleClick}>
      {props.name}
    </button>
  );
}

export default ProfileBtn;
