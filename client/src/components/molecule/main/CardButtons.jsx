import React, { useState, useRef } from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function CardButtons(event) {
  // console.log(event);
  const [select, setSelect] = useState(false);
  const buttonRef = useRef();

  return (
    <div className="cardButtons-wrap">
      <div
        className={select ? 'act favoriteButton-wrap' : 'favoriteButton-wrap'}
      >
        <IconButton aria-label="favorite" onClick={click} ref={buttonRef}>
          <FavoriteIcon />
        </IconButton>
      </div>

      {/* <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton> */}

      {/* <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton> */}
    </div>
  );

  function click({ target }) {
    setSelect(!select);
    console.log(select);
  }
}
