import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { setSignInModal, setSignUpModal } from '../../../redux/modules/modal';
import { checkSagaActionCreator } from '../../../redux/modules/mailCheck';
import mailCheckSchema from '../../../utils/mailCheckSchema';
import { useCallback } from 'react';

export default function PreLoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (values) => {
      dispatch(checkSagaActionCreator(values));
    },
    [dispatch]
  );

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={mailCheckSchema}
      onSubmit={(values, setSubmitting) => {
        handleSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form>
        <button className="social-login-button">구글로 로그인</button>
        <button className="social-login-button">카카오로 로그인</button>
        <div id="modal-divider">
          <div></div>
          <div></div>
        </div>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          className="login-input"
        />
        <button type="submit" className="login-button">
          로그인 / 회원가입
        </button>
      </Form>
    </Formik>
  );
}
