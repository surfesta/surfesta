import React, { useEffect } from 'react';
import Maps from '../../molecule/createEvent/Maps';

export default function EventAddressDetail({
  Ref,
  preventDefault,
  setPlaceState,
}) {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.5452446, lng: 127.0570452 },
      zoom: 17,
    });
    const card = document.getElementById('pac-card');
    const pacInput = document.getElementById('pac-input');
    map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(card);
    const autocomplete = new window.google.maps.places.Autocomplete(pacInput);
    autocomplete.bindTo('bounds', map);
    autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);
    const infowindow = new window.google.maps.InfoWindow();
    const infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    const marker = new window.google.maps.Marker({
      map,
      anchorPoint: new window.google.maps.Point(0, -29),
      position: map.center,
      zoom: 13,
    });

    infowindowContent.children['place-icon'].src =
      'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png';
    infowindowContent.children['place-name'].textContent = '제강빌딩';
    infowindowContent.children['place-address'].textContent =
      '２８９−１０ 성수2가3동 성동구';
    infowindow.open(map, marker);
    autocomplete.addListener();
    autocomplete.addListener('place_changed', () => {
      infowindow.close();
      marker.setVisible(false);
      const place = autocomplete.getPlace();

      if (!place.geometry) {
        window.alert('아래 자동완성 기능을 이용해주세요.');
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
      let address = '';

      if (place.address_components) {
        address = [
          (place.address_components[0] &&
            place.address_components[0].short_name) ||
            '',
          (place.address_components[1] &&
            place.address_components[1].short_name) ||
            '',
          (place.address_components[2] &&
            place.address_components[2].short_name) ||
            '',
        ].join(' ');
      }
      const placeAddress = {
        icon: place.icon,
        name: place.name,
        address: address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        fullname: pacInput.value,
      };
      setPlaceState(placeAddress);
      infowindowContent.children['place-icon'].src = place.icon;
      infowindowContent.children['place-name'].textContent = place.name;
      infowindowContent.children['place-address'].textContent = address;
      infowindow.open(map, marker);
    });
  }, []);
  return (
    <>
      <h2 className="eventform-title" id="off-online">
        상세 주소
      </h2>
      <div className="event-sec" id="off-online">
        <div className="event-content">
          <p>쉽게 찾아갈 수 있도록 정확한 주소를 입력해주세요.</p>
        </div>
        <div className="input-box">
          <Maps Ref={Ref} preventDefault={preventDefault} />
        </div>
      </div>
    </>
  );
}
