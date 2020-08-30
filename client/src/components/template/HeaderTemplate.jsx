import React, { useEffect } from 'react';
import Header from '../organism/Header';
import { useSelector, useDispatch } from 'react-redux';
import UserService from '../../services/UserService';
import Modal from '../organism/Modal';
import { cookieCheckSagaActionCreator } from '../../redux/modules/auth';

export default function HeaderTemplate() {
  const dispatch = useDispatch();
  const isModalOn = useSelector((state) => state.modal.isModalOn);

  useEffect(() => {
    dispatch(cookieCheckSagaActionCreator());
  }, []);

  return (
    <div>
      <Header />
      {isModalOn && <Modal />}
    </div>
  );
}
