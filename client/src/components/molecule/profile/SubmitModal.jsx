import React, { useEffect } from "react";
import Portal from "../../Portal";
import "./SubmitModal.scss";

function SubmitModal({ setVisible }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "inherit");
  }, []);

  return (
    <Portal>
      <div
        id="modal-container"
        onClick={(e) => {
          if (!(e.target === e.currentTarget)) return;
          setVisible(false);
        }}
      >
        <div id="modal">
          <h1 className="modal-headline">회원 정보 수정이 완료되었습니다.</h1>
          <button className="confirm-btn" onClick={() => setVisible(false)}>
            확인
          </button>
        </div>
      </div>
    </Portal>
  );
}

export default SubmitModal;
