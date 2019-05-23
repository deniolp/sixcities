import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withHighlightedItem from './with-highlighted-item';

Enzyme.configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapped = withHighlightedItem(Mock);

it(`Should change highlightedItem`, () => {
  const wrapper = shallow(<MockWrapped
    setHighlightedItem={jest.fn()}
  />);

  expect(wrapper.props().highlightedItem).toEqual(-1);

  wrapper.props().setHighlightedItem(5);
  expect(wrapper.props().highlightedItem).toEqual(5);
});
