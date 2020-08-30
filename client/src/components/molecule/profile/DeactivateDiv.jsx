import React from 'react';
import ProfileBtn from '../../atom/profile/ProfileBtn';

function DeactivateDiv(props) {
  return (
    <div className="deact-div">
      <div className="deact-title-div">
        <span className="title">회원탈퇴</span>
        <span>만나서 반가웠어요. 또 뵙기를 기대할게요!</span>
      </div>
      <div className="deact-btn-div">
        <ProfileBtn name="탈퇴 하기" />
      </div>
    </div>
  );
}

export default DeactivateDiv;
