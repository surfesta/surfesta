import React from 'react';
import { Formik, Form, Field } from 'formik';
import StyledErrorMessage from '../../atom/StyledErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import UserService from '../../../services/UserService';
import { setSignInModal } from '../../../redux/modules/modal';

export default function RegisterForm() {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      // validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const checked = UserService.checkEmail(values.email);
          if (!checked) return;
          else dispatch(setSignInModal());
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
          <Field name="username" type="username" placeholder="이름" />
          <StyledErrorMessage />
          <Field
            name="phone_number"
            type="phone_number"
            placeholder="전화번호 (선택)"
          />
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
