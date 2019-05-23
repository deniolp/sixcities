import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from '../main-page/main-page';
import leafletMock from '../../mocks/leaflet-mock';

describe(`MainPage`, () => {
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
        name: `Dusseldorf`,
        coords: [52, 7],
      },
    },
  ];

  const cities = [`Berlin`, `Dusseldorf`];

  it(`renders correctly`, () => {
    const tree = renderer.create(<MainPage
      offers={places}
      cities={cities}
      city={`Berlin`}
      onClick={jest.fn()}
      onCityClick={jest.fn()}
      leaflet={leafletMock}
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
