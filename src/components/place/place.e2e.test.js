import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Place from '../place/place.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockObj = {
  title: `Strange place`,
  isPremium: true,
  price: 1200,
  rating: 95,
  bookmarked: false,
  type: `Apartment`,
  image: ``,
};

let clickHandler;
let placeElement;
let placeDescription;

beforeEach(() => {
  clickHandler = jest.fn();
  placeElement = shallow(
      <Place
        place={mockObj}
        onClick={clickHandler}
      />);
  placeDescription = placeElement.find(`.place-card__name a`);
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
