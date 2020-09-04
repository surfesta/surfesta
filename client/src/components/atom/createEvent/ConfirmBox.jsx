import React from 'react';
import './confirmbox.scss';
const ConfirmBox = ({
  yes,
  no,
  visible,
  onCancel,
  onConfirm,
  className,
  children,
}) => {
  const confirm = () => {
    onCancel();
    onConfirm();
  };
  return (
    <>
      {visible && (
        <div className="goback-modal-container">
          <div className="inner-modal">
            <div className="modal-body">{children}</div>
            <div className="modal-foot">
              <button onClick={() => onCancel()} type="button">
                {no}
              </button>
              <button onClick={confirm} type="button">
                {yes}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmBox;
