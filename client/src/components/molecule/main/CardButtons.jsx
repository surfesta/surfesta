import React from 'react';
import FavoriteButton from '../../atom/main/FavoriteButton';
import EnlistedPageButtons from '../../atom/main/EnlistedPageButtons';
import SettingButtons from '../../atom/main/SettingButtons';
import { history } from '../../../index';

export default function CardButtons({ event }) {
  const path = history.location.pathname;

  // page path
  const main = '/';
  const enlisted = '/my/event/enlisted';
  const hosting = '/my/event/hosting';
  const liked = '/my/event/liked';

  return (
    <div className='cardButtons-wrap'>
      {/* main, liked page */}
      {path !== enlisted && path !== hosting && (
        <FavoriteButton event={event} />
      )}

      {path === enlisted && <EnlistedPageButtons event={event} />}
      {path === hosting && <SettingButtons event={event} />}
    </div>
  );
}
