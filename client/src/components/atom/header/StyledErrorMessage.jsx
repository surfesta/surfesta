import React from 'react';
import { ErrorMessage } from 'formik';

export default function StyledErrorMessage() {
  return (
    <div style={{ color: '#E41818', fontSize: '.7rem' }}>
      <ErrorMessage name="email" />
    </div>
  );
}
