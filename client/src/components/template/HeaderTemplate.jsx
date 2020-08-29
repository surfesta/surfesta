import React, { useEffect } from 'react';
import Header from '../organism/Header';
import { useSelector } from 'react-redux';
import UserService from '../../services/UserService';
import Modal from '../organism/Modal';

export default function HeaderTemplate() {
  const isModalOn = useSelector((state) => state.modal.isModalOn);

  useEffect(() => {
    UserService.authenticate();
  }, []);

  return (
    <div>
      <Header />
      {isModalOn && <Modal />}
    </div>
  );
}
