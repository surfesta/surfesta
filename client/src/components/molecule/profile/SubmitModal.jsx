import React, { useState } from "react";
import "./SubmitModal.scss";

function SubmitModal({ handleClick }) {
  const modalContainer = {
    backgroundColor: "#181818",
    width: "500px",
    height: "200px",
  };
  const modalTitle = {
    fontColor: "#fff",
    fontSize: "20px",
  };
  return (
    <div style={modalContainer}>
      <h1 style={modalTitle} className="modal-headline">
        회원 정보 수정이 완료되었습니다.
      </h1>
      <button className="submit-confirm-btn" onClick={handleClick}>
        확인
      </button>
    </div>
  );
}

export default SubmitModal;
