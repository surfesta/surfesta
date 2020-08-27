import React from 'react';
import { Link } from 'react-router-dom';
import LinkIcon from '@material-ui/icons/Link';
import OfflineInfo from '../../molecule/eventDetail/OfflineInfo';
import OnlineInfo from '../../molecule/eventDetail/OnlineInfo';
import FavoriteButton from '../../atom/main/FavoriteButton';

export default function EventInfo() {
  return (
    <div className='offlineInfo-wrap'>
      <div className='left'>
        <div className='thumbnail'></div>
      </div>
      <div className='right'>
        <h2>당근마켓 서버 개발 / SRE 채용 오픈세션</h2>
        <p>
          <span className='price'>10,000</span>
          <span>원</span>
        </p>
        <ul>
          <OfflineInfo />
          <OnlineInfo />
          <li>
            <span className='info-title'>일시</span>
            <span className='info-text'>
              <span>2020년 08월 26일 (수)</span>
              <span>오후 06:30 - 오후 09:00</span>
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span className='info-title'>
              주최자 <LinkIcon />
            </span>
            <Link to='/' className='info-text'>
              <span className='host-thumbnail'></span>
              <span>당근마켓</span>
            </Link>
          </li>
          <li>
            <span className='info-title'>주최자 이메일</span>
            <span className='info-text'>hhjj105@gmail.com</span>
          </li>
          <li>
            <span className='info-title'>주최자 핸드폰</span>
            <span className='info-text'>01024335715</span>
          </li>
          <li>
            <span className='info-title'>현재 참가자</span>
            <span className='info-text'>
              <span>171</span>
              <span>명</span>
            </span>
          </li>
          <li>
            <span className='info-title'>참석 가능 자리</span>
            <span className='info-text'>
              <span>29</span>
              <span>명</span>
            </span>
          </li>
        </ul>
        <div className='button-wrap'>
          <button>이벤트 참석하기</button>
          <div className='test'>
            <FavoriteButton />
          </div>
        </div>
      </div>
    </div>
  );
}
