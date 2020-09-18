import React from 'react';
import { useSelector } from 'react-redux';
import AttendeeListing from '../../organism/AttendeeListing';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import './HostTemplate.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HostTemplate({ event_id }) {
  const events = useSelector((state) => state.events.events);
  const currentHostingEvent = events.find((event) => event._id === event_id);
  console.log(currentHostingEvent);
  const getTargetEvent = async () => {
    const BASE_URL =
      navigator.userAgent === 'ReactSnap'
        ? 'http://ec2-15-164-210-226.ap-northeast-2.compute.amazonaws.com:5000'
        : '';
    const { data } = await axios.get(`${BASE_URL}/api/v1/events/${event_id}`);
    console.log(data);
    return data;
  };

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
          <h1>{currentHostingEvent && currentHostingEvent.title}</h1>
          <div className="attendee-counter">
            <div>2명 참석</div>
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
      <AttendeeListing event={currentHostingEvent} />
    </div>
  );
}
