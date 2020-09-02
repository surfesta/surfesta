import React from 'react';
import { ErrorMessage } from 'formik';
import './StyledErrorMessage.scss';

export default function StyledErrorMessage(props) {
  return (
    <div className="modal-error-message">
      <ErrorMessage {...props} />
    </div>
  );
}
