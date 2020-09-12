import React from 'react';
import { ErrorMessage } from 'formik';
import './StyledErrorMessage.scss';

export default function StyledErrorMessage({ name, errors, touched }) {
  return (
    <div className="modal-error-message">
      <ErrorMessage name={name} />
    </div>
  );
}
