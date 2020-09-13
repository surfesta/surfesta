import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import loginSchema from '../../../utils/loginSchema';
import StyledErrorMessage from '../../atom/header/StyledErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { loginSagaActionCreator } from '../../../redux/modules/auth';
import { useCallback } from 'react';
import LoginFailMessage from '../../atom/header/LoginFailMessage';

export default function LoginForm() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.mailCheck.email);
  const { error } = useSelector((state) => state.auth);
  const [hasLoginFailed, setHasLoginFailed] = useState(false);

  const onSubmit = useCallback(
    (values, { setSubmitting }) => {
      dispatch(loginSagaActionCreator(values));
      if (error) setHasLoginFailed(true);
      setSubmitting(false);
    },
    [dispatch, error]
  );

  return (
    <Formik
      initialValues={{ email, password: '123123' }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <Field name="email" type="email" className="login-input" />
          <StyledErrorMessage name="email" />
          <Field
            name="password"
            type="password"
            placeholder="비밀번호"
            className="login-input"
            onClick={() => setHasLoginFailed(false)}
            onFocus={() => setHasLoginFailed(false)}
            id={errors.password && touched.password && 'error-input-border'}
          />
          <StyledErrorMessage name="password" />
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
