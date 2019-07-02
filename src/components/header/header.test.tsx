import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Header from './header';
import {BrowserRouter} from 'react-router-dom';

describe(`SignIn`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<BrowserRouter>
      <Header
        user={{
          id: 2,
          email: `y@ya.ru`,
          name: `Alice`,
          avatarUrl: `path`,
          isPro: false
        }}
        isAuthorizationRequired={true}
      />
    </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
