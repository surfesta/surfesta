import React from 'react';
import ProfileBtn from '../../atom/profile/ProfileBtn';

function DeactivateDiv(props) {
  return (
    <div className="deact-div">
      <div className="deact-title-div">
        <h3 className="deact-title">회원탈퇴</h3>
        <span>만나서 반가웠어요. 또 뵙기를 기대할게요!</span>
      </div>
      <div className="deact-btn-div">
        <ProfileBtn name="탈퇴 하기" />
      </div>
    </div>
  );
}

export default DeactivateDiv;
