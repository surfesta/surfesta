import React from 'react';
import Card from '../../organism/main/Card';

function HostingCards({ events, isOpen }) {
  return (
    <>
      {isOpen &&
        events.map((event) => {
          return event.isOpen && <Card event={event} key={event._id} />;
        })}
      {!isOpen &&
        events.map((event) => {
          return !event.isOpen && <Card event={event} key={event._id} />;
        })}
    </>
  );
}
export default HostingCards;
