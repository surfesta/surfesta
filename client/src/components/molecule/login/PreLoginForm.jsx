import React from 'react';
import { Formik, Form, Field } from 'formik';
import mailCheckSchema from '../../../utils/mailCheckSchema';
import FacebookAppLogo from '../../atom/header/FacebookAppLogo';
import StyledErrorMessage from '../../atom/header/StyledErrorMessage';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import './PreLoginForm.scss';

export default function PreLoginForm({
  handleEmailCheck,
  handleFBLogin,
  handleGGLogin,
}) {
  React.useEffect(() => {
    document.querySelector('.gg-button').style = {};
    document.querySelector('.gg-button div').style = {};
    document.querySelector('.gg-button span').style = {};
  }, []);

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
      {({ errors, touched }) => (
        <Form noValidate>
          <div type="button" className="social-login-button google">
            <GoogleLogin
              clientId="184465750767-gu3d86rn56bsj87dnsj7m3mpakma0f1a.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={handleGGLogin}
              onFailure={console.log}
              cookiePolicy={'single_host_origin'}
              className="gg-button"
            />
          </div>
          <div type="button" className="social-login-button facebook">
            <FacebookAppLogo className="social-icon fb" />
            <FacebookLogin
              appId="3347258178701289"
              autoLoad={false}
              scope="public_profile,email"
              fields="name,email,picture"
              callback={handleFBLogin}
              textButton="facebook"
              cssClass="fb-button"
            />
          </div>
          <div id="modal-divider">
            <div>또는</div>
            <div></div>
            <div></div>
          </div>
          <Field
            name="email"
            type="email"
            placeholder="이메일 주소를 입력해주세요:)"
            className="login-input pre-login"
            id={errors.email && touched.email && 'error-input-border'}
          />
          <StyledErrorMessage name="email" errors={errors} touched={touched} />
          <p className="basic-privacy-confirm">
            Surfesta에 가입함으로써 개인정보 이용약관에 동의합니다.
          </p>
          <button type="submit" className="login-button">
            로그인 / 회원가입
          </button>
        </Form>
      )}
    </Formik>
  );
}
