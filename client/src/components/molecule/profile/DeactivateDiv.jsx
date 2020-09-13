import React from 'react';
import { useState } from 'react';
import ProfileBtn from '../../atom/profile/ProfileBtn';
import Portal from '../../Portal';

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
            console.log('??');
            setVisible(true);
          }}
          name="탈퇴 하기"
        />
      </div>
      {visible && (
        <Portal>
          <div
            id="modal-container"
            onClick={(e) => {
              if (!(e.target === e.currentTarget)) return;
              setVisible(false);
            }}
          >
            <div id="modal">
              <h1>진짜가누</h1>
              <button onClick={handleClick}>ㅇㅇ갑니다</button>
              <hr />
              <button onClick={() => setVisible(false)}>
                아뇨 잘 못 눌렷슴
              </button>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}

export default DeactivateDiv;
