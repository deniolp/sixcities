import React from 'react';
import renderer from 'react-test-renderer';
import Place from '../place/place.jsx';

describe(`Place`, () => {
  const place = {
    description: `Strange place`,
    grade: `Premium`,
    price: 1200,
    ratingWidth: {
      width: `95%`
    },
    bookmarked: false,
    type: `Apartment`,
    image: ``,
  };

  it(`renders correctly`, () => {
    const tree = renderer.create(<Place
      place={place}
      onClick={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
