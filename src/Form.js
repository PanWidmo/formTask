import React from 'react';
import { reduxForm } from 'redux-form';
import { FormField } from 'components/FormField';
import { DishTypeField } from 'components/DishTypeField';
import { sendFormData } from 'api/sendFormData';
import { convToNumber } from 'utils/convToNumber';
import { timeFormat } from 'utils/form/timeFormat';

const Form = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormField label="Name" name="name" placeholder="Name" />
      {/*formatowanie inputa*/}
      <FormField label="Preparation Time" name="preparationTime" placeholder="Preparation Time" normalize={timeFormat} maxLength="8" />
      <DishTypeField />
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'form',
  onSubmit: async (data) => {
    await sendFormData({
      ...data,
      noOfSlices: convToNumber(data.noOfSlices),
      diameter: convToNumber(data.diameter),
    });
  },
})(Form);
