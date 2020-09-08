import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startToggleFavInEvent,
  startGetEvents,
} from '../../../redux/modules/events';
import { welcomeModal } from '../../../redux/modules/modal';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { startToggleFavInUser } from '../../../redux/modules/user';

export default function CardButtons({ event }) {
  const [select, setSelect] = useState(false);
  const buttonRef = useRef();
  const user = useSelector((state) => state.user.user);
  // console.log('유저정보', user);
  // console.log('liked_events', user, user === [] ? '빈배열' : user.liked_events);

  const eventId = event._id;
  const likedUserIds = event.liked_users.map((user) => user._id);
  const userId = user && user._id;
  let likedEventIds = user === null ? [] : user.liked_events;
  // let likedEventIds =
  //   user === null ? [] : user.liked_events.map((event) => event._id);

  const dispatch = useDispatch();

  useEffect(() => {
    event.liked_users.forEach((user) => {
      user._id === userId && setSelect(true);
    });
  }, [eventId, userId]);

  const viewModal = useCallback(() => {
    dispatch(welcomeModal('이 기능은 회원만 가능해요 😉'));
  }, [dispatch]);

  const toggleFavInEvent = useCallback(() => {
    let favUserIds = [];
    if (!select) {
      favUserIds = [...likedUserIds, userId];
    } else {
      favUserIds = [...likedUserIds.filter((id) => id !== userId)];
    }

    // console.log('toggleFavInEvent', favUserIds);
    // dispatch(startToggleFavInEvent(eventId, favUserIds));
  }, [select, userId]);

  console.log('좋아요한이벤트', likedEventIds);
  const toggleFavInUser = useCallback(() => {
    // if (!select) {
    //   likedEventIds = [...likedEventIds, eventId];
    // } else {
    //   likedEventIds = [...likedEventIds.filter((id) => id !== eventId)];
    // }
    likedEventIds = [...likedEventIds, eventId];
    console.log('toggleFavInUser', likedEventIds, 'userId', userId);

    dispatch(startToggleFavInUser(userId, likedEventIds));
  }, [select, userId]);

  const clickFav = () => {
    if (user === null) {
      viewModal();
      return;
    }

    setSelect(!select);
    toggleFavInEvent();
    toggleFavInUser();
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
