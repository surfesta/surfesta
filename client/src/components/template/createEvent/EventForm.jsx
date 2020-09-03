import React, { useRef, useState, useEffect } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { useDispatch, useSelector } from 'react-redux';
import EventDislose from '../../molecule/createEvent/EventDisclose';
import EventTitle from '../../molecule/createEvent/EventTitle';
import EventOrganizer from '../../molecule/createEvent/EventOrganizer';
import EventOnlineCheck from '../../molecule/createEvent/EventOnlineCheck';
import EventAddress from '../../molecule/createEvent/EventAddress';
import EventAddressDetail from '../../molecule/createEvent/EventAddressDetail';
import EventAddressDetailPlus from '../../molecule/createEvent/EventAddressDetailPlus';
import EventPlatform from '../../molecule/createEvent/EventPlatform';
import EventPrice from '../../molecule/createEvent/EventPrice';
import EventMaxPerson from '../../molecule/createEvent/EventMaxPerson';
import EventThumbnail from '../../molecule/createEvent/EventThumbnail';
import EventContent from '../../molecule/createEvent/EventContent';
import EventDate from '../../molecule/createEvent/EventDate';

import axios from 'axios';

const EventForm = () => {
  const [placeState, setPlaceState] = useState({
    icon: '',
    name: '',
    address: '',
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.5452446, lng: 127.0570452 },
      zoom: 17,
    });
    const card = document.getElementById('pac-card');
    const input = document.getElementById('pac-input');
    map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(card);
    const autocomplete = new window.google.maps.places.Autocomplete(input);
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
        window.alert("No details available for input: '" + place.name + "'");
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
      console.dir(place);
      const placeAddress = {
        icon: place.icon,
        name: place.name,
        address: address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setPlaceState(placeAddress);
      infowindowContent.children['place-icon'].src = place.icon;
      infowindowContent.children['place-name'].textContent = place.name;
      infowindowContent.children['place-address'].textContent = address;
      infowindow.open(map, marker);
    });
  }, []);
  const user = useSelector((state) => state.auth.user);
  const [onlineCheck, setOnlineCheck] = useState(false);

  const $form = useRef(null);
  const $isOpen = useRef(null);
  const $eventTitle = useRef(null);
  const $phone = useRef(null);
  const $mail = useRef(null);
  const $startDate = useRef(null);
  const $endDate = useRef(null);
  const $isOnline = useRef(null);
  const $address = useRef(null);
  const $addressDetail = useRef(null);
  const $addressDetailPlus = useRef(null);
  const $onlinePlatform = useRef(null);
  const $price = useRef(null);
  const $maxPerson = useRef(null);
  const $thumbnail = useRef(null);
  const $toast = useRef(null);

  function submit(e) {
    e.preventDefault();
    const publicRef = {
      curIsOpen: $isOpen.current.checked,
      curEventTitle: $eventTitle.current.value,
      curTel: $phone.current.value,
      curMail: $mail.current.value,
      curStartDate: $startDate.current,
      curEndDate: $endDate.current,
      curIsOnline: $isOnline.current.checked,

      curPrice: $price.current.value,
      curMaxPerson: $maxPerson.current.value,
      curThumbnail: $thumbnail.current,
      curToast: $toast.current.getInstance().getHtml(),
    };
    const offlineRef = {
      curAddress: publicRef.curIsOnline ? '' : $address.current.value,
      curAddressDetail: publicRef.curIsOnline
        ? ''
        : $addressDetail.current.value,
      curAddressDetailPlus: publicRef.curIsOnline
        ? ''
        : $addressDetailPlus.current.value,
    };
    const onlineRef = {
      curPlatform: publicRef.curIsOnline ? $onlinePlatform.current.value : '',
    };
    const startDateValue = publicRef.curStartDate.firstElementChild.querySelector(
      'input'
    ).value;
    const startTimeValue = publicRef.curStartDate.lastElementChild.querySelector(
      'input'
    ).value;
    const endDateValue = publicRef.curEndDate.firstElementChild.querySelector(
      'input'
    ).value;
    const endTimeValue = publicRef.curEndDate.lastElementChild.querySelector(
      'input'
    ).value;
    const payload = {
      isOpen: publicRef.curIsOpen,
      title: publicRef.curEventTitle,
      host: {
        id: user._id,
        email: publicRef.curMail,
        phone_number: publicRef.curTel,
      },
      event_date: {
        start: {
          date: startDateValue,
          time: startTimeValue,
        },
        end: {
          date: endDateValue,
          time: endTimeValue,
        },
      },
      thumbnail: 'testimg',
      content: publicRef.curToast,
      isOnline: publicRef.curIsOnline,
      online_platform: onlineRef.curPlatform,
      location: {
        name: offlineRef.curAddress,
        details: placeState,
        info: offlineRef.curAddressDetailPlus,
      },
      price: publicRef.curPrice, // 입장료
      max_count: publicRef.curMaxPerson, // 참석 가능 인원수
      cur_count: 0, // 참석 인원

      enlisted_users_id: [], // 해당 이벤트 참여신청을 한 유저들의 배열
    };
    console.log(payload);

    // axios.post('/api/v1/events', payload);
  }
  function openToggle(e) {
    e.target.parentNode.classList.toggle('active');
  }
  function onlineToggle(e) {
    e.target.parentNode.classList.toggle('active');
    setOnlineCheck(!onlineCheck ? true : false);
  }
  return (
    <div className="create-event-form">
      <h1>이벤트 주최하기</h1>
      <form
        onSubmit={submit}
        encType="multipart/form-data"
        action="/upload_page"
        ref={$form}
      >
        <EventDislose toggle={openToggle} Ref={$isOpen} />
        <EventTitle Ref={$eventTitle} />
        <EventOrganizer telRef={$phone} mailRef={$mail} />
        <EventDate startDateRef={$startDate} endDateRef={$endDate} />
        <EventOnlineCheck toggle={onlineToggle} Ref={$isOnline} />

        {/* 온라인 OFF */}
        {!onlineCheck && (
          <>
            <EventAddress Ref={$address} />
            <EventAddressDetail Ref={$addressDetail} />
            <EventAddressDetailPlus Ref={$addressDetailPlus} />
          </>
        )}
        {/* 온라인 OFF */}

        {/* 온라인 ON */}
        {onlineCheck && (
          <>
            <EventPlatform Ref={$onlinePlatform} />
          </>
        )}
        {/* 온라인 ON */}
        <EventPrice Ref={$price} />
        <EventMaxPerson Ref={$maxPerson} />
        <EventThumbnail Ref={$thumbnail} />
        <EventContent Ref={$toast} />
        <div className="create-event-submit">
          <button type="submit">이벤트 생성하기</button>
        </div>
      </form>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB_BJhQ4nBvi7cPxi8DRGJepYp4MbdtRcQ',
  language: 'Korean',
})(EventForm);
