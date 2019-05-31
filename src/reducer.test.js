import {reducer, ActionCreator} from './reducer';

const places = [
  {
    id: 1,
    title: `Strange place`,
    isPremium: true,
    price: 1200,
    rating: 1.8,
    isFavorite: false,
    description: ``,
    type: `Apartment`,
    previewImage: ``,
    images: [``],
    goods: [``],
    bedrooms: 2,
    maxAdults: 4,
    host: {},
    location: {
      atitude: 12,
      longitude: 87,
      zoom: 11,
    },
    city: {
      name: `Berlin`,
      location: {
        atitude: 51,
        longitude: 7,
        zoom: 11,
      },
    },
  },
  {
    id: 2,
    title: `Weird place`,
    isPremium: true,
    price: 800,
    rating: 1.5,
    isFavorite: true,
    description: ``,
    type: `Private room`,
    previewImage: ``,
    images: [``],
    goods: [``],
    bedrooms: 2,
    maxAdults: 4,
    host: {},
    location: {
      atitude: 13,
      longitude: 88,
      zoom: 11,
    },
    city: {
      name: `Amsterdam`,
      location: {
        atitude: 52,
        longitude: 8,
        zoom: 11,
      },
    },
  },
];

describe(`Reducer works correctly: `, () => {
  it(`if there is no parameters, should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: {},
      offers: [],
    });
  });
});

describe(`Action creators works correctly: `, () => {
  it(`action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`, places)).toEqual({
      type: `CHANGE_CITY`,
      payload: {
        name: `Amsterdam`,
        location: {
          atitude: 52,
          longitude: 8,
          zoom: 11,
        },
      },
    });
  });
});
