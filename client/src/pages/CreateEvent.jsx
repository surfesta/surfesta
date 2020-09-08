import React from 'react';
import './createevent.scss';
import EventForm from '../components/template/createEvent/EventForm';
import HeaderTemplate from '../components/template/HeaderTemplate';

export default function CreateEvent() {
  return (
    <>
      <HeaderTemplate />
      <div className="create-event-wrap">
        <div className="w1300-container">
          <EventForm />
        </div>
      </div>
    </>
  );
}
