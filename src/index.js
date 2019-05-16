import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import leaflet from 'leaflet';

const init = () => {
  const onPlaceNameClickHandler = () => {};

  ReactDom.render(
      <App
        places={offers}
        onClick={onPlaceNameClickHandler}
        leaflet={leaflet}
      />,
      document.querySelector(`#root`)
  );
};

init();
