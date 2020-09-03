import React, { useEffect } from 'react';
import './createevent.scss';
import EventForm from '../components/template/createEvent/EventForm';
import useAuth from '../utils/useAuth';

export default function CreateEvent() {
  useAuth();
  //쿠키 읽어들이는 로직
  return (
    <div className="create-event-wrap">
      <div className="w1440-container">
        <EventForm />
      </div>
    </div>
  );
}
