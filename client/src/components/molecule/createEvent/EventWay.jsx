import React from 'react';

export default function EventWay({ Ref }) {
  return (
    <>
      <h2 className="eventform-title" id="on-online">
        참여 방법
      </h2>
      <div className="event-sec" id="on-online">
        <div className="event-content">
          <p>참가자들이 온라인 이벤트로 찾아갈 수 있는 방법을 설명해주세요.</p>
        </div>
        <div className="input-box">
          <input
            ref={Ref}
            type="text"
            placeholder="시작 당일 2시간 전에 개별 이메일로 Zoom 링크를 발송할 예정입니다."
          />
        </div>
      </div>
    </>
  );
}
