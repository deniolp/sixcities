import React from 'react';
import renderer from 'react-test-renderer';

import {SendReviewForm} from './send-review-form/';

describe(`SendReviewForm`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<SendReviewForm
      id={1}
      submitForm={jest.fn()}
      updateForm={jest.fn()}
      onChangeTextareaHandler={jest.fn()}
      onClickRadioHandler={jest.fn()}
      isValidated={true}
      isReviewSending={false}
      didReviewSent={false}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});