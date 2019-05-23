import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Place from '../place/place';

Enzyme.configure({adapter: new Adapter()});

const mockObj = {
  title: `Strange place`,
  isPremium: true,
  price: 1200,
  rating: 95,
  bookmarked: false,
  type: `Apartment`,
  image: ``,
  coords: [13, 88],
  city: {
    name: `Dusseldorf`,
    coords: [52, 7],
  },
};

let clickHandler;
let placeElement;
let placeDescription;
let image;
let placeObj = {};

beforeEach(() => {
  clickHandler = jest.fn();
  placeElement = shallow(
      <Place
        place={mockObj}
        onClick={clickHandler}
        onMouseEnter={() => {
          placeObj = mockObj;
        }}
        onMouseLeave={() => {
          placeObj = {};
        }}
        setHighlightedItem={jest.fn()}
        active={false}
        index={0}
      />);
  placeDescription = placeElement.find(`.place-card__name a`);
  image = placeElement.find(`.place-card__image`);
});

describe(`Before clicking`, () => {
  it(`should have the description element`, () => {
    expect(placeDescription).toHaveLength(1);
  });

  it(`clickHandler should not be called`, () => {
    expect(clickHandler).toHaveBeenCalledTimes(0);
  });
});

describe(`After clicking`, () => {
  it(`clickHandler should be called once`, () => {
    placeDescription.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});


it(`Mouse hover on image will call onMouseEnter event and the right object have to be used`, () => {
  image.simulate(`mouseenter`);

  expect(placeObj).toEqual(mockObj);
});
