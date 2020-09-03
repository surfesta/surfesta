import React from 'react';
import { Formik, Form, Field } from 'formik';
import registerSchema from '../../../utils/RegisterSchema';
import StyledErrorMessage from '../../atom/header/StyledErrorMessage';
import './RegisterForm.scss';

export default function RegisterForm({ handleRegister }) {
  console.log(handleRegister);
  return (
    <Formik
      initialValues={{ email: '', username: '', password: '' }}
      validationSchema={registerSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleRegister(values);
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
          <StyledErrorMessage name="email" />
          <Field
            name="username"
            type="username"
            placeholder="이름"
            className="signup-input"
          />
          <StyledErrorMessage name="username" />
          <Field
            name="phone_number"
            type="phone_number"
            placeholder="전화번호 (선택)"
            className="signup-input"
          />
          <StyledErrorMessage name="phone_number" />
          <Field
            name="password"
            type="password"
            placeholder="비밀번호"
            className="signup-input"
          />
          <StyledErrorMessage name="password" />
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
