import { AppError, ResponseError } from 'types/baseTypes';

const createError = (response: Response, errorsJson: ResponseError) : AppError => {
  const { statusText, status } = response;
  const errors = errorsJson.errors.map((error) => error.message);

  return { statusCode: status, statusText, errors };
};

const handleResponse = (response: Response) => response.json().then((json) => {
  if (!response.ok) {
    return Promise.reject(createError(response, json));
  }
  return Promise.resolve(json);
});

export default {
  handleResponse,
};
