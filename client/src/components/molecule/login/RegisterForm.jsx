import React from 'react';
import { Formik, Form, Field } from 'formik';
import StyledErrorMessage from '../../atom/header/StyledErrorMessage';
import registerSchema from '../../../utils/registerSchema';
import './RegisterForm.scss';

export default function RegisterForm({ handleRegister, presetValue }) {
  return (
    <Formik
      initialValues={{
        email: presetValue.email || '시작하기',
        username: '',
        phone_number: '',
        password: '',
      }}
      validationSchema={registerSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        handleRegister(values);
        setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="register-form">
          <Field
            name="email"
            type="email"
            className="signup-input email-input"
            disabled
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
            placeholder="휴대폰 번호"
            className="signup-input"
            maxLength="11"
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
