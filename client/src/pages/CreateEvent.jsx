import React from 'react';
import './createevent.scss';
import EventForm from '../components/template/createEvent/EventForm';

export default function CreateEvent() {
  return (
    <div className="create-event-wrap">
      <div className="w1300-container">
        <EventForm />
      </div>
    </div>
  );
}
