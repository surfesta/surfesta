import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { welcomeModal } from '../../../redux/modules/modal';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function CardButtons({ event }) {
  const [select, setSelect] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const buttonRef = useRef();
  const eventId = event._id;
  const userId = user && user._id;
  const userIds =
    event.liked_users && event.liked_users.map((user) => user._id);

  useEffect(() => {
    event.liked_users &&
      event.liked_users.map((user) => {
        user._id === userId && setSelect(true);
      });
  }, [userId]);

  const viewModal = useCallback(() => {
    dispatch(welcomeModal('이 기능은 회원만 가능해요 😉'));
  }, [dispatch]);

  const clickFav = () => {
    if (user === null) {
      viewModal();
      return;
    }
    setSelect(!select);
  };

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
}
