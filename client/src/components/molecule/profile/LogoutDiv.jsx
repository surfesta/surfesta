import React from 'react';
import ProfileBtn from '../../atom/profile/ProfileBtn';
import Title from '../../atom/main/Title';

function LogoutDiv(props) {
  return (
    <div className="logout-div">
      <div className="logout-title-div">
        <span className="title">로그아웃</span>
        <span>곧 다시 돌아오실 거죠?</span>
      </div>
      <div className="btn-div">
        <ProfileBtn name="로그아웃 하기" />
      </div>
    </div>
  );
}

export default LogoutDiv;
