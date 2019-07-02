import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MainPageEmpty from './main-page-empty';

describe(`MainPageEmpty`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<MainPageEmpty
      city={{
        name: `Berlin, gelibte`,
        location: {
          latitude: 51,
          longitude: 7,
          zoom: 11,
        },
      }}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
