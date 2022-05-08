import React from 'react';
import { FormField } from 'components/FormField';
import { formValueSelector } from 'redux-form';
import { useSelector } from 'react-redux';
import { DISH_TYPES } from 'constants';

const formValSelector = formValueSelector('form');

export const DishTypeField = () => {
  const currentType = useSelector((state) => formValSelector(state, 'type'));

  const renderTypeField = () => {
    switch (currentType) {
      case DISH_TYPES.PIZZA:
        return (
          <>
            <FormField label="Number of slices" type="number" name="noOfSlices" min="1" />
            <FormField label="Diameter" type="number" name="diameter" placeholder="Diameter" min="1" />
          </>
        );
      case DISH_TYPES.SOUP:
        return <FormField label="Spiciness scale" type="range" name="spicinessScale" min="1" max="10" />;
      case DISH_TYPES.SANDWICH:
        return <FormField label="Slices of bread" type="number" name="slicesOfBread" min="1" />;
      default:
        return null;
    }
  };

  return (
    <>
      <FormField label="Type" name="type" component="select">
        <option value={DISH_TYPES.PIZZA}>Pizza</option>
        <option value={DISH_TYPES.SOUP}>Soup</option>
        <option value={DISH_TYPES.SANDWICH}>Sandwich</option>
      </FormField>
      {renderTypeField()}
    </>
  );
};
