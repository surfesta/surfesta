import React from 'react';
import Thumbnamil from '../atom/main/Thumbnail';
import CardContent from '../molecule/main/CardContent';
import './Card.scss';

export default function Card() {
  return (
    <div className='card'>
      <Thumbnamil />
      <CardContent />
    </div>
  );
}
