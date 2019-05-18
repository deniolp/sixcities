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
      city: `Amsterdam`,
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
      city: `Amsterdam`,
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
      city: `Amsterdam`,
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
      city: `Amsterdam`,
    },
  ],
};

const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: `CHANGE_CITY`,
    payload: selectedCity,
  }),
  getOffers: (selectedCity, places) => {
    const sortedPlaces = places.filter((it) => {
      return it.city === selectedCity;
    });

    return {
      type: `GET_OFFERS`,
      payload: sortedPlaces,
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
