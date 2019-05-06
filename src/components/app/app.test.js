import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app.jsx';

describe(`App`, () => {
  const places = [
    {
      description: `Strange place`,
      grade: `Premium`,
      price: 1200,
      ratingWidth: {
        width: `95%`
      },
      bookmarked: false,
      type: `Apartment`,
      image: ``,
    },
    {
      description: `Weird place`,
      price: 800,
      ratingWidth: {
        width: `85%`
      },
      bookmarked: true,
      type: `Private room`,
      image: ``,
    },
  ];

  it(`renders correctly`, () => {
    const tree = renderer.create(<App
      places={places}
      onClick={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
