import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startToggleFavInEvent } from '../../../redux/modules/events';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function CardButtons({ event }) {
  const [select, setSelect] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const buttonRef = useRef();
  const eventId = event._id;
  const userId = user._id;
  const userIds = event.liked_users.map((user) => user._id);

  const dispatch = useDispatch();

  useEffect(() => {
    event.liked_users.map((user) => {
      user._id === userId && setSelect(true);
    });
  }, []);

  return (
    <div className="cardButtons-wrap">
      <div
        className={select ? 'act favoriteButton-wrap' : 'favoriteButton-wrap'}
      >
        <IconButton aria-label="favorite" onClick={clickFav} ref={buttonRef}>
          <FavoriteIcon />
        </IconButton>
      </div>

      <div>
        {/* <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton> */}

        {/* <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton> */}
      </div>
    </div>
  );

  function toggleFavInEvent() {
    const favUserIds = !select
      ? [...userIds, userId]
      : [...userIds.filter((id) => id !== userId)];

    dispatch(startToggleFavInEvent(eventId, favUserIds));
  }

  function clickFav() {
    setSelect(!select);
    toggleFavInEvent();
  }
}
