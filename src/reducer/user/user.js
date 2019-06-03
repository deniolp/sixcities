const initialState = {
  isAuthorizationRequired: true,
  user: null,
  authError: null,
};

const Operation = {
  authorizeUser: (email, password) => (dispatch, _getState, api) => {
    return api.post(`/login`, {email, password})
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.requireAuthorization(false));
          dispatch(ActionCreator.authorizeUser(response.data));
          dispatch(ActionCreator.authError(null));
        }
      })
      .catch((error) => dispatch(ActionCreator.authError(error.response.data.error)));
  }
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: `REQUIRE_AUTHORIZATION`,
    payload: status,
  }),

  authorizeUser: (user) => ({
    type: `AUTHORIZE_USER`,
    payload: user,
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

export {reducer, ActionCreator, Operation};
