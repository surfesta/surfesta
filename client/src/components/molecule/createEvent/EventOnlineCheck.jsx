import React from "react";

export default function EventOnlineCheck({ toggle, Ref }) {
  return (
    <>
      <h2 className="eventform-title">온라인 여부</h2>
      <div className="event-sec">
        <div className="event-content">
          <p>
            온라인으로 이벤트를 진행하시면 장소와 상세 주소 대신 참여 방법을
            안내합니다.
          </p>
        </div>
        <div className="input-box label-box">
          <input
            ref={Ref}
            onChange={toggle}
            type="checkbox"
            defaultChecked={false}
            id="onlinecheck"
          />
          <label className="custom-label" htmlFor="onlinecheck"></label>
          <span
            className="not"
            onClick={(e) => {
              toggle(e);
              Ref.current.checked = Ref.current.checked ? false : true;
            }}
          >
            아니요, 오프라인으로 진행할게요!
          </span>
          <span
            className="yes"
            onClick={(e) => {
              toggle(e);
              Ref.current.checked = Ref.current.checked ? false : true;
            }}
          >
            네, 온라인으로 진행할게요!
          </span>
        </div>
      </div>
    </>
  );
}
