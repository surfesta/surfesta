import React, { useRef, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import EventDislose from "../../molecule/createEvent/EventDisclose";
import EventTitle from "../../molecule/createEvent/EventTitle";
import EventOnlineCheck from "../../molecule/createEvent/EventOnlineCheck";
import EventAddress from "../../molecule/createEvent/EventAddress";
import EventAddressDetail from "../../organism/createEvent/EventAddressDetail";
import EventAddressDetailPlus from "../../molecule/createEvent/EventAddressDetailPlus";
import EventPlatform from "../../molecule/createEvent/EventPlatform";
import EventPrice from "../../molecule/createEvent/EventPrice";
import EventMaxPerson from "../../molecule/createEvent/EventMaxPerson";
import EventThumbnail from "../../organism/createEvent/EventThumbnail";
import EventContent from "../../molecule/createEvent/EventContent";
import EventDate from "../../molecule/createEvent/EventDate";
import axios from "axios";
import TermsCheck from "../../molecule/createEvent/TermsCheck";
import EventService from "../../../services/EventService";
import UserService from "../../../services/UserService";

const EventForm = () => {
  const _preventDefault = useCallback((e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
  const user = useSelector((state) => state.auth.user);
  const [placeState, setPlaceState] = useState("");
  const [onlineCheck, setOnlineCheck] = useState(false);
  const [modalCheck, setModalCheck] = useState(false);
  const [eventPayload, setEventPayload] = useState();
  const [clearPost, setClearPost] = useState(false);
  const [termsCheck, setTerms] = useState(false);
  const $form = useRef(null);
  const $isOpen = useRef(null);
  const $eventTitle = useRef(null);
  const $startDate = useRef(null);
  const $endDate = useRef(null);
  const $isOnline = useRef(null);
  const $address = useRef(null);
  const $addressDetail = useRef(null);
  const $addressDetailPlus = useRef(null);
  const $onlinePlatform = useRef(null);
  const $price = useRef(null);
  const $maxPerson = useRef(null);
  const $thumbnailInput = useRef(null);
  const $thumbnailImage = useRef(null);
  const $toast = useRef(null);

  const inputErr = useCallback((Ref, msg = "필수 입력 사항입니다.") => {
    Ref.current.focus();
    Ref.current.classList.add("err");
    if (!Ref.current.parentNode.querySelector(".err-text")) {
      const $span = document.createElement("span");
      $span.className = "err-text";
      $span.textContent = msg;
      Ref.current.parentNode.appendChild($span);
    }
  });
  const inputComplete = useCallback((Ref) => {
    Ref.current.classList.remove("err");
    const $err = Ref.current.parentNode.querySelector(".err-text");
    Ref.current.parentNode.removeChild($err);
  });
  function modalPop(payload) {
    setModalCheck(true);
    setEventPayload(payload);
  }
  async function createData(e) {
    const publicRef = {
      curIsOpen: $isOpen.current.checked,
      curEventTitle: $eventTitle.current.value,
      curStartDate: $startDate.current,
      curEndDate: $endDate.current,
      curIsOnline: $isOnline.current.checked,

      curPrice: $price.current.value,
      curMaxPerson: $maxPerson.current.value,
      curThumbnailInput: $thumbnailInput.current,
      curThumbnailImage: $thumbnailImage.current,
      curToast: $toast.current.getInstance().getHtml(),
    };
    const offlineRef = {
      curAddress: publicRef.curIsOnline ? "" : $address.current.value,
      curAddressDetail: publicRef.curIsOnline
        ? ""
        : $addressDetail.current.value,
      curAddressDetailPlus: publicRef.curIsOnline
        ? ""
        : $addressDetailPlus.current.value,
    };
    const onlineRef = {
      curPlatform: publicRef.curIsOnline ? $onlinePlatform.current.value : "",
    };
    const startDateValue = publicRef.curStartDate.firstElementChild.querySelector(
      "input"
    ).value;
    const startTimeValue = publicRef.curStartDate.lastElementChild.querySelector(
      "input"
    ).value;
    const endDateValue = publicRef.curEndDate.firstElementChild.querySelector(
      "input"
    ).value;
    const endTimeValue = publicRef.curEndDate.lastElementChild.querySelector(
      "input"
    ).value;
    const payload = {
      isOpen: publicRef.curIsOpen,
      title: publicRef.curEventTitle,
      host: user._id,
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
      thumbnail: publicRef.curThumbnailImage.src,
      content: publicRef.curToast,
      isOnline: publicRef.curIsOnline,
      online_platform: onlineRef.curPlatform,
      location: {
        name: offlineRef.curAddress,
        details: placeState,
        info: offlineRef.curAddressDetailPlus,
      },
      price: publicRef.curPrice.trim() === "" ? 0 : +publicRef.curPrice, // 입장료
      max_count: +publicRef.curMaxPerson, // 참석 가능 인원수
      cur_count: 0, // 참석 인원

      enlisted_users: [], // 해당 이벤트 참여신청을 한 유저들의 배열
      liked_users: [], // 해당 이벤트 찜한 유저들의 배열
      attended_users: [], // 해당 이벤트에 실제 참여한 유저들의 배열
    };

    if (payload.thumbnail.trim() === "") {
      inputErr($thumbnailInput);
    } else {
      if ($thumbnailInput.current.classList.contains("err"))
        inputComplete($thumbnailInput);
    }
    if (isNaN(payload.max_count) || payload.max_count === 0) {
      inputErr($maxPerson, "필수 입력 사항입니다, 숫자로 입력해주세요.");
    } else {
      if ($maxPerson.current.classList.contains("err"))
        inputComplete($maxPerson);
    }
    if (isNaN(payload.price)) {
      inputErr($price, "숫자로 입력해주세요.");
    } else {
      if ($price.current.classList.contains("err")) inputComplete($price);
    }
    if (publicRef.curIsOnline && payload.online_platform.trim() === "") {
      inputErr($onlinePlatform);
    } else if (publicRef.curIsOnline) {
      if ($onlinePlatform.current.classList.contains("err"))
        inputComplete($onlinePlatform);
    }
    if (!publicRef.curIsOnline && payload.location.info.trim() === "") {
      inputErr($addressDetailPlus);
    } else if (!publicRef.curIsOnline) {
      if ($addressDetailPlus.current.classList.contains("err"))
        inputComplete($addressDetailPlus);
    }

    if (!publicRef.curIsOnline && payload.location.details.trim() === "") {
      inputErr($addressDetail);
    } else if (!publicRef.curIsOnline) {
      if ($addressDetail.current.classList.contains("err"))
        inputComplete($addressDetail);
    }
    if (!publicRef.curIsOnline && payload.location.name.trim() === "") {
      inputErr($address);
    } else if (!publicRef.curIsOnline) {
      if ($address.current.classList.contains("err")) inputComplete($address);
    }

    if (payload.title.trim() === "") {
      inputErr($eventTitle);
    } else {
      if ($eventTitle.current.classList.contains("err"))
        inputComplete($eventTitle);
    }

    if (
      (publicRef.curIsOnline && payload.online_platform.trim() === "") ||
      (!publicRef.curIsOnline && payload.location.name.trim() === "") ||
      (!publicRef.curIsOnline && payload.location.details.trim() === "") ||
      (!publicRef.curIsOnline && payload.location.info.trim() === "") ||
      payload.title.trim() === "" ||
      publicRef.curMaxPerson.trim() === "" ||
      isNaN(payload.max_count) ||
      payload.max_count === 0 ||
      isNaN(payload.price) ||
      payload.thumbnail.trim() === ""
    ) {
      return;
    }
    modalPop(payload);
  }
  function termsToggle(e) {
    openToggle(e);
    setTerms(!termsCheck ? true : false);
  }
  function openToggle(e) {
    e.target.parentNode.classList.toggle("active");
  }
  function onlineToggle(e) {
    openToggle(e);
    setOnlineCheck(!onlineCheck ? true : false);
  }
  function submit(e) {
    e.preventDefault();
  }
  async function PostPayload() {
    setModalCheck(false);
    console.log(eventPayload);
    try {
      const { doc } = await EventService.postEvent(eventPayload);
      const { _id } = doc;
      const { hosting_events } = await UserService.getUserDetail(user._id);
      console.log(hosting_events);
      const hosting_payload = {
        hosting_events: [...hosting_events, _id],
      };
      console.log(hosting_payload);
      UserService.toggleHostingEvent(user._id, hosting_payload);
    } catch (err) {
      console.log(err);
    }
    setClearPost(true);
  }
  function goHome() {
    window.location.href = "/";
  }
  return (
    <div className="create-event-form">
      {modalCheck && (
        <div className="goback-modal-container">
          <div className="inner-modal">
            <div className="modal-body">
              <p>
                해당 내용으로
                <br />
                이벤트를 주최할까요?
              </p>
            </div>
            <div className="modal-foot">
              <button onClick={() => setModalCheck(false)} type="button">
                취소
              </button>
              <button onClick={PostPayload} type="button">
                확인
              </button>
            </div>
          </div>
        </div>
      )}
      {clearPost && (
        <div className="goback-modal-container">
          <div className="inner-modal">
            <div className="modal-body top-body">
              <p>이벤트가 게시되었어요!</p>
            </div>
            <div className="modal-foot">
              <button onClick={goHome} type="button" className="one-btn">
                확인
              </button>
            </div>
          </div>
        </div>
      )}
      <h1 className="main-title">이벤트 주최하기</h1>
      <form
        encType="multipart/form-data"
        action="/upload_page"
        ref={$form}
        onSubmit={submit}
      >
        <TermsCheck termsToggle={termsToggle} />
        {termsCheck && (
          <>
            <EventDislose
              toggle={openToggle}
              Ref={$isOpen}
              preventDefault={_preventDefault}
            />
            <EventTitle Ref={$eventTitle} preventDefault={_preventDefault} />
            <EventDate
              startDateRef={$startDate}
              endDateRef={$endDate}
              preventDefault={_preventDefault}
            />
            <EventOnlineCheck
              toggle={onlineToggle}
              Ref={$isOnline}
              preventDefault={_preventDefault}
            />

            {/* 온라인 OFF */}
            {!onlineCheck && (
              <>
                <EventAddress Ref={$address} preventDefault={_preventDefault} />
                <EventAddressDetail
                  Ref={$addressDetail}
                  preventDefault={_preventDefault}
                  setPlaceState={setPlaceState}
                />
                <EventAddressDetailPlus
                  Ref={$addressDetailPlus}
                  preventDefault={_preventDefault}
                />
              </>
            )}
            {/* 온라인 OFF */}

            {/* 온라인 ON */}
            {onlineCheck && (
              <>
                <EventPlatform
                  Ref={$onlinePlatform}
                  preventDefault={_preventDefault}
                />
              </>
            )}
            {/* 온라인 ON */}
            <EventPrice Ref={$price} preventDefault={_preventDefault} />
            <EventMaxPerson Ref={$maxPerson} preventDefault={_preventDefault} />
            <EventThumbnail
              inputRef={$thumbnailInput}
              imgRef={$thumbnailImage}
              preventDefault={_preventDefault}
            />
            <EventContent Ref={$toast} preventDefault={_preventDefault} />
            <div className="create-event-submit">
              <button type="submit" onClick={createData}>
                이벤트 생성하기
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default EventForm;
