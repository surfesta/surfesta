import React from 'react';

export default function EventPlatform() {
  return (
    <>
      <h2 className="eventform-title" id="on-online">
        온라인 플랫폼
      </h2>
      <div className="event-sec" id="on-online">
        <div className="event-content">
          <p>참가자들이 이용할 플랫폼을 입력해주세요.</p>
        </div>
        <div className="input-box">
          <input required type="text" placeholder="Zoom 혹은 Youtube live 등" />
        </div>
      </div>
    </>
  );
}
