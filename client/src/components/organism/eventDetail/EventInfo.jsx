import React from 'react';
import './Eventinfo.scss';
import FavoriteButton from '../../atom/main/FavoriteButton';

export default function EventInfo({ event }) {
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
  return (
    <div className="eventInfo-wrap">
      <div className="top-fix">
        <div className="left">
          <h2>{title}</h2>
          <p>
            <span className="price">{price}</span>
            <span> 원</span>
          </p>
        </div>
        <div className="button-wrap right">
          <button className="enlist-button">이벤트 참석하기</button>
          <div className="fav-button">
            <FavoriteButton />
          </div>
        </div>
      </div>
      <div className="flex-wrap">
        <div className="left">
          <div
            className="thumbnail"
            style={{ backgroundImage: `url(${thumbnail})` }}
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
                    style={{ backgroundImage: `url(${hostProfileImg})` }}
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
                <th>참석 가능 자리</th>
                <td>
                  <span>{maxCount}</span>
                  <span>명</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="button-wrap">
            <button className="enlist-button">이벤트 참석하기</button>
            <div className="fav-button">
              <FavoriteButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
