import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startToggleFavInEvent,
  startToggleFavInUser,
  startGetEvents,
} from '../../../redux/modules/events';
import { welcomeModal } from '../../../redux/modules/modal';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { startGetUsers } from '../../../redux/modules/users';

export default function CardButtons({ event }) {
  const [select, setSelect] = useState(false);
  const buttonRef = useRef();
  const user = useSelector((state) => state.auth.user);
  const eventId = event._id;
  const likedUserIds = event.liked_users.map((user) => user._id);
  const userId = user && user._id;
  let likedEventIds = user === null ? [] : user.liked_events;

  const dispatch = useDispatch();

  useEffect(() => {
    event.liked_users.forEach((user) => {
      user._id === userId && setSelect(true);
    });
  }, [eventId, userId]);

  const viewModal = useCallback(() => {
    dispatch(welcomeModal('이 기능은 회원만 가능해요 😉'));
  }, [dispatch]);

  console.log('렌더링 유저아이디: ', userId);
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

  // let favEventIds = [];
  const toggleFavInUser = useCallback(() => {
    if (!select) {
      likedEventIds = [...likedEventIds, eventId];
    } else {
      likedEventIds = [...likedEventIds.filter((id) => id !== eventId)];
    }
    console.log('toggleFavInUser', likedEventIds, 'userId', userId);
    // const favEventIds = !select
    //   ? [...likedEventIds, eventId]
    //   : [...likedEventIds.filter((id) => id !== eventId)];
    // console.log('toggleFavInUser', favEventIds);
    dispatch(startToggleFavInUser(userId, likedEventIds));
  }, [select]);

  // console.log('렌더', select);

  const clickFav = () => {
    if (user === null) {
      viewModal();
      return;
    }

    setSelect(!select);
    // console.log('클릭', select);
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
