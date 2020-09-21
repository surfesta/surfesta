import React, { useState, useEffect } from "react";
import ReviseEventForm from "../components/template/reviseEvent/ReviseEventForm";
import RouteLeavingGuard from "../components/organism/createEvent/RouteLeavingGuard";
import { getCookieValue } from "../utils/getCookieValue";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Redirect } from "react-router-dom";

export default function ReviseEvent({ history, location }) {
  const { event } = location.state;
  const [whenState, updateWhenState] = useState(true);
  const { user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const clientCookie = getCookieValue("surf_auth");
  const [authDone, setAuthDone] = useState(false);

  if (!location.state) {
    window.location.href = "/";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (user) setAuthDone(true);
    if (error) dispatch(push("/"));
  }, [setAuthDone, user, error]);

  if (!clientCookie) return <Redirect to="/" />;

  return (
    <>
      {authDone && (
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
          <div className="revise-event-wrap init-height">
            <div className="w1440-container">
              <ReviseEventForm curEvent={event} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
