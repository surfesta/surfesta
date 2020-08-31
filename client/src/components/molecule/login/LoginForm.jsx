import React from 'react';
import { Formik, Form, Field } from 'formik';
import SignupSchema from '../../../utils/inputValidScheme';
import StyledErrorMessage from '../../atom/StyledErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { offModal } from '../../../redux/modules/modal';
import { loginSagaActionCreator } from '../../../redux/modules/auth';

export default function LoginForm() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.mailCheck.email);
  return (
    <Formik
      initialValues={{ email, password: '123123' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(loginSagaActionCreator(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="email" type="email" className="login-input" />
          <StyledErrorMessage />
          <Field
            name="password"
            type="password"
            placeholder="비밀번호"
            className="login-input"
          />
          <StyledErrorMessage />
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
