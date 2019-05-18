const initialState = {
  city: `Amsterdam`,
  offers: [
    {
      title: `Beautiful luxurious apartment at great location`,
      isPremium: true,
      price: 120,
      rating: 93,
      bookmarked: false,
      type: `Apartment`,
      image: `img/apartment-01.jpg`,
      coords: [52.3909553943508, 4.85309666406198],
      city: {
        name: `Amsterdam`,
        coords: [52.3679, 4.9014],
      },
    },
    {
      title: `Wood and stone place`,
      isPremium: false,
      price: 80,
      rating: 80,
      bookmarked: true,
      type: `Private room`,
      image: `img/room.jpg`,
      coords: [52.369553943508, 4.85309666406198],
      city: {
        name: `Amsterdam`,
        coords: [52.3679, 4.9014],
      },
    },
    {
      title: `Canal View Prinsengracht`,
      isPremium: false,
      price: 132,
      rating: 80,
      bookmarked: false,
      type: `Apartment`,
      image: `img/apartment-02.jpg`,
      coords: [52.3909553943508, 4.929309666406198],
      city: {
        name: `Amsterdam`,
        coords: [52.3679, 4.9014],
      },
    },
    {
      title: `Nice, cozy, warm big bed apartment`,
      isPremium: true,
      price: 180,
      rating: 100,
      bookmarked: false,
      type: `Apartment`,
      image: `img/apartment-03.jpg`,
      coords: [52.3809553943508, 4.939309666406198],
      city: {
        name: `Amsterdam`,
        coords: [52.3679, 4.9014],
      },
    },
  ],
};

const getFilteredOffers = (selectedCity, places) => {
  return places.filter((it) => it.city.name === selectedCity);
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`: return Object.assign({}, state, {
      city: action.payload,
    });

    case `GET_OFFERS`: return Object.assign({}, state, {
      offers: action.payload,
    });
  }

  return state;
};

export {reducer, ActionCreator};
