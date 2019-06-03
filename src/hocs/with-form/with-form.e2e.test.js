import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withForm from './with-form';

Enzyme.configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapped = withForm(Mock);
const mockEmailInput = {
  target: {
    value: `w@ya.ru`,
  }
};
const mockPassordInput = {
  target: {
    value: `yt`,
  }
};

it(`Should change properties in state`, () => {
  const wrapper = shallow(<MockWrapped
    onChangeNameInput={jest.fn()}
    onChangePasswordInput={jest.fn()}
  />);

  expect(wrapper.props().formData).toEqual({});

  wrapper.props().onChangeEmailInput(mockEmailInput);
  expect(wrapper.props().formData).toEqual({
    email: `w@ya.ru`,
  });

  wrapper.props().onChangePasswordInput(mockPassordInput);
  expect(wrapper.props().formData).toEqual({
    email: `w@ya.ru`,
    password: `yt`,
  });
});
