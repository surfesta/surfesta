import React from 'react';
import { useState } from 'react';
import ProfileBtn from '../../atom/profile/ProfileBtn';
import Portal from '../../Portal';
import DeactivateModal from './DeactivateModal';

function DeactivateDiv({ handleClick }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="deact-div">
      <div className="deact-title-div">
        <h3 className="deact-title">회원탈퇴</h3>
        <span>만나서 반가웠어요. 또 뵙기를 기대할게요!</span>
      </div>
      <div className="deact-btn-div">
        <ProfileBtn
          handleClick={() => {
            setVisible(true);
          }}
          name="탈퇴 하기"
        />
      </div>
      {visible && <DeactivateModal handleClick={handleClick} setVisible={setVisible} />}
    </div>
  );
}

export default DeactivateDiv;
