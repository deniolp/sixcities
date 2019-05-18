import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '../app/app';
import leafletMock from '../../mocks/leaflet-mock';

describe(`App`, () => {
  const places = [
    {
      title: `Strange place`,
      isPremium: true,
      price: 1200,
      rating: 95,
      bookmarked: false,
      type: `Apartment`,
      image: ``,
      coords: [12, 87],
      city: {
        name: `Berlin`,
        coords: [51, 6],
      },
    },
    {
      title: `Weird place`,
      isPremium: false,
      price: 800,
      rating: 85,
      bookmarked: true,
      type: `Private room`,
      image: ``,
      coords: [13, 88],
      city: {
        name: `Berlin`,
        coords: [51, 6],
      },
    },
  ];
  const offers = [
    {
      title: `Strange place`,
      isPremium: true,
      price: 1200,
      rating: 95,
      bookmarked: false,
      type: `Apartment`,
      image: ``,
      coords: [12, 87],
      city: {
        name: `Berlin`,
        coords: [51, 6],
      },
    },
    {
      title: `Weird place`,
      isPremium: false,
      price: 800,
      rating: 85,
      bookmarked: true,
      type: `Private room`,
      image: ``,
      coords: [13, 88],
      city: {
        name: `Berlin`,
        coords: [51, 6],
      },
    },
  ];

  it(`renders correctly`, () => {
    const tree = renderer.create(<App
      places={places}
      offers={offers}
      onClick={jest.fn()}
      city={`Berlin`}
      leaflet={leafletMock}
      onCityClick={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
