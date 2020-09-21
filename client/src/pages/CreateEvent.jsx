import React, { useState } from "react";
import "./createevent.scss";
import EventForm from "../components/template/createEvent/EventForm";
// import useAuth from '../utils/useAuth';
import RouteLeavingGuard from "../components/organism/createEvent/RouteLeavingGuard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { push } from "connected-react-router";

export default function CreateEvent({ history }) {
  const [whenState, updateWhenState] = useState(true);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const clientCookie = getCookieValue("surf_auth");
  const [done, setDone] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (auth.user) setDone(true);
    if (auth.error) dispatch(push("/"));
  }, [setDone, auth]);

  // if cookie is there, wait til the redux store hydrated.
  // there's no cookie, just to home.

  if (!clientCookie) return <Redirect to="/" />;

  return (
    <div className="init-height">
      {done && (
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
            contentBottom={"정성스럽게 작성한 글이 날아가요."}
          />
          <div className="create-event-wrap init-height">
            <div className="w1440-container">
              <EventForm />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const getCookieValue = (key) => {
  let cookieKey = key + "=";
  let result = "";
  const cookieArr = document.cookie.split(";");

  for (let i = 0; i < cookieArr.length; i++) {
    if (cookieArr[i][0] === " ") {
      cookieArr[i] = cookieArr[i].substring(1);
    }

    if (cookieArr[i].indexOf(cookieKey) === 0) {
      result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
      return result;
    }
  }
  return result;
};
