import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const FavButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <FavoriteRoundedIcon className="header-fav-btn" />
  </IconButton>
);

export default FavButton;
