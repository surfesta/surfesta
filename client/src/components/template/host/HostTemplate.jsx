import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AttendeeListing from '../../organism/AttendeeListing';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import './HostTemplate.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EventService from '../../../services/EventService';
import { startAttendUser } from '../../../redux/modules/events';
import { useCallback } from 'react';

export default function HostTemplate({ event_id }) {
  const events = useSelector((state) => state.events.events);
  const hostingEvent = events.find((event) => event._id === event_id);
  const [attend_acount, setAttendAcount] = useState(0);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (user_id, type) => {
      dispatch(startAttendUser(event_id, user_id, type));
      setAttendAcount(hostingEvent.attendance_acount);
    },
    [dispatch, hostingEvent],
  );

  return (
    <div className="host-template">
      <section className="enlisted-list-header">
        <div className="list-sub-header">
          <IconButton className="mui-arrow">
            <ArrowBackIosIcon />
          </IconButton>
          <div>이벤트 참가신청 리스트</div>
        </div>
        <div className="list-main-header">
          <h1>{hostingEvent && hostingEvent.title}</h1>
          <div className="attendee-counter">
            <div>{attend_acount}명 참석</div>
          </div>
        </div>
      </section>
      <section className="enlisted-list-features">
        <div className="listed-user-search">
          <input type="text" placeholder="검색하기" />
          <SearchIcon />
        </div>
        <Link className="qr-reader-btn" to="/qr">
          <img src="https://img.icons8.com/fluent-systems-regular/1x/qr-code.png" />
          <span>QRCODE</span>
        </Link>
      </section>
      <AttendeeListing
        hostingEvent={hostingEvent}
        handleClick={handleClick}
        setAttendAcount={setAttendAcount}
      />
    </div>
  );
}
