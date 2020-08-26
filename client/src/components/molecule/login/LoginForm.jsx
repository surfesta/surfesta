import React from 'react';
import { Formik, Form, Field } from 'formik';
import SignupSchema from '../../../utils/inputValidScheme';
import StyledErrorMessage from '../../atom/StyledErrorMessage';

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <button>구글로 로그인</button>
        <button>카카오로 로그인</button>
        <hr />
        <Field name="email" type="email" placeholder="이메일을 입력해주세요" />
        <StyledErrorMessage />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
