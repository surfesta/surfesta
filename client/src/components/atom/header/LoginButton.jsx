import React from 'react';
import './LoginButton.scss';

const LoginButton = ({ handleclick }) => {
  return (
    <button className="header-login-button" onClick={handleclick}>
      로그인
    </button>
  );
};
export default LoginButton;
