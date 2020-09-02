import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import CardContent from '../../molecule/main/CardContent';
import CardButtons from '../../molecule/main/CardButtons';

export default function Card(props) {
  const { event } = props;
  const eventId = props.event.host._id;
  return (
    event.isOpen && (
      <div className="card-wrap">
        <Link to={`event/${eventId}`}>
          <CardContent event={event} />
        </Link>
        <CardButtons event={event} />
      </div>
    )
  );
}
