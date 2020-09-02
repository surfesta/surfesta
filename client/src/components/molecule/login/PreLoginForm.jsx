import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import mailCheckSchema from '../../../utils/mailCheckSchema';
import FacebookAppLogo from '../../atom/header/FacebookAppLogo';
import GoogleLogo from '../../atom/header/GoogleLogo';
import StyledErrorMessage from '../../atom/header/StyledErrorMessage';
import './PreLoginForm.scss';

export default function PreLoginForm({ handleEmailCheck }) {
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
        <button className="social-login-button google">
          <GoogleLogo className="social-icon" />
          <div>Google</div>
        </button>
        <button className="social-login-button facebook">
          <FacebookAppLogo className="social-icon" />
          <div>Facebook</div>
        </button>
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
