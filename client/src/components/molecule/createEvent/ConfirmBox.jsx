import React from "react";
import Portal from "../../Portal";
const ConfirmBox = ({ yes, no, visible, onCancel, onConfirm, children }) => {
  const confirm = () => {
    onCancel();
    onConfirm();
  };
  return (
    <>
      {visible && (
        <Portal>
          <div
            id="modal-container"
            onClick={(e) => {
              if (!(e.target === e.currentTarget)) return;
              onCancel();
            }}
          >
            <div id="modal" className="confirm-modal">
              <h1>{children}</h1>
              <button
                className="cancel"
                onClick={() => onCancel()}
                type="button"
              >
                {no}
              </button>
              <button className="confirm" onClick={confirm} type="button">
                {yes}
              </button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default ConfirmBox;
