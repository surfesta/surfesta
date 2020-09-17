import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PeopleIcon from '@material-ui/icons/People';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Portal from '../../Portal';
import { deleteEvent } from '../../../redux/modules/events';
import axios from 'axios';
import { push } from 'connected-react-router';

export default function SettingButtons({ event }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const eventId = event._id;

  const goToHostOffice = () => dispatch(push(`/my/host/${eventId}`));

  const click = () => setVisible(true);

  const eventDelete = () => {
    // dispatch(deleteEvent(eventId));
    // setVisible(false);
    axios.delete(`/api/v1/events/${eventId}`); //임시
    window.location.reload(); //임시
  };

  return (
    <>
      <IconButton aria-label="enlistedUsers" onClick={goToHostOffice}>
        <PeopleIcon />
      </IconButton>
      <IconButton aria-label="edit">
        <Link
          to={{
            pathname: `/revise/${eventId}`,
            state: {
              event,
            },
          }}
        >
          <EditIcon />
        </Link>
      </IconButton>
      <IconButton aria-label="delete" onClick={click}>
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
