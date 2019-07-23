import MockAdapter from 'axios-mock-adapter';

import {reducer, ActionCreator, Operation} from './data';
import {configureAPI} from '../../api';

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
    host: {
      id: 6,
      name: `string`,
      isPro: false,
      avatarUrl: `string`,
    },
    location: {
      latitude: 12,
      longitude: 87,
      zoom: 11,
    },
    city: {
      name: `Berlin`,
      location: {
        latitude: 51,
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
    host: {
      id: 7,
      name: `string2`,
      isPro: false,
      avatarUrl: `string2`,
    },
    location: {
      latitude: 13,
      longitude: 88,
      zoom: 11,
    },
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52,
        longitude: 8,
        zoom: 11,
      },
    },
  },
];

describe(`Reducer works correctly: `, () => {
  it(`if there is no parameters, should return initial state`, () => {
    expect(reducer(undefined, {type: null, payload: null})).toEqual({
      city: {},
      offers: [],
      reviews: [],
      isReviewSending: false,
      didReviewSent: false,
      sendError: null,
    });
  });

  it(`should make correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operation.loadOffers();

    apiMock.onGet(`/hotels`).reply(200, [{a: true}]);

    return offersLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_OFFERS`,
          payload: [{a: true}],
        });
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
          latitude: 52,
          longitude: 8,
          zoom: 11,
        },
      },
    });
  });
});
