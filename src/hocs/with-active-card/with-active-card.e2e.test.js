import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveCard from './with-active-card';

Enzyme.configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapped = withActiveCard(Mock);

it(`Should change activeCard`, () => {
  const wrapper = shallow(<MockWrapped
    onMouseEnter={jest.fn()}
  />);

  expect(wrapper.state().activeCard).toEqual(null);
  wrapper.props().onMouseEnter(7);
  expect(wrapper.state().activeCard).toEqual(7);
});
