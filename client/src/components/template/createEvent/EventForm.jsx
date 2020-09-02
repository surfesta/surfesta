import React, { useRef, useState } from 'react';
import EventDislose from '../../molecule/createEvent/EventDisclose';
import EventTitle from '../../molecule/createEvent/EventTitle';
import EventOrganizer from '../../molecule/createEvent/EventOrganizer';
import EventApplyLink from '../../molecule/createEvent/EventApplyLink';
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

function EventForm() {
  const [onlineCheck, setOnlineCheck] = useState(false);

  const $form = useRef(null);
  const $isOpen = useRef(null);
  const $eventTitle = useRef(null);
  const $phone = useRef(null);
  const $mail = useRef(null);
  const $forLink = useRef(null);
  const $startDate = useRef(null);
  const $endDate = useRef(null);
  const $isOnline = useRef(null);
  const $address = useRef(null);
  const $addressDetail = useRef(null);
  const $addressDetailPlus = useRef(null);
  const $onlinePlatform = useRef(null);
  const $price = useRef(null);
  const $maxPerson = useRef(null);
  // const $onlineWay = useRef(null);
  const $thumbnail = useRef(null);
  const $toast = useRef(null);

  function submit(e) {
    e.preventDefault();
    // const node = document.querySelector('.tui-editor-contents');
    // console.log(node);
    // $toast.current;
    const publicRef = {
      curIsOpen: $isOpen.current.checked,
      curEventTitle: $eventTitle.current.value,
      curTel: $phone.current.value,
      curMail: $mail.current.value,
      curForLink: $forLink.current.value,
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
        id: '5f4766ee0c1c3b64fcebbd2b',
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
        details: offlineRef.curAddressDetail,
        info: offlineRef.curAddressDetailPlus,
      },
      price: publicRef.curPrice, // 입장료
      max_count: publicRef.curMaxPerson, // 참석 가능 인원수
      cur_count: 0, // 참석 인원

      enlisted_users_id: [], // 해당 이벤트 참여신청을 한 유저들의 배열
    };
    console.log(payload);
    console.log(startDateValue);

    axios.post('/api/v1/events', payload);
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
        <EventApplyLink Ref={$forLink} />
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
}

export default EventForm;
