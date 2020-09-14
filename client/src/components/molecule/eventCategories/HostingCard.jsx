import React from 'react';
import Card from '../../organism/main/Card';

function HostingCard({ events }) {
  return (
    <>
      {events &&
        events.map((event) => {
          return <Card event={event} key={event._id} />;
        })}
    </>
  );
}
export default HostingCard;
