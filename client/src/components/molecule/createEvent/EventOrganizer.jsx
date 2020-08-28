import React from "react";

export default function EventOrganizer({ Ref }) {
  return (
    <>
      <h2 className="eventform-title">주최자 연락처</h2>
      <div className="event-sec">
        <div className="event-content">
          <p>
            참가자들이 이벤트에 대해 문의할 수 있는 수단이 최소 한 개
            필요합니다. 이메일 혹은 전화번호중 최소 한 개는 입력해주세요.
            연락처는 이벤트 페이지에 노출됩니다.
          </p>
        </div>
        <div className="input-box">
          <input
            required
            type="text"
            placeholder="이메일 주소를 입력해주세요"
          />
          <input required type="text" placeholder="전화번호를 입력해주세요" />
        </div>
      </div>
    </>
  );
}
