import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import ProfileTemplate from "../components/template/ProfileTemplate";
import SubNavTemplate from "../components/template/SubNavTemplate";
import EnlistedEvents from "../components/molecule/eventCategories/EnlistedEvents";
import HostingEvents from "../components/molecule/eventCategories/HostingEvents";
import LikedEvents from "../components/molecule/eventCategories/LikedEvents";
import { getCookieValue } from "../utils/getCookieValue";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { push } from "connected-react-router";

function MyPage() {
  const { user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const clientCookie = getCookieValue("surf_auth");
  const [authDone, setAuthDone] = useState(false);
  const [qr, setQr] = useState("");
  useEffect(() => {
    if (user) {
      setAuthDone(true);
      setQr(
        `https://api.qrserver.com/v1/create-qr-code/?data=${user._id}&size=240x240`
      );
    }
    if (error) {
      console.warn(
        "로그인인증에 문제가 생겼습니다. (토큰은 있지만, 서버에서 인증에러)"
      );
      dispatch(push("/"));
    }
  }, [setAuthDone, user, error]);

  // if cookie is there, wait til the redux store hydrated.
  // there's no cookie, just to home.

  if (!clientCookie) return <Redirect to="/" />;

  return (
    <div className="init-height">
      <img src={qr} style={{ display: "none" }} hidden />
      {authDone && (
        <>
          <SubNavTemplate />
          <section>
            <Route path="/my/profile" component={ProfileTemplate} />
            <Route path="/my/event/enlisted" component={EnlistedEvents} />
            <Route path="/my/event/hosting" component={HostingEvents} />
            <Route path="/my/event/liked" component={LikedEvents} />
          </section>
        </>
      )}
    </div>
  );
}

export default MyPage;
