import React, { useEffect } from 'react';
import Maps from '../../molecule/createEvent/Maps';

export default function EventAddressDetail({ Ref, setPlaceState }) {
  return (
    <>
      <h2 className="eventform-title" id="off-online">
        상세 주소
      </h2>
      <div className="event-sec" id="off-online">
        <div className="event-content">
          <p>쉽게 찾아갈 수 있도록 정확한 주소를 입력해주세요.</p>
        </div>
        <div className="input-box">
          <Maps Ref={Ref} setPlaceState={setPlaceState} />
        </div>
      </div>
    </>
  );
}
