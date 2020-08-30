import React from 'react';

const LoginButton = ({ handleclick }) => {
  return (
    <div id="login-button" onClick={handleclick}>
      로그인하기
    </div>
  );
};
export default LoginButton;
