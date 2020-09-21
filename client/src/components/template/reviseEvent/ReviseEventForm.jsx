import React, { useRef, useState, useCallback, useEffect } from "react";
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
import EventService from "../../../services/EventService";
import Portal from "../../Portal";

const onUnload = (e) => {
  e.preventDefault();
  e.returnValue = "이 페이지를 벗어나면 정성스럽게 수정한 글이 날아가요.";
};
export default function ReviseEventForm({ curEvent }) {
  useEffect(() => {
    $isOpen.current.checked = curEvent.isOpen;
    $eventTitle.current.value = curEvent.title;
    $startDate.current.firstElementChild.querySelector("input").value =
      curEvent.event_date.start.date;
    $startDate.current.lastElementChild.querySelector("input").value =
      curEvent.event_date.start.time;
    $endDate.current.firstElementChild.querySelector("input").value =
      curEvent.event_date.end.date;
    $endDate.current.lastElementChild.querySelector("input").value =
      curEvent.event_date.end.time;

    $isOnline.current.checked = curEvent.isOnline;
    if (!curEvent.isOnline) {
      $address.current.value = curEvent.location.name;
      $addressDetail.current.value = curEvent.location.details; //쿼리
      $addressDetailPlus.current.value = curEvent.location.info;
    } else {
      $onlinePlatform.current.value = curEvent.online_platform;
    }
    $price.current.value = curEvent.price;
    $price.current.disabled = true;
    $maxPerson.current.value = curEvent.max_count;
    $thumbnailImage.current.src = curEvent.thumbnail;

    window.addEventListener("beforeunload", onUnload);

    return () => window.removeEventListener("beforeunload", onUnload);
  }, []);
  function goHome() {
    window.removeEventListener("beforeunload", onUnload);
    window.location.href = "/";
  }
  function openToggle(e) {
    e.target.parentNode.classList.toggle("active");
  }
  function onlineToggle(e) {
    openToggle(e);
    setOnlineCheck(!onlineCheck ? true : false);
  }
  const submit = useCallback((e) => {
    e.preventDefault();
  });
  const _preventDefault = useCallback((e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
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

  const [placeState, setPlaceState] = useState(curEvent.location.details);
  const [onlineCheck, setOnlineCheck] = useState(curEvent.isOnline);
  const [clearPatch, setClearPatch] = useState(false);
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
  async function revise() {
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
        details: publicRef.curIsOnline === false ? placeState : "",
        info: offlineRef.curAddressDetailPlus,
      },
      max_count: +publicRef.curMaxPerson, // 참석 가능 인원수
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
    console.log(payload);
    if (
      (publicRef.curIsOnline && payload.online_platform.trim() === "") ||
      (!publicRef.curIsOnline && payload.location.name.trim() === "") ||
      (!publicRef.curIsOnline && payload.location.details.trim() === "") ||
      (!publicRef.curIsOnline && payload.location.info.trim() === "") ||
      payload.title.trim() === "" ||
      publicRef.curMaxPerson.trim() === "" ||
      isNaN(payload.max_count) ||
      payload.max_count === 0 ||
      payload.thumbnail.trim() === ""
    ) {
      return;
    }
    setClearPatch(true);
    EventService.resiveEvent(curEvent._id, payload);
  }
  return (
    <div className="revise-event-form">
      {clearPatch && (
        <Portal>
          <div id="modal-container">
            <div id="modal" className="confirm-modal">
              <h1>이벤트 수정이 완료되었습니다.</h1>
              <button className="confirm" type="button" onClick={goHome}>
                확인
              </button>
            </div>
          </div>
        </Portal>
      )}
      <h1 className="main-title">이벤트 수정하기</h1>
      <form
        encType="multipart/form-data"
        action="/upload_page"
        ref={$form}
        onSubmit={submit}
      >
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
            SD={curEvent.event_date.start.date}
            ST={curEvent.event_date.start.time}
            ED={curEvent.event_date.end.date}
            ET={curEvent.event_date.end.time}
            revise={true}
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
          <EventContent
            Ref={$toast}
            preventDefault={_preventDefault}
            initValue={curEvent.content}
          />
          <div className="revise-event-submit">
            <button onClick={goHome}>취소하기</button>
            <button type="submit" onClick={revise}>
              수정하기
            </button>
          </div>
        </>
      </form>
    </div>
  );
}
