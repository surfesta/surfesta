import React from 'react';
import FileUpload from '../../molecule/createEvent/FileUpload';

export default function EventThumbnail({ inputRef, imgRef }) {
  return (
    <>
      <h2 className="eventform-title">대표 이미지</h2>
      <div className="event-sec">
        <div className="event-content">
          <p>이미지 중심의 매력적인 대표 이미지를 올려주세요.</p>
        </div>
        <div className="input-box">
          <FileUpload inputRef={inputRef} imgRef={imgRef} />
        </div>
      </div>
    </>
  );
}
