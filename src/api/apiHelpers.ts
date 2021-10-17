import { AppError, ResponseError } from 'types/baseTypes';

const createError = (response: Response, errorsJson: ResponseError) : AppError => {
  const { statusText, status } = response;
  const errors = errorsJson.errors.map((error) => error.message);

  return { statusCode: status, statusText, errors };
};

const handleResponse = (response: Response) => response.json().then((json) => {
  if (!response.ok || json.errors) {
    return Promise.reject(createError(response, json));
  }
  return Promise.resolve(json);
});

const ERROR_CODE = {
  SERVER: /^5[0-9]{2}$/,
  REQUEST: /^4[0-9]{2}$/,
};

export default {
  ERROR_CODE,
  handleResponse,
};
