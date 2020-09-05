import React from 'react';
import './maps.scss';
const Maps = ({ Ref, preventDefault }) => {
  return (
    <>
      <input
        id="pac-input"
        type="text"
        placeholder="대한민국 서울특별시 성동구 성수2가3동 제강빌딩"
        ref={Ref}
        onKeyDown={preventDefault}
      />
      <div id="map"></div>
      <div id="infowindow-content">
        <img src="" width="16" height="16" id="place-icon" />
        <span id="place-name" className="title"></span>
        <br />
        <span id="place-address"></span>
      </div>
    </>
  );
};

export default Maps;
