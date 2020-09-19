import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Portal from '../../Portal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEnlistedEvent } from '../../../redux/modules/auth';
import { toggleEnlistedUser } from '../../../redux/modules/events';
import ConfirmModal from '../../molecule/eventCategories/ConfirmModal';

export default function EnlistedPageButtons({ event }) {
  const [visible, setVisible] = useState(false);
  const [qrSelect, setQrSelect] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const eventId = event._id;
  const userId = user && user._id;

  const toggleEnlisted = () => {
    dispatch(toggleEnlistedEvent(eventId, userId, false));
    dispatch(toggleEnlistedUser(eventId, userId, false));
    setVisible(false);
  };

  return (
    <>
      <button onClick={() => setQrSelect(true)} className='qr-img' />
      {qrSelect && (
        <Portal>
          <div
            id='modal-container'
            onClick={(e) => {
              if (!(e.target === e.currentTarget)) return;
              setQrSelect(false);
            }}
          >
            <div id='modal' className='confirm-modal'>
              <h1 style={{ marginBottom: '3rem' }}>내 QR코드</h1>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?data=${userId}&size=240x240`}
              />
            </div>
          </div>
        </Portal>
      )}
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
