import React from 'react';
import renderer from 'react-test-renderer';

import {Room} from '../room/room';

const offers = [
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
    images: [],
    goods: [],
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
    images: [],
    goods: [],
    bedrooms: 2,
    maxAdults: 4,
    host: {},
    location: {
      atitude: 13,
      longitude: 88,
      zoom: 11,
    },
    city: {
      name: `Dusseldorf`,
      location: {
        atitude: 52,
        longitude: 8,
        zoom: 11,
      },
    },
  },
];

describe(`Room`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Room
      offers={offers}
      match={{
        params: {
          id: 2,
        },
      }}
      onLoadOffers={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
