import React from 'react';
import { useState } from 'react';
import QrReader from 'react-qr-reader';
import { useDispatch } from 'react-redux';
import { startAttendUser } from '../redux/modules/events';
import './qrscanner.scss';

export default function QrScanner({ match }) {
  const [result, setResult] = useState('QR Code를 스캔해주세요.');
  const dispatch = useDispatch();

  const handleScan = (data) => {
    if (data) {
      // find out there's user by server request
      // if theres user? call hem name and welcome hem.
      // no user? 'no user found'
      setResult(data);
    }
    dispatch(startAttendUser(match.params.event_id, data, true));
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="qr-container">
      <QrReader onError={handleError} onScan={handleScan} />
      <div className="qr-result">
        <p>{result}</p>
      </div>
    </div>
  );
}
