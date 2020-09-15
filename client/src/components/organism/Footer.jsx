import React, { useCallback } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import Logo from '../atom/header/Logo';
import './Footer.scss';

export default function Footer() {
  const dispatch = useDispatch();
  const handleLogoClick = useCallback(() => {
    dispatch(push('/'));
  }, [dispatch]);

  return (
    <footer>
      <div className="flex-wrap">
        <Logo onClick={handleLogoClick} />
        <ul className="menu">
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              헬프 센터
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              서비스 이용약관
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              개인정보 처리 방침
            </a>
          </li>
        </ul>
      </div>
      <div className="detail-info">
        <ul>
          <li>
            <strong>(주)서페스타 (대표: 김가현, 김동욱, 김미연, 윤유비)</strong>
          </li>
          <li>
            <span>서울특별시 성동구 성수2가3동 289-10 제강빌딩 </span>
            <span>사업자등록번호 : 123-12-12345 </span>
            <span>통신판매번호 : 12345678</span>
          </li>
          <li>© Surfesta Inc. All Rights Reserved.</li>
        </ul>
      </div>
    </footer>
  );
}
