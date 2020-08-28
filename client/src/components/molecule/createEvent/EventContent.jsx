import React from "react";
import ToastEditor from "./ToastEditor";

export default function EventContent({ Ref }) {
  return (
    <>
      <h2 className="eventform-title">내용</h2>
      <div className="event-sec">
        <div className="event-content">
          <p>행사의 상세한 내용을 알리는 글을 작성해주세요.</p>
        </div>
        <div className="input-box" id="editor"></div>
      </div>
      <ToastEditor />
    </>
  );
}
