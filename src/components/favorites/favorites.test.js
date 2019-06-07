import React from 'react';
import renderer from 'react-test-renderer';
import Favorites from '../favorites/favorites';
import {BrowserRouter} from 'react-router-dom';

describe(`Favorites`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<BrowserRouter>
      <Favorites
      />
    </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
