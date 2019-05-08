import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers';

const init = () => {
  const onPlaceNameClickHandler = () => null;

  ReactDom.render(
      <App
        places={offers}
        onClick={onPlaceNameClickHandler}
      />,
      document.querySelector(`#root`)
  );
};

init();
