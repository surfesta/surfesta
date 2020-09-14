import React from 'react';
import Card from '../../organism/main/Card';

function LikedCard({ events }) {
  return (
    <>
      {events &&
        events.map((event) => {
          return <Card event={event} />;
        })}
    </>
  );
}
export default LikedCard;
