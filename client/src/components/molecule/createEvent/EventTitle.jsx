import React from 'react';

export default function EventTitle({ Ref }) {
  return (
    <>
      <h2 className="eventform-title">이벤트 제목</h2>
      <div className="event-sec">
        <div className="event-content">
          <p>
            메인 리스트 영역에 노출되는 제목입니다. 해당 이벤트에 대한 제목을
            입력해주세요.
          </p>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="멋진 제목을 입력해주세요."
            ref={Ref}
          />
        </div>
      </div>
    </>
  );
}
