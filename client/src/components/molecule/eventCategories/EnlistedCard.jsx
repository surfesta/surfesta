import React from 'react';
import Card from '../../organism/main/Card';
export default function EnlistedCard({ events, loading, error, getEvents }) {
  React.useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <>
      {events &&
        events.map((event) => {
          return event.isOpen && <Card event={event} key={event._id} />;
        })}
    </>
  );
}
