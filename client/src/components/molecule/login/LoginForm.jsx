import React from 'react';
import { Formik, Form, Field } from 'formik';
import SignupSchema from '../../../utils/inputValidScheme';
import StyledErrorMessage from '../../atom/StyledErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { setSignInModal, offModal } from '../../../redux/modules/modal';
import { loginSagaActionCreator } from '../../../redux/modules/user';

export default function LoginForm() {
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.mailCheck.email);
  return (
    <Formik
      initialValues={{ email, password: '123123' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(loginSagaActionCreator(values));
          dispatch(offModal());
          // value를 가지고 서버에 /login 요청 => 정보받아서 토큰저장
          setSubmitting(false);
          // 다음 모달 뷰를 위한 dispatch(login start) or register
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="email" type="email" />
          <StyledErrorMessage />

          <Field name="password" type="password" placeholder="비밀번호" />
          <StyledErrorMessage />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
