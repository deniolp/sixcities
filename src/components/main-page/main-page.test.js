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
    leafletMock();
    const tree = renderer.create(<MainPage
      places={places}
      onClick={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
