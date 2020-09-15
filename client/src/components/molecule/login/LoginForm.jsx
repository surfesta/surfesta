import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import loginSchema from '../../../utils/LoginSchema';
import StyledErrorMessage from '../../atom/header/StyledErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { loginSagaActionCreator } from '../../../redux/modules/auth';
import { useCallback } from 'react';
import LoginFailMessage from '../../atom/header/LoginFailMessage';

export default function LoginForm() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.mailCheck.email);
  const [hasLoginFailed, setHasLoginFailed] = useState(false);

  const onSubmit = useCallback(
    (values, { setSubmitting }) => {
      dispatch(loginSagaActionCreator(values, setHasLoginFailed));
      setSubmitting(false);
    },
    [dispatch]
  );

  return (
    <Formik
      initialValues={{ email, password: '123123' }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <Field
            name="email"
            type="email"
            className="login-input login"
            disabled
          />
          <Field
            name="password"
            type="password"
            placeholder="비밀번호"
            className="login-input "
            onClick={() => setHasLoginFailed(false)}
            onFocus={() => setHasLoginFailed(false)}
            id={
              (errors.password && touched.password) || hasLoginFailed
                ? 'error-input-border'
                : ''
            }
          />
          <div className="modal-error-message">
            {hasLoginFailed && <LoginFailMessage />}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="login-button"
          >
            로그인
          </button>
        </Form>
      )}
    </Formik>
  );
}
