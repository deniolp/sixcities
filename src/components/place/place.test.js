import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import Place from '../place/place';
import {Operation} from '../../reducer/data/data';
import {Operation as OperationUser} from '../../reducer/user/user';
import NameSpace from '../../reducer/name-space';

jest.mock(`../../reducer/data/data`);
jest.mock(`../../reducer/user/user`);
Operation.addToFavorites = () => (dispatch) => dispatch(jest.fn());
Operation.deleteFromFavorites = () => (dispatch) => dispatch(jest.fn());
OperationUser.authorizeUser = () => (dispatch) => dispatch(jest.fn());

describe(`Place`, () => {
  const place = {
    id: 1,
    title: `Strange place`,
    isPremium: true,
    price: 1200,
    rating: 1.9,
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
  };

  const NAME_SPACE_DATA = NameSpace.DATA;
  const NAME_SPACE_USER = NameSpace.USER;
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  const initialState = {};
  initialState[NAME_SPACE_DATA] = {
    city: {},
    offers: [],
    reviews: [
      {
        id: 1,
        comment: `Weird place`,
        rating: 1.5,
        date: `2019-05-16T21:02:58.227Z`,
        user: {
          avatarUrl: `path.jpg`,
          id: 8,
          isPro: false,
          name: `Kurt`,
        },
      },
      {
        id: 2,
        comment: `Strange place`,
        rating: 2.5,
        date: `2019-06-16T21:02:58.227Z`,
        user: {
          avatarUrl: `path.jpg`,
          id: 9,
          isPro: false,
          name: `Kate`,
        },
      },
    ],
    isReviewSending: false,
    didReviewSent: false,
    sendError: null,
  };
  initialState[NAME_SPACE_USER] = {
    user: {},
    authError: null,
    isAuthorizationRequired: false,
  };
  const store = mockStore(initialState);

  it(`renders correctly`, () => {
    const tree = renderer.create(<BrowserRouter><Provider store={store}><Place
      place={place}
      onClickHandler={jest.fn()}
    /></Provider></BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
