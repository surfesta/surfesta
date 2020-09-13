import React from 'react';
import ToastEditor from './ToastEditor';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function EventContent({ Ref, initValue }) {
  const queryRef = useRef(null);
  useEffect(() => {
    queryRef.current.nextElementSibling
      .querySelectorAll('.tui-editor-contents')
      .forEach((item, i) => {
        if (i === 0) return;
        item.innerHTML = initValue;
      });
  }, []);
  return (
    <>
      <h2 className="eventform-title">내용</h2>
      <div className="event-sec" ref={queryRef}>
        <div className="event-content">
          <p>행사의 상세한 내용을 알리는 글을 작성해주세요.</p>
        </div>
        <div className="input-box" id="editor"></div>
      </div>
      <ToastEditor Ref={Ref} />
    </>
  );
}
