import {reducer, ActionCreator} from './reducer';

describe(`Reducer works correctly: `, () => {
  it(`if there is no parameters, should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
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
    });
  });
});

describe(`Action creators works correctly: `, () => {
  it(`action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: `CHANGE_CITY`,
      payload: `Amsterdam`,
    });
  });

  it(`action creator for getting list of offers according selected city returns correct action and filtering offers correctly`, () => {
    expect(ActionCreator.getOffers(`Amsterdam`, [
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
          name: `Berlin`,
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
          name: `Berlin`,
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
          name: `Berlin`,
          coords: [52.3679, 4.9014],
        },
      },
    ])).toEqual({
      type: `GET_OFFERS`,
      payload: [{title: `Beautiful luxurious apartment at great location`,
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
        }}],
    });
  });
});
