import React from 'react';
import { Formik, Form, Field } from 'formik';
import SignupSchema from '../../../utils/inputValidScheme';
import StyledErrorMessage from '../../atom/StyledErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { setSignInModal } from '../../../redux/modules/modal';
import { checkSagaActionCreator } from '../../../redux/modules/mailCheck';
import inputValidScheme from '../../../utils/inputValidScheme';

export default function PreLoginForm() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.mailCheck.email);

  const handleSubmit = (values) => {
    dispatch(checkSagaActionCreator(values));
    setTimeout(() => {
      dispatch(setSignInModal());
    }, 600);
  };
  return (
    <Formik
      initialValues={{
        email: 'creep102@naver.com',
      }}
      validationSchema={inputValidScheme}
      onSubmit={async (values, setSubmitting) => {
        handleSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form>
        <button>구글로 로그인</button>
        <button>카카오로 로그인</button>

        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
