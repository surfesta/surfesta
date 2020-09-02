import React from 'react';

export default function EventAddressDetailPlus({ Ref }) {
  return (
    <>
      <h2 className="eventform-title" id="off-online">
        장소 설명
      </h2>
      <div className="event-sec" id="off-online">
        <div className="event-content">
          <p>장소에 대해 안내가 필요하다면 적어주세요.</p>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="주차는 인근 주차장에서 가능합니다."
            ref={Ref}
          />
        </div>
      </div>
    </>
  );
}
