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
    },
  ];

  it(`renders correctly`, () => {
    const tree = renderer.create(<PlaceList
      places={places}
      onClick={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
