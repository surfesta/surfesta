import React, { useEffect } from 'react';
import Portal from '../../Portal';
import './DeactivateModal.scss';

export default function DeactivateModal({ handleClick, setVisible }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'inherit');
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
        <div id="modal" className="deact">
          <h1 className="modal-headline ">정말 떠나시나요?😥</h1>
          <button
            className="deactivate-button cancel"
            onClick={() => setVisible(false)}
          >
            취소
          </button>
          <button className="deactivate-button confirm" onClick={handleClick}>
            확인
          </button>
        </div>
      </div>
    </Portal>
  );
}
