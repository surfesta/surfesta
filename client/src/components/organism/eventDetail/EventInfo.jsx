import React from 'react';
import { Link } from 'react-router-dom';
import './Eventinfo.scss';
import LinkIcon from '@material-ui/icons/Link';
import OfflineInfo from '../../molecule/eventDetail/OfflineInfo';
import OnlineInfo from '../../molecule/eventDetail/OnlineInfo';
import FavoriteButton from '../../atom/main/FavoriteButton';

export default function EventInfo() {
  return (
    <div className="offlineInfo-wrap">
      <div className="left">
        <div className="thumbnail"></div>
      </div>
      <div className="right">
        <h2>당근마켓 서버 개발 / SRE 채용 오픈세션</h2>
        <p>
          <span className="price">10,000</span>
          <span> 원</span>
        </p>
        <table>
          <tbody>
            <OfflineInfo />
            <OnlineInfo />

            <tr>
              <th>일시</th>
              <td>
                <span className="date">2020년 08월 26일 (수)</span>
                <span className="time">오후 06:30 - 오후 09:00</span>
              </td>
            </tr>
            <tr>
              <th>
                주최자 <LinkIcon />
              </th>
              <td>
                <Link to="/" className="info-text">
                  <span className="host-thumbnail">img</span>
                  <span>당근마켓</span>
                </Link>
              </td>
            </tr>
            <tr>
              <th>주최자 이메일</th>
              <td>hhjj105@gmail.com</td>
            </tr>
            <tr>
              <th>주최자 연락처</th>
              <td>01024335715</td>
            </tr>
            <tr>
              <th>현재 참가자</th>
              <td>
                <span>171</span>
                <span>명</span>
              </td>
            </tr>
            <tr>
              <th>참석 가능 자리</th>
              <td>
                <span>29</span>
                <span>명</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="button-wrap">
          <button>이벤트 참석하기</button>
          <div className="test">
            <FavoriteButton />
          </div>
        </div>
      </div>
    </div>
  );
}
