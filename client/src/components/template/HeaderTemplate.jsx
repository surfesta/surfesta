import React from 'react';
import Header from '../organism/Header';
import { useSelector } from 'react-redux';
import Modal from '../organism/Modal';

export default function HeaderTemplate() {
  const isModalOn = useSelector((state) => state.modal.isModalOn);

  return (
    <header>
      <Header />
      {isModalOn && <Modal />}
    </header>
  );
}
