import snakecaseKeys from 'snakecase-keys';

const baseUrl = 'https://frosty-wood-6558.getsandbox.com:443/';

export const createfetchDataFn =
  (method) =>
  async ({ endpoint, data }) => {
    const res = await fetch(baseUrl + endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(snakecaseKeys(data)),
    });

    return res.json();
  };

export const post = createfetchDataFn('POST');
export const put = createfetchDataFn('PUT');
export const patch = createfetchDataFn('PATCH');
export const get = async (endpoint) => {
  const res = await fetch(baseUrl + endpoint);

  return res.json();
};
