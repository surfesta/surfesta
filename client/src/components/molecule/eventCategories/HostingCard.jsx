import React from 'react';
import Card from '../../organism/main/Card';

function HostingCard({ events, isOpen }) {
  return (
    <>
      {events &&
        isOpen &&
        events.map((event) => {
          return event.isOpen && <Card event={event} key={event._id} />;
        })}
      {events &&
        !isOpen &&
        events.map((event) => {
          return !event.isOpen && <Card event={event} key={event._id} />;
        })}
    </>
  );
}
export default HostingCard;
