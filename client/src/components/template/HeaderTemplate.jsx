import React from 'react';
import Header from '../organism/Header';
import Modal from '../organism/Modal';
import { useSelector } from 'react-redux';

export default function HeaderTemplate() {
  const isModalOn = useSelector((state) => state.modal.isModalOn);
  return (
    <div>
      <Header />
      {isModalOn && <Modal />}
    </div>
  );
}
