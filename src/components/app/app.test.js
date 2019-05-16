import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app';
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
    },
  ];

  it(`renders correctly`, () => {
    const tree = renderer.create(<App
      places={places}
      onClick={jest.fn()}
      leaflet={leafletMock}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
