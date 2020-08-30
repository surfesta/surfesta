import React from 'react';
import Price from '../../atom/main/Price';
import IsOnline from '../../atom/main/IsOnline';
import Date from '../../atom/main/Date';
import Title from '../../atom/main/Title';
import Host from '../../atom/main/Host';
import Thumbnamil from '../../atom/main/Thumbnail';

export default function CardContent() {
  return (
    <>
      <div>
        <Thumbnamil />
      </div>
      <div>
        <Date />
        <Title />
        <Price />
        <IsOnline />
      </div>
      <div>
        <Host />
      </div>
    </>
  );
}
