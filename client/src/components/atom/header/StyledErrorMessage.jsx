import React from 'react';
import { ErrorMessage } from 'formik';
import './StyledErrorMessage.scss';

function StyledErrorMessage({ name }) {
  return (
    <div className="modal-error-message">
      <ErrorMessage name={name} />
    </div>
  );
}

export default React.memo(StyledErrorMessage);
