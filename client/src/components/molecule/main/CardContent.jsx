import React from 'react';
import Price from '../../atom/main/Price';
import IsOnline from '../../atom/main/IsOnline';
import Date from '../../atom/main/Date';
import Title from '../../atom/main/Title';
import Host from '../../atom/main/Host';
import FavoriteButton from '../../atom/main/FavoriteButton';
import SettingButton from '../../atom/main/SettingButton';
import DeleteButton from '../../atom/main/DeleteButton';

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
        <FavoriteButton />
        <SettingButton />
        <DeleteButton />
      </div>
    </>
  );
}
