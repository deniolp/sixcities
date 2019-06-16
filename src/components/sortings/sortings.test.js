import React from 'react';
import renderer from 'react-test-renderer';
import {Sortings} from '../sortings/sortings';

describe(`Sortings`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Sortings
      onSortingClickHandler={jest.fn()}
      onSortingsClickHandler={jest.fn()}
      onMouseLeaveHandler={jest.fn()}
      activeSorting={1}
      opened={true}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
