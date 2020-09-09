import React from 'react';

export default function OfflineContent({ event }) {
  const loactionName = event && event.location.name;
  const loactionDetails = event && event.location.details;
  const loactionInfo = event && event.location.info;

  return (
    <div className="OfflineContent">
      <div className="iframe-wrap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1093.5332439980473!2d127.05657308892782!3d37.54514038587329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca495c5b77f07%3A0x393d4d25c63b9b6!2z7KCc6rCV67mM65Sp!5e0!3m2!1sko!2skr!4v1598536924894!5m2!1sko!2skr"></iframe>
        {/* <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB_BJhQ4nBvi7cPxi8DRGJepYp4MbdtRcQ&q=${event.location.details}`}
          frameBorder="0"
        ></iframe> */}
        {/* 위 부분인데 event에서 받아온 location.details를 &q=라는 파라미터에 넣어주시면 됩니당*/}
      </div>
      <table>
        <tbody>
          <tr>
            <th>주소</th>
            <td>{loactionName}</td>
          </tr>
          <tr>
            <th>상세 주소</th>
            <td>{loactionDetails}</td>
            {/* event.location.details는 지도 쿼리로 입력한 인풋 value입니다 아마 상세주소는 밑에 인포랑 좀 겹치는 감이 조금 있네요 이거는 따로 얘기해봐야될 거 같네요 */}
          </tr>
          <tr>
            <th>장소 설명</th>
            <td>{loactionInfo}.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
