import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '../app/app';
import leafletMock from '../../mocks/leaflet-mock';

describe(`App`, () => {
  const offers = [
    {
      id: 1,
      title: `Strange place`,
      isPremium: true,
      price: 1200,
      rating: 1.5,
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
      isFavorite: false,
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
        name: `Dusseldorf`,
        location: {
          atitude: 52,
          longitude: 8,
          zoom: 11,
        },
      },
    },
  ];

  it(`renders correctly`, () => {
    const tree = renderer.create(<App
      offers={offers}
      onClick={jest.fn()}
      city={offers[0].city}
      leaflet={leafletMock}
      onCityClick={jest.fn()}
      isAuthorizationRequired={false}
      userData={{
        avatarUrl: `/path.jpg`,
      }}
      signIn={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
