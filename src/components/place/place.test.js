import React from 'react';
import renderer from 'react-test-renderer';
import Place from '../place/place';

describe(`Place`, () => {
  const place = {
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
      coords: [52, 7],
    },
  };

  it(`renders correctly`, () => {
    const tree = renderer.create(<Place
      place={place}
      onClick={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
