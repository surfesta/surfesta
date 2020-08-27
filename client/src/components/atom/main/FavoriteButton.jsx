import React from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function FavoriteButton() {
  return (
    <IconButton aria-label='favorite'>
      <FavoriteIcon />
    </IconButton>
  );
}
