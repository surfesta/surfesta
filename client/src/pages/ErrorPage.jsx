import React from "react";
import "./ErrorPage.scss";

const ErrorPage = () => (
  <div className="error-page-wrap">
    <div className="error-page-inner-wrap">
      <h1>저런! 에러입니다</h1>
      <a href="/">
        <span role="img" aria-label="Home">
          🏠
        </span>
        &nbsp;홈으로 이동하기
      </a>
    </div>
  </div>
);

export default ErrorPage;
