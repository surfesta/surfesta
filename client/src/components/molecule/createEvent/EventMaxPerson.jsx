import React from "react";

export default function EventMaxPerson({ Ref }) {
  return (
    <>
      <h2 className="eventform-title">참석 가능 인원수</h2>
      <div className="event-sec">
        <div className="event-content">
          <p>이벤트에 대해 최대 참석 가능 인원수를 적어주세요.</p>
        </div>
        <div className="input-box">
          <input
            required
            type="text"
            placeholder="최대 참석 가능 인원수를 입력하세요."
          />
        </div>
      </div>
    </>
  );
}
