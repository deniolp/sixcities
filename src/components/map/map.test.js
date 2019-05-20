import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../map/map';
import leafletMock from '../../mocks/leaflet-mock';

describe(`Map`, () => {
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

  it(`renders correctly`, () => {
    const tree = renderer.create(<Map
      offers={places}
      coords={places[0].city.coords}
      leaflet={leafletMock}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});