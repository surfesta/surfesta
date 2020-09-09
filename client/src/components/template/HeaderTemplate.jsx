import React, { useEffect } from 'react';
import Header from '../organism/Header';
import { useSelector, useDispatch } from 'react-redux';
import UserService from '../../services/UserService';
import Modal from '../organism/Modal';

export default function HeaderTemplate() {
  const dispatch = useDispatch();
  const isModalOn = useSelector((state) => state.modal.isModalOn);

  return (
    <div>
      <Header />
      {isModalOn && <Modal />}
    </div>
  );
}
