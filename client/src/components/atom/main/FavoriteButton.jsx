import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { welcomeModal } from '../../../redux/modules/modal';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { toggleLikedUser } from '../../../redux/modules/events';
import { toggleLikedEvent } from '../../../redux/modules/auth';

export default function FavoriteButton({ event }) {
  const [select, setSelect] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const eventId = event && event._id;
  const userId = user && user._id;

  useEffect(() => {
    event &&
      event.liked_users.forEach((user) => {
        user && user._id === userId && setSelect(true);
      });

    user &&
      user.liked_events.forEach((event) => {
        event && event._id === eventId && setSelect(true);
      });
  }, [userId, eventId]);

  const viewModal = useCallback(() => {
    dispatch(welcomeModal('이 기능은 회원만 가능해요 😉'));
  }, [dispatch]);

  const toggleLiked = (type) => {
    dispatch(toggleLikedUser(eventId, userId, type));
    dispatch(toggleLikedEvent(eventId, userId, type));
  };

  const checkAuth = () => {
    !userId && viewModal();
    userId && setSelect(!select);

    !select && toggleLiked(true);
    select && toggleLiked(false);
  };

  return (
    <div className={select ? 'act favoriteButton-wrap' : 'favoriteButton-wrap'}>
      <IconButton aria-label="favorite" onClick={checkAuth}>
        <FavoriteIcon />
      </IconButton>
    </div>
  );
}
