import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import mailCheckSchema from '../../../utils/mailCheckSchema';
import FacebookAppLogo from '../../atom/header/FacebookAppLogo';
import GoogleLogo from '../../atom/header/GoogleLogo';
import StyledErrorMessage from '../../atom/header/StyledErrorMessage';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import './PreLoginForm.scss';
import { checkSagaActionCreator } from '../../../redux/modules/mailCheck';
import {
  signupSagaActionCreator,
  loginSagaActionCreator,
} from '../../../redux/modules/auth';
import { useDispatch, useSelector } from 'react-redux';

export default function PreLoginForm({
  handleEmailCheck,
  handleFBLogin,
  handleGGLogin,
}) {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={mailCheckSchema}
      onSubmit={(values, setSubmitting) => {
        handleEmailCheck(values);
        setSubmitting(false);
      }}
    >
      <Form>
        <GoogleLogin
          clientId="184465750767-gu3d86rn56bsj87dnsj7m3mpakma0f1a.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={handleGGLogin}
          onFailure={console.log}
          cookiePolicy={'single_host_origin'}
          className="social-login-button google"
        />
        <FacebookAppLogo className="social-icon fb" />
        <FacebookLogin
          appId="3347258178701289"
          autoLoad={false}
          scope="public_profile,email"
          fields="name,email,picture"
          callback={handleFBLogin}
          textButton="facebook"
          cssClass="social-login-button facebook"
        />
        <div id="modal-divider">
          <div>또는</div>
          <div></div>
          <div></div>
        </div>
        <Field
          id="email"
          name="email"
          placeholder="이메일 주소를 입력해주세요:)"
          type="email"
          className="login-input"
        />
        <StyledErrorMessage name="email" />
        <p className="basic-privacy-confirm">
          Surfesta에 가입함으로써 개인정보 이용약관에 동의합니다.
        </p>
        <button type="submit" className="login-button">
          로그인 / 회원가입
        </button>
      </Form>
    </Formik>
  );
}
