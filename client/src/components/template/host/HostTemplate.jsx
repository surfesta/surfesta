import React from 'react';
import { useSelector } from 'react-redux';
import AttendeeListing from '../../organism/AttendeeListing';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import './HostTemplate.scss';
import axios from 'axios';

export default function HostTemplate({ event_id }) {
  const events = useSelector((state) => state.events.events);
  const currentHostingEvent = events.find((event) => event._id === event_id);

  const getTargetEvent = async () => {
    const { data } = await axios.get(`/api/v1/events/${event_id}`);
    console.log(data);
    return data;
  };
  getTargetEvent();

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
        <button className="qr-reader-btn">
          <img src="https://img.icons8.com/fluent-systems-regular/1x/qr-code.png" />
          <span>QRCODE</span>
        </button>
      </section>
      <AttendeeListing event={currentHostingEvent} />
    </div>
  );
}
