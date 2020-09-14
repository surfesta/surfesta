import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Portal from '../../Portal';

export default function DeleteButton() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => {
          setVisible(true);
        }}
      >
        <DeleteIcon />
      </IconButton>

      {visible && (
        <Portal>
          <div
            id="modal-container"
            onClick={(e) => {
              if (!(e.target === e.currentTarget)) return;
              setVisible(false);
            }}
          >
            <div id="modal" className="confirm-modal">
              <h1>이벤트 참가를 취소할까요?</h1>
              <button className="cancel" onClick={() => setVisible(false)}>
                취소
              </button>
              <button className="confirm">확인</button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
