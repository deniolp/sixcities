import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../map/map';

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
    const tree = renderer.create(<Map
      places={places}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
