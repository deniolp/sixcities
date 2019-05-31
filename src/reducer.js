import api from './api';

const initialState = {
  city: {},
  offers: [],
};

const getFilteredOffers = (selectedCity, places) => {
  return places.filter((it) => it.city.name === selectedCity);
};

const getRandomCity = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const Operation = {
  loadOffers: () => (dispatch) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  }
};

const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: `CHANGE_CITY`,
    payload: selectedCity,
  }),
  getOffers: (selectedCity, places) => {
    const filteredPlaces = getFilteredOffers(selectedCity, places);

    return {
      type: `GET_OFFERS`,
      payload: filteredPlaces,
    };
  },
  loadOffers: (offers) => ({
    type: `LOAD_OFFERS`,
    payload: offers,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`: return Object.assign({}, state, {
      city: action.payload,
    });

    case `GET_OFFERS`: return Object.assign({}, state, {
      offers: action.payload,
    });

    case `LOAD_OFFERS`: return Object.assign({}, state, {
      city: action.payload[getRandomCity(1, action.payload.length)].city,
      offers: action.payload,
    });
  }
  return state;
};

export {reducer, ActionCreator, Operation};
