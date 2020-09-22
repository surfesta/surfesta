import React from 'react';
import ProfileBtn from '../../atom/profile/ProfileBtn';

function LogoutDiv(props) {
  return (
    <div className="logout-div">
      <div className="logout-title-div">
        <h3 className="logout-title">로그아웃</h3>
        <span>곧 다시 돌아오실 거죠?</span>
      </div>
      <div className="logout-btn-div">
        <ProfileBtn name="로그아웃 하기" handleClick={props.handleClick} />
      </div>
    </div>
  );
}

export default LogoutDiv;
