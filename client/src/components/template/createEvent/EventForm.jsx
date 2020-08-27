import React, { useRef } from "react";
import Maps from "./Maps";
import ToastEditor from "./ToastEditor";
import FileUpload from "./FileUpload";

function EventForm() {
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
    $form.current.classList.toggle("online-active");
    if ($form.current.className === "online-active") {
      $address.current.setAttribute("required", false);
      $addressDetail.current.setAttribute("required", false);
      $addressDetailPlus.current.setAttribute("required", false);
    }
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
        <h2 className="eventform-title">공개 여부</h2>
        <div className="event-sec">
          <div className="event-content">
            <p>
              이벤트 공개를 하지 않으면 링크로는 이벤트를 접속 할 수 있지만
              Festa의 메인 페이지에는 나타나지 않습니다. 아직 공개 할 준비가 안
              되어 있거나, 메인에 공개 하고 싶지 않으면 체크를 해제 하세요.
            </p>
          </div>
          <div className="input-box label-box">
            <input
              required
              onChange={openToggle}
              type="checkbox"
              defaultChecked={false}
              id="opencheck"
            />
            <label className="custom-label" htmlFor="opencheck"></label>
            <span className="not">아니요, 아직은 비밀이예요!</span>
            <span className="yes">네, 공개할래요!</span>
          </div>
        </div>
        <h2 className="eventform-title">이벤트 제목</h2>
        <div className="event-sec">
          <div className="event-content">
            <p>
              메인 리스트 영역에 노출되는 제목입니다. 해당 이벤트에 대한 제목을
              입력해주세요.
            </p>
          </div>
          <div className="input-box">
            <input
              required
              type="text"
              placeholder="멋진 제목을 입력해주세요."
            />
          </div>
        </div>
        <h2 className="eventform-title">주최자 연락처</h2>
        <div className="event-sec">
          <div className="event-content">
            <p>
              참가자들이 이벤트에 대해 문의할 수 있는 수단이 최소 한 개
              필요합니다. 이메일 혹은 전화번호중 최소 한 개는 입력해주세요.
              연락처는 이벤트 페이지에 노출됩니다.
            </p>
          </div>
          <div className="input-box">
            <input
              required
              type="text"
              placeholder="이메일 주소를 입력해주세요"
            />
            <input required type="text" placeholder="전화번호를 입력해주세요" />
          </div>
        </div>
        <h2 className="eventform-title">이벤트 날짜 및 시간</h2>
        <div className="event-sec">
          <div className="event-content">
            <p>이벤트가 진행되는 날짜와 시간을 입력해주세요.</p>
          </div>
          <div className="input-box">
            <div className="time-check">
              <input required type="date" />
              <input required type="time" />
            </div>
            <div className="time-check">
              <input required type="date" />
              <input required type="time" />
            </div>
          </div>
        </div>
        <h2 className="eventform-title">이벤트 신청 링크</h2>
        <div className="event-sec">
          <div className="event-content">
            <p>이벤트 신청을 누르면 이동할 링크를 넣어주세요.</p>
          </div>
          <div className="input-box">
            <input
              required
              type="text"
              placeholder="https://myawesomeevent.com/buytickets"
            />
          </div>
        </div>
        <h2 className="eventform-title">온라인 여부</h2>
        <div className="event-sec">
          <div className="event-content">
            <p>
              온라인으로 이벤트를 진행하시면 장소와 상세 주소 대신 참여 방법을
              안내합니다.
            </p>
          </div>
          <div className="input-box label-box">
            <input
              required
              onChange={onlineToggle}
              type="checkbox"
              defaultChecked={false}
              id="onlinecheck"
            />
            <label className="custom-label" htmlFor="onlinecheck"></label>
            <span className="not">아니요, 오프라인으로 진행할게요!</span>
            <span className="yes">네, 온라인으로 진행할게요!</span>
          </div>
        </div>
        {/* 온라인 OFF */}
        <h2 className="eventform-title" id="off-online">
          장소
        </h2>
        <div className="event-sec" id="off-online">
          <div className="event-content">
            <p>이벤트는 어떤 장소에서 진행되나요?</p>
          </div>
          <div className="input-box">
            <input
              ref={$address}
              required
              type="text"
              placeholder="페스타 컨퍼런스 룸"
            />
          </div>
        </div>
        <h2 className="eventform-title" id="off-online">
          상세 주소
        </h2>
        <div className="event-sec" id="off-online">
          <div className="event-content">
            <p>쉽게 찾아갈 수 있도록 정확한 주소를 입력해주세요.</p>
          </div>
          <div className="input-box">
            <Maps put={$addressDetail} />
          </div>
        </div>
        <h2 className="eventform-title" id="off-online">
          장소 설명
        </h2>
        <div className="event-sec" id="off-online">
          <div className="event-content">
            <p>장소에 대해 안내가 필요하다면 적어주세요.</p>
          </div>
          <div className="input-box">
            <input
              ref={$addressDetailPlus}
              required
              type="text"
              placeholder="주차는 인근 주차장에서 가능합니다."
            />
          </div>
        </div>
        {/* 온라인 OFF */}
        {/* 온라인 ON */}
        <h2 className="eventform-title" id="on-online">
          온라인 플랫폼
        </h2>
        <div className="event-sec" id="on-online">
          <div className="event-content">
            <p>참가자들이 이용할 플랫폼을 입력해주세요.</p>
          </div>
          <div className="input-box">
            <input
              required
              type="text"
              placeholder="Zoom 혹은 Youtube live 등"
            />
          </div>
        </div>
        <h2 className="eventform-title" id="on-online">
          참여 방법
        </h2>
        <div className="event-sec" id="on-online">
          <div className="event-content">
            <p>
              참가자들이 온라인 이벤트로 찾아갈 수 있는 방법을 설명해주세요.
            </p>
          </div>
          <div className="input-box">
            <input
              required
              type="text"
              placeholder="시작 당일 2시간 전에 개별 이메일로 Zoom 링크를 발송할 예정입니다."
            />
          </div>
        </div>
        {/* 온라인 ON */}
        <h2 className="eventform-title">이벤트 참가 비용</h2>
        <div className="event-sec">
          <div className="event-content">
            <p>이벤트 참가에 대해 비용이 발생한다면 적어주세요.</p>
          </div>
          <div className="input-box">
            <input
              required
              type="text"
              placeholder="Zoom 혹은 Youtube live 등"
            />
          </div>
        </div>
        <h2 className="eventform-title">참석 가능 인원수</h2>
        <div className="event-sec">
          <div className="event-content">
            <p>이벤트에 대해 최대 참석 가능 인원수를 적어주세요.</p>
          </div>
          <div className="input-box">
            <input
              required
              type="text"
              placeholder="Zoom 혹은 Youtube live 등"
            />
          </div>
        </div>
        <h2 className="eventform-title">대표 이미지</h2>
        <div className="event-sec">
          <div className="event-content">
            <p>이미지에 글자가 많으면 매력적이지 않습니다.</p>
          </div>
          <div className="input-box">
            <FileUpload />
          </div>
        </div>
        <h2 className="eventform-title">내용</h2>
        <div className="event-sec">
          <div className="event-content">
            <p>행사의 상세한 내용을 알리는 글을 작성해주세요.</p>
          </div>
          <div className="input-box" id="editor"></div>
        </div>
        <ToastEditor />
        <div className="create-event-submit">
          <button type="submit">이벤트 생성하기</button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
