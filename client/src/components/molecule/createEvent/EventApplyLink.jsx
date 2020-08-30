import React from 'react';

export default function EventApplyLink() {
  return (
    <>
      <h2 className="eventform-title">이벤트 신청 링크</h2>
      <div className="event-sec">
        <div className="event-content">
          <p>이벤트 신청을 누르면 이동할 링크를 넣어주세요.</p>
        </div>
        <div className="input-box">
          <input
            required
            type="text"
            placeholder="https://myawesomeevent.com/buytickets"
          />
        </div>
      </div>
    </>
  );
}
