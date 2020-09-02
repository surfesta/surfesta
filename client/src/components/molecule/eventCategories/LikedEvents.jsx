import React from 'react';
import Card from '../../organism/Card';

function LikedEvents(props) {
  return (
    <div>
      <h1>찜한 이벤트</h1>
      <section className="cards">
        <Card eventId={1} />
        <Card eventId={2} />
        <Card eventId={3} />
        <Card eventId={4} />
        <Card eventId={5} />
        <Card eventId={6} />
        <Card eventId={7} />
        <Card eventId={8} />
      </section>
    </div>
  );
}

export default LikedEvents;
