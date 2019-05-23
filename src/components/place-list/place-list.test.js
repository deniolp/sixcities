import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from '../place-list/place-list';

describe(`PlaceList`, () => {
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
      price: 80,
      rating: 80,
      bookmarked: true,
      type: `Room`,
      image: ``,
      coords: [13, 88],
      city: {
        name: `Dusseldorf`,
        coords: [52, 7],
      },
    },
  ];

  it(`renders correctly`, () => {
    const tree = renderer.create(<PlaceList
      offers={places}
      onClick={jest.fn()}
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
