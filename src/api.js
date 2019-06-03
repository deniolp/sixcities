import axios from 'axios';

import {UserActionCreator} from './reducer/user/user';

export const configureAPI = ((dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.status === 400) {
      dispatch(UserActionCreator.authError(error.response.data.error));
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
});
