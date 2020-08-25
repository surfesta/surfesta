import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

export default function FavButton() {
  return (
    <div>
      <IconButton>
        <FavoriteRoundedIcon />
      </IconButton>
    </div>
  );
}
