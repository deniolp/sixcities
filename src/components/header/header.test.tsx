import * as React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';
import {BrowserRouter} from 'react-router-dom';

describe(`SignIn`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<BrowserRouter>
      <Header
        user={{}}
        isAuthorizationRequired={true}
      />
    </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
