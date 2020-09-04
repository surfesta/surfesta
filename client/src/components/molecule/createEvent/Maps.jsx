import React from 'react';
import './maps.scss';
import MapsView from './MapsView';
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
      <MapsView />
    </>
  );
};

export default Maps;
