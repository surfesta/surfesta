import React, { useState, useEffect } from "react";
import ReviseEventForm from "../components/template/reviseEvent/ReviseEventForm";
// import useAuth from '../utils/useAuth';
import RouteLeavingGuard from "../components/organism/createEvent/RouteLeavingGuard";

export default function ReviseEvent({ history, location }) {
  // useAuth();
  if (!location.state) {
    window.location.href = "/";
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { event } = location.state;
  const [whenState, updateWhenState] = useState(true);
  return (
    <>
      <RouteLeavingGuard
        when={whenState}
        navigate={(path) => {
          history.push(path);
        }}
        shouldBlockNavigation={(location) => {
          if (whenState) {
            return true;
          }
          return false;
        }}
        yes="확인"
        no="취소"
        contentTop={"이 페이지를 벗어나면"}
        contentBottom={"정성스럽게 수정한 글이 날아가요."}
      />
      <div className="revise-event-wrap">
        <div className="w1440-container">
          <ReviseEventForm curEvent={event} />
        </div>
      </div>
    </>
  );
}
