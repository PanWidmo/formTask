import { configureStore } from '@reduxjs/toolkit';
import { DISH_TYPES } from 'constants';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});

export const store = configureStore({
  preloadedState: {
    form: {
      form: {
        values: {
          type: DISH_TYPES.PIZZA,
        },
      },
    },
  },
  reducer,
});
