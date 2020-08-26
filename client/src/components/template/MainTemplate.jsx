import React from 'react';
import Card from '../organism/Card';
import './MainTemplate.scss';

export default function MainTemplate() {
  return (
    <div className='cards'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
