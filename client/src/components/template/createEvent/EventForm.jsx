import React, { useRef, useState } from "react";
import EventDislose from "../../molecule/createEvent/EventDisclose";
import EventTitle from "../../molecule/createEvent/EventTitle";
import EventOrganizer from "../../molecule/createEvent/EventOrganizer";
import EventApplyLink from "../../molecule/createEvent/EventApplyLink";
import EventOnlineCheck from "../../molecule/createEvent/EventOnlineCheck";
import EventAddress from "../../molecule/createEvent/EventAddress";
import EventAddressDetail from "../../molecule/createEvent/EventAddressDetail";
import EventAddressDetailPlus from "../../molecule/createEvent/EventAddressDetailPlus";
import EventPlatform from "../../molecule/createEvent/EventPlatform";
import EventPrice from "../../molecule/createEvent/EventPrice";
import EventMaxPerson from "../../molecule/createEvent/EventMaxPerson";
import EventThumbnail from "../../molecule/createEvent/EventThumbnail";
import EventContent from "../../molecule/createEvent/EventContent";
import EventDate from "../../molecule/createEvent/EventDate";

function EventForm() {
  const [onlineCheck, setOnlineCheck] = useState(false);

  const $form = useRef(null);
  const $isOpen = useRef(null);
  const $eventTitle = useRef(null);
  const $mail = useRef(null);
  const $phone = useRef(null);
  const $startDate = useRef(null);
  const $startTime = useRef(null);
  const $endDate = useRef(null);
  const $endTime = useRef(null);
  const $forLink = useRef(null);
  const $isOnline = useRef(null);
  const $address = useRef(null);
  const $addressDetail = useRef(null);
  const $addressDetailPlus = useRef(null);
  const $onlinePlatform = useRef(null);
  const $onlineWay = useRef(null);
  const $thumbnail = useRef(null);
  const $toast = useRef(null);

  function submit(e) {
    e.preventDefault();
    console.log(e);
  }
  function openToggle(e) {
    e.target.parentNode.classList.toggle("active");
  }
  function onlineToggle(e) {
    e.target.parentNode.classList.toggle("active");
    // $form.current.classList.toggle("online-active");
    // if ($form.current.className === "online-active") {
    //   $address.current.setAttribute("required", false);
    //   $addressDetail.current.setAttribute("required", false);
    //   $addressDetailPlus.current.setAttribute("required", false);
    // }
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
        <EventOrganizer />
        <EventApplyLink Ref={$forLink} />
        <EventDate />
        <EventOnlineCheck toggle={onlineToggle} ref={$isOnline} />

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

        <EventPrice />
        <EventMaxPerson />
        <EventThumbnail Ref={$thumbnail} />
        <EventContent />
        <div className="create-event-submit">
          <button type="submit">이벤트 생성하기</button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
