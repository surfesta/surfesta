import React from 'react';

export default function OfflineContent() {
  return (
    <div className='OfflineContent'>
      <div>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1093.5332439980473!2d127.05657308892782!3d37.54514038587329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca495c5b77f07%3A0x393d4d25c63b9b6!2z7KCc6rCV67mM65Sp!5e0!3m2!1sko!2skr!4v1598536924894!5m2!1sko!2skr'></iframe>
      </div>
      <ul>
        <li>
          <span>주소</span>
          <span>서울시 마포구 월드컵북로396</span>
        </li>
        <li>
          <span>상세 주소</span>
          <span>마포구 월드컵북로396 디지털파빌리온 3층</span>
        </li>
        <li>
          <span>장소 설명</span>
          <span>주차 장소가 협소합니다.</span>
        </li>
      </ul>
    </div>
  );
}
