import React from 'react';
import FileUpload from './FileUpload';

export default function EventThumbnail({ Ref }) {
  return (
    <>
      <h2 className="eventform-title">대표 이미지</h2>
      <div className="event-sec">
        <div className="event-content">
          <p>이미지에 글자가 많으면 매력적이지 않습니다.</p>
        </div>
        <div className="input-box">
          <FileUpload Ref={Ref} />
        </div>
      </div>
    </>
  );
}
