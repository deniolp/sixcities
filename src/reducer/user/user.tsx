import {ActionCreator, normalizeKeys, Operation as DataOperation} from '../data/data';

enum TYPE {
  REQUIRE_AUTHORIZATION = 'REQUIRE_AUTHORIZATION',
  AUTHORIZE_USER = 'AUTHORIZE_USER',
  LOG_OUT = 'LOG_OUT',
  AUTH_ERROR = 'AUTH_ERROR',
  LOAD_FAVORITES = 'LOAD_FAVORITES',
}

interface ActionType {
  type: TYPE,
  payload: any
}

const initialState = {
  isAuthorizationRequired: true,
  user: {},
  authError: null,
  favorites: null,
};

const Operation = {
  logIn: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        const email = response.data.email;
        const password = null;
        api.post(`/login`, {email, password})
        .then((resp) => {
          if (resp.data) {
            dispatch(UserActionCreator.requireAuthorization(false));
            dispatch(UserActionCreator.authorizeUser(resp.data));
            dispatch(UserActionCreator.authError(null));
            dispatch(DataOperation.loadOffers());
          }
        })
        .catch((error) => {
          if (error.response.status) {
            if (error.response.status === 400) {
              dispatch(UserActionCreator.authError(error.response.data.error));
              throw error;
            }
          }
        });
      })
      .catch((error) => {
        if (error.response.status === 403 || error.response.status === 401) {
          dispatch(UserActionCreator.logOut());
        }
      });
  },

  authorizeUser: (email, password) => (dispatch, _getState, api) => {
    return api.post(`/login`, {email, password})
      .then((response) => {
        if (response.data) {
          dispatch(UserActionCreator.requireAuthorization(false));
          dispatch(UserActionCreator.authorizeUser(response.data));
          dispatch(UserActionCreator.authError(null));
          dispatch(DataOperation.loadOffers());
        }
      })
      .catch((error) => {
        if (error.response.status) {
          if (error.response.status === 400) {
            dispatch(UserActionCreator.authError(error.response.data.error));
          }
        }
      });
  },

  loadFavorites: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const preparedData = response.data.map((item) => normalizeKeys(item));
        dispatch(UserActionCreator.loadFavorites(preparedData));
      });
  },

  addToFavorites: (id) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${id}/1`)
      .then((response) => {
        const preparedData = normalizeKeys(response.data);
        dispatch(ActionCreator.addToFavorites(preparedData));
      })
      .catch((_error) => {});
  },

  deleteFromFavorites: (id) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${id}/0`)
      .then((response) => {
        const preparedData = normalizeKeys(response.data);
        dispatch(ActionCreator.deleteFromFavorites(preparedData));
      })
      .catch((_error) => {});
  },
};

const UserActionCreator = {
  requireAuthorization: (status) => ({
    type: TYPE.REQUIRE_AUTHORIZATION,
    payload: status,
  }),

  authorizeUser: (user) => ({
    type: TYPE.AUTHORIZE_USER,
    payload: normalizeKeys(user),
  }),

  logOut: () => ({
    type: TYPE.LOG_OUT,
  }),

  authError: (error) => ({
    type: TYPE.AUTH_ERROR,
    payload: error,
  }),

  loadFavorites: (favorites) => ({
    type: TYPE.LOAD_FAVORITES,
    payload: favorites,
  }),
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case TYPE.REQUIRE_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload,
    });

    case TYPE.AUTHORIZE_USER: return Object.assign({}, state, {
      user: action.payload,
    });

    case TYPE.LOG_OUT: return Object.assign({}, state, {
      user: {},
      isAuthorizationRequired: true,
    });

    case TYPE.AUTH_ERROR: return Object.assign({}, state, {
      authError: action.payload,
    });

    case TYPE.LOAD_FAVORITES: return Object.assign({}, state, {
      favorites: action.payload,
    });
  }

  return state;
};

export {reducer, UserActionCreator, Operation};
