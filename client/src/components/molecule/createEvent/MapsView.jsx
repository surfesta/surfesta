import React from 'react';

export default function MapsView() {
  return (
    <>
      <div id="map"></div>
      <div id="infowindow-content">
        <img src="" width="16" height="16" id="place-icon" />
        <span id="place-name" className="title"></span>
        <br />
        <span id="place-address"></span>
      </div>
    </>
  );
}
