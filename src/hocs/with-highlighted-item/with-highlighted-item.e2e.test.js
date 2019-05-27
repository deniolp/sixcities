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

  wrapper.props().setHighlightedItem(`Berlin`);
  expect(wrapper.props().active).toEqual(`Berlin`);
});
