import React, { useState, useEffect, useCallback } from 'react';
import './Eventinfo.scss';
import FavoriteButton from '../../atom/main/FavoriteButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEnlistedUser } from '../../../redux/modules/events';
import { toggleEnlistedEvent } from '../../../redux/modules/auth';
import { welcomeModal } from '../../../redux/modules/modal';
import ConfirmModal from '../../molecule/eventDetail/ConfirmModal';

export default function EventInfo({ event }) {
  const dispatch = useDispatch();
  const [isEnlisted, setIsEnlisted] = useState(false);
  const [visible, setVisible] = useState(false);

  const eventId = event._id;
  const thumbnail = event.thumbnail;
  const startDate = event.event_date.start.date;
  const startTime = event.event_date.start.time;
  const endDate = event.event_date.end.date;
  const endTime = event.event_date.end.time;
  const title = event.title;
  const price = event.price.toLocaleString();
  const isOnline = event.isOnline;
  const onlinePlatform = event.online_platform;
  const loactionName = event.location.name;
  const loactionDetails = event.location.details;
  const hostProfileImg = event.host.profile_img;
  const hostName = event.host.username;
  const hostEmail = event.host.email;
  const maxCount = event.max_count;
  const curCount = event.cur_count;

  const user = useSelector((state) => state.auth.user);
  const userId = user && user._id;

  useEffect(() => {
    event.enlisted_users.map(
      (user) => user._id === userId && setIsEnlisted(true)
    );
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
    }, 1500);
  };

  const checkAuth = () => {
    userId && toggleEnlisted();
    !userId && viewModal();
  };

  return (
    <div className='eventInfo-wrap'>
      <div className='flex-wrap'>
        <div className='left'>
          <div
            className='thumbnail'
            style={thumbnail && { backgroundImage: `url(${thumbnail})` }}
          ></div>
        </div>
        <div className='right'>
          <h2>{title}</h2>
          <p>
            <span className='price'>{price}</span>
            <span> 원</span>
          </p>
          <table>
            <tbody>
              {isOnline && (
                <tr className='top-line'>
                  <th>온라인 플랫폼</th>
                  <td>{onlinePlatform}</td>
                </tr>
              )}
              {!isOnline && (
                <tr className='top-line'>
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
                  <span className='start'>
                    {startDate} {startTime}
                  </span>
                  <span>~ </span>
                  <span className='end'>
                    {endDate} {endTime}
                  </span>
                </td>
              </tr>
              <tr className='top-line'>
                <th>주최자</th>
                <td>
                  <span
                    className='host-thumbnail'
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

          <div className='button-wrap'>
            {!isEnlisted && maxCount !== curCount && (
              <button className='enlist-button' onClick={checkAuth}>
                이벤트 참석하기
              </button>
            )}
            {isEnlisted && (
              <button className='disable-button' disabled>
                이벤트 참석완료
              </button>
            )}
            {!isEnlisted && maxCount === curCount && (
              <button className='disable-button' disabled>
                현재 이벤트는 만석이에요.
              </button>
            )}
            <FavoriteButton event={event} />
          </div>
        </div>
      </div>

      {visible && <ConfirmModal setVisible={setVisible} />}
    </div>
  );
}
