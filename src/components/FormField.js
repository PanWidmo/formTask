import React from 'react';
import { Field } from 'redux-form';

export const FormField = ({ label, component = 'input', type = 'text', ...reduxFieldProps }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <Field component={component} type={type} {...reduxFieldProps} />
      </div>
    </div>
  );
};
