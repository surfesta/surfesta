import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';
import FavoriteButton from '../../atom/main/FavoriteButton';
import DeleteButton from '../../atom/main/DeleteButton';
import SettingButtons from '../../atom/main/SettingButtons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { history } from '../../../index';

export default function CardButtons({ event }) {
  const path = history.location.pathname;
  const main = '/';
  const enlisted = '/my/event/enlisted';
  const hosting = '/my/event/hosting';

  return (
    <div className="cardButtons-wrap">
      {path === main && <FavoriteButton event={event} />}
      {path === enlisted && <DeleteButton />}
      {path === hosting && <SettingButtons />}
    </div>
  );
}
