import React from 'react';
import Price from '../../atom/main/Price';
import IsOnline from '../../atom/main/IsOnline';
import Favorite from '../../atom/main/Favorite';
import Date from '../../atom/main/Date';
import Title from '../../atom/main/Title';
import Host from '../../atom/main/Host';

export default function CardContent() {
  return (
    <>
      <div>
        <Date />
        <Title />
        <Price />
        <IsOnline />
      </div>
      <div>
        <Host />
        <Favorite />
      </div>
    </>
  );
}
