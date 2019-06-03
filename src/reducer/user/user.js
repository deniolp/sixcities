import {normalizeKeys} from '../data/data';

const initialState = {
  isAuthorizationRequired: false,
  user: {},
  authError: null,
};

const Operation = {
  authorizeUser: (email, password) => (dispatch, _getState, api) => {
    return api.post(`/login`, {email, password})
      .then((response) => {
        if (response.data) {
          dispatch(UserActionCreator.requireAuthorization(false));
          dispatch(UserActionCreator.authorizeUser(response.data));
          dispatch(UserActionCreator.authError(null));
        }
      })
      .catch((error) => dispatch(UserActionCreator.authError(error.response.data.error)));
  }
};

const UserActionCreator = {
  requireAuthorization: (status) => ({
    type: `REQUIRE_AUTHORIZATION`,
    payload: status,
  }),

  authorizeUser: (user) => ({
    type: `AUTHORIZE_USER`,
    payload: normalizeKeys(user),
  }),

  authError: (error) => ({
    type: `AUTH_ERROR`,
    payload: error,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `REQUIRE_AUTHORIZATION`: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload,
    });

    case `AUTHORIZE_USER`: return Object.assign({}, state, {
      user: action.payload,
    });

    case `AUTH_ERROR`: return Object.assign({}, state, {
      authError: action.payload,
    });
  }

  return state;
};

export {reducer, UserActionCreator, Operation};
