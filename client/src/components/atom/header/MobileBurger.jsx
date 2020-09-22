import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

function MobileBurger(props) {
  return (
    <IconButton
      className="only-mobile mobile-burger mobile-menu-button"
      {...props}
    >
      <MenuIcon />
    </IconButton>
  );
}

export default React.memo(MobileBurger);
