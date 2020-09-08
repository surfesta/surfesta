import React from 'react';
import './maps.scss';
import { useState } from 'react';
const Maps = ({ Ref, setPlaceState }) => {
  const [_placeState, _setPlaceState] = useState('제강빌딩');
  const searchPlace = (e) => {
    if (e.keyCode !== 13) return;
    e.preventDefault();
    if (e.target.value.trim() === '') {
      return;
    }
    setPlaceState(e.target.value);
    _setPlaceState(e.target.value);
  };
  return (
    <>
      <input
        id="pac-input"
        type="text"
        placeholder="대한민국 서울특별시 성동구 성수2가3동 제강빌딩"
        ref={Ref}
        onKeyDown={searchPlace}
      />
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB_BJhQ4nBvi7cPxi8DRGJepYp4MbdtRcQ&q=${_placeState}`}
        frameBorder="0"
      />
    </>
  );
};

export default Maps;
