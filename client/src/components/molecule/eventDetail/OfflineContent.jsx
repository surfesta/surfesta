import React from 'react';

export default function OfflineContent({ event }) {
  const loactionName = event && event.location.name;
  const loactionDetails = event && event.location.details;
  const loactionInfo = event && event.location.info;

  return (
    <div className="OfflineContent">
      <div className="iframe-wrap">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB_BJhQ4nBvi7cPxi8DRGJepYp4MbdtRcQ&q=${loactionDetails}`}
          frameBorder="0"
          title="구글맵"
        ></iframe>
      </div>
      <table>
        <tbody>
          <tr>
            <th>장소</th>
            <td>{loactionName}</td>
          </tr>
          <tr>
            <th>상세 주소</th>
            <td>{loactionDetails}</td>
          </tr>
          <tr>
            <th>장소 설명</th>
            <td>{loactionInfo}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
