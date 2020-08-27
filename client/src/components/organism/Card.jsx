import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import CardContent from '../molecule/main/CardContent';
import CardButtons from '../molecule/main/CardButtons';

export default function Card(props) {
  const { eventId } = props;
  return (
    <div className='card'>
      <Link to={`event/${eventId}`}>
        <CardContent />
      </Link>
      <CardButtons />
    </div>
  );
}
