import React from 'react';
import renderer from 'react-test-renderer';

import {AddFavoritesButton} from './add-favorites-button/';

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

describe(`AddFavoritesButton`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<AddFavoritesButton
      place={place}
      addToFavorites={jest.fn()}
      deleteFromFavorites={jest.fn()}
      isAuthorizationRequired={true}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
