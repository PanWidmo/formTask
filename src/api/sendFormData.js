import { post } from './index';

export const sendFormData = (data) => {
  return post({ endpoint: 'dishes', data });
};
