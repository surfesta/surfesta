import React from 'react';
import FavoriteButton from '../../atom/main/FavoriteButton';
import SettingButton from '../../atom/main/SettingButton';
import DeleteButton from '../../atom/main/DeleteButton';

export default function CardButtons() {
  return (
    <div>
      <FavoriteButton />
      <SettingButton />
      <DeleteButton />
    </div>
  );
}
