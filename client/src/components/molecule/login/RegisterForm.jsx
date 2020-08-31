import React from 'react';
import { Formik, Form, Field } from 'formik';
import StyledErrorMessage from '../../atom/StyledErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import UserService from '../../../services/UserService';
import { setSignInModal, offModal } from '../../../redux/modules/modal';
import { SignupSagaActionCreator } from '../../../redux/modules/auth';

export default function RegisterForm() {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      // validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(SignupSagaActionCreator(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            name="email"
            type="email"
            className="signup-input"
            placeholder="이메일"
          />
          <StyledErrorMessage />
          <Field
            name="username"
            type="username"
            placeholder="이름"
            className="signup-input"
          />
          <StyledErrorMessage />
          <Field
            name="phone_number"
            type="phone_number"
            placeholder="전화번호 (선택)"
            className="signup-input"
          />
          <StyledErrorMessage />
          <Field
            name="password"
            type="password"
            placeholder="비밀번호"
            className="signup-input"
          />
          <StyledErrorMessage />
          <button
            type="submit"
            className="signup-button"
            disabled={isSubmitting}
          >
            회원가입
          </button>
        </Form>
      )}
    </Formik>
  );
}
