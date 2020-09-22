import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { push } from 'connected-react-router';
import { deleteEvent } from '../../../redux/modules/events';
import { deleteHosting } from '../../../redux/modules/auth';
import Portal from '../../Portal';

export default function SettingButtons({ event }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [visible, setVisible] = useState(false);

  const eventId = event._id;
  const userId = user._id;

  function eventDelete() {
    dispatch(deleteEvent(eventId));
    dispatch(deleteHosting(eventId, userId, false));
    setVisible(false);
  }

  return (
    <>
      <Link
        to={{
          pathname: `/my/host/${eventId}`,
        }}
      >
        <IconButton aria-label="enlistedUsers">
          <PeopleIcon />
        </IconButton>
      </Link>
      <IconButton aria-label="edit">
        <Link
          to={{
            pathname: `/reviseEvent/${eventId}`,
            state: {
              event,
            },
          }}
        >
          <EditIcon />
        </Link>
      </IconButton>
      <IconButton aria-label="delete" onClick={setVisible}>
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
              <h1>이벤트를 삭제할까요?</h1>
              <button className="cancel" onClick={() => setVisible(false)}>
                취소
              </button>
              <button className="confirm" onClick={eventDelete}>
                확인
              </button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
