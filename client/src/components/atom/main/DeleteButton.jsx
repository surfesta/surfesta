import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Portal from '../../Portal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEnlistedEvent } from '../../../redux/modules/auth';
import { toggleEnlistedUser } from '../../../redux/modules/events';
import ConfirmModal from '../../molecule/eventCategories/ConfirmModal';

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
        <ConfirmModal toggleEnlisted={toggleEnlisted} setVisible={setVisible} />
      )}
    </>
  );
}
