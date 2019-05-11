import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const init = () => {
  const onPlaceNameClickHandler = () => {};

  ReactDom.render(
      <App
        places={offers}
        onClick={onPlaceNameClickHandler}
      />,
      document.querySelector(`#root`)
  );
};

init();
