import React from 'react';
import { useRef, useEffect, useCallback } from 'react';
// import { useScrollFadeIn } from '@/hooks';

import './Eventinfo.scss';
import OfflineInfo from '../../molecule/eventDetail/OfflineInfo';
import OnlineInfo from '../../molecule/eventDetail/OnlineInfo';
import FavoriteButton from '../../atom/main/FavoriteButton';

export default function EventInfo() {
  const targetRef = useRef();
  const useScrollFadeIn = () => {
    const dom = useRef();

    const handleScroll = useCallback(([entry]) => {
      const { current } = dom;

      if (entry.isIntersecting) {
        console.log(targetRef);
        targetRef.current.classList.remove('show');
      } else {
        targetRef.current.classList.add('show');
      }
    }, []);

    useEffect(() => {
      let observer;
      const { current } = dom;

      if (current) {
        observer = new IntersectionObserver(handleScroll, {
          threshold: 0.2,
        });
        observer.observe(current);

        return () => observer && observer.disconnect();
      }
    }, [handleScroll]);

    return {
      ref: dom,
      // style: {
      //   opacity: 0,
      //   transform: 'translate3d(0, 50%, 0)',
      // },
    };
  };

  const animatedItem = useScrollFadeIn();

  return (
    <div className="offlineInfo-wrap" {...animatedItem}>
      <div className="top-fix" ref={targetRef}>
        <div className="left">
          <h2>당근마켓 서버 개발 / SRE 채용 오픈세션</h2>
          <p>
            <span className="price">10,000</span>
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
              <OnlineInfo />
              <OfflineInfo />
              <tr>
                <th>일시</th>
                <td>
                  <span className="date">2020년 08월 26일 (수)</span>
                  <span className="time">
                    오후 06:30 - 오후 09:00
                  </span>
                </td>
              </tr>
              <tr className="top-line">
                <th>주최자</th>
                <td>
                  <span className="host-thumbnail"></span>
                  <span>당근마켓</span>
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
