import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Portal from '../../Portal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEnlistedEvent } from '../../../redux/modules/auth';
import { toggleEnlistedUser } from '../../../redux/modules/events';

export default function DeleteButton({ event }) {
  const [visible, setVisible] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const eventId = event && event._id;
  const userId = user && user._id;

  const toggleEnlisted = () => {
    dispatch(toggleEnlistedEvent(eventId, userId, false));
    dispatch(toggleEnlistedUser(eventId, userId, false));
    setVisible(false);
  };

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
              <button className="confirm" onClick={toggleEnlisted}>
                확인
              </button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
