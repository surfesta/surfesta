import React from "react";

const ErrorPage = () => (
  <div className="error-page-wrap">
    <div className="error-page-inner-wrap">
      <h1 className="error-title">저런! 에러입니다</h1>
      <a href="./index" className="go-to-home">
        <span role="img" aria-label="Home">
          🏠
        </span>
        홈으로 이동하기
      </a>
    </div>
  </div>
);

export default ErrorPage;
