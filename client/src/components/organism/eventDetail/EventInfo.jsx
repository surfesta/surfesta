import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Eventinfo.scss';
import FavoriteButton from '../../atom/main/FavoriteButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEnlistedUser } from '../../../redux/modules/events';
import { toggleEnlistedEvent } from '../../../redux/modules/auth';
import { welcomeModal } from '../../../redux/modules/modal';
import Portal from '../../Portal';

export default function EventInfo({ event }) {
  const dispatch = useDispatch();
  const [isEnlisted, setIsEnlisted] = useState(false);
  const [visible, setVisible] = useState(false);
  const eventInfoBar = useRef();

  const eventId = event && event._id;
  const thumbnail = event && event.thumbnail;
  const startDate = event && event.event_date.start.date;
  const startTime = event && event.event_date.start.time;
  const endDate = event && event.event_date.end.date;
  const endTime = event && event.event_date.end.time;
  const title = event && event.title;
  const price = event && event.price.toLocaleString();
  const isOnline = event && event.isOnline;
  const onlinePlatform = event && event.online_platform;
  const loactionName = event && event.location.name;
  const loactionDetails = event && event.location.details;
  const hostProfileImg = event && event.host.profile_img;
  const hostName = event && event.host.username;
  const hostEmail = event && event.host.email;
  const maxCount = event && event.max_count;
  const curCount = event && event.cur_count;

  const user = useSelector((state) => state.auth.user);
  const userId = user && user._id;

  useEffect(() => {
    event &&
      event.enlisted_users.map(
        (user) => user._id === userId && setIsEnlisted(true)
      );

    // window.addEventListener('scroll', handleScroll);
    // return window.removeEventListener('scroll', handleScroll);
  }, [userId]);

  const viewModal = useCallback(() => {
    dispatch(welcomeModal('이 기능은 회원만 가능해요 😉'));
  }, [dispatch]);

  const toggleEnlisted = () => {
    dispatch(toggleEnlistedUser(eventId, userId));
    dispatch(toggleEnlistedEvent(eventId, userId));
    setIsEnlisted(!isEnlisted);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  const checkAuth = () => {
    userId && toggleEnlisted();
    !userId && viewModal();
  };

  const handleScroll = (e) => {
    window.scrollY > 690
      ? eventInfoBar.current.classList.add('show')
      : eventInfoBar.current.classList.remove('show');
  };

  return (
    <div className="eventInfo-wrap">
      <div className="eventInfo-bar" ref={eventInfoBar}>
        <div className="eventInfo-bar-wrap">
          <div className="left">
            <p className="title">{title}</p>
            <p>
              <span className="price">{price}</span>
              <span> 원</span>
            </p>
          </div>
          <div className="button-wrap right">
            {!isEnlisted && (
              <button className="enlist-button" onClick={checkAuth}>
                이벤트 참석하기
              </button>
            )}
            {isEnlisted && (
              <button className="disable-button" disabled>
                이벤트 참석완료
              </button>
            )}
            <FavoriteButton event={event} />
          </div>
        </div>
      </div>
      <div className="flex-wrap">
        <div className="left">
          <div
            className="thumbnail"
            style={thumbnail && { backgroundImage: `url(${thumbnail})` }}
          ></div>
        </div>
        <div className="right">
          <h2>{title}</h2>
          <p>
            <span className="price">{price}</span>
            <span> 원</span>
          </p>
          <table>
            <tbody>
              {isOnline ? (
                <tr className="top-line">
                  <th>온라인 플랫폼</th>
                  <td>{onlinePlatform}</td>
                </tr>
              ) : (
                <tr className="top-line">
                  <th>위치</th>
                  <td>
                    {loactionName}
                    <br />
                    {loactionDetails}
                  </td>
                </tr>
              )}
              <tr>
                <th>일시</th>
                <td>
                  <span className="start">
                    {startDate} {startTime}
                  </span>
                  <span>~ </span>
                  <span className="end">
                    {endDate} {endTime}
                  </span>
                </td>
              </tr>
              <tr className="top-line">
                <th>주최자</th>
                <td>
                  <span
                    className="host-thumbnail"
                    style={
                      hostProfileImg && {
                        backgroundImage: `url(${hostProfileImg})`,
                      }
                    }
                  ></span>
                  <span>{hostName}</span>
                </td>
              </tr>
              <tr>
                <th>주최자 이메일</th>
                <td>{hostEmail}</td>
              </tr>
              <tr>
                <th>현재 참가자</th>
                <td>
                  <span>{curCount}</span>
                  <span>명</span>
                </td>
              </tr>
              <tr>
                <th>참석 가능 인원</th>
                <td>
                  <span>{maxCount}</span>
                  <span>명</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="button-wrap">
            {!isEnlisted && (
              <button className="enlist-button" onClick={checkAuth}>
                이벤트 참석하기
              </button>
            )}
            {isEnlisted && (
              <button className="disable-button" disabled>
                이벤트 참석완료
              </button>
            )}
            <FavoriteButton event={event} />
          </div>
        </div>
      </div>

      {visible && (
        <Portal>
          <div
            id="modal-container"
            onClick={(e) => {
              if (!(e.target === e.currentTarget)) return;
              setVisible(false);
            }}
          >
            <div id="modal" className="confirm-modal">
              <h1>이벤트 참가신청이 완료되었습니다.</h1>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
