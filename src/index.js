import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app';
import offers from './mocks/offers';
import leaflet from 'leaflet';
import {reducer} from './reducer';

const init = () => {
  const onPlaceNameClickHandler = () => {};

  const store = createStore(reducer);

  ReactDom.render(<Provider store={store}>
    <App
      places={offers}
      onClick={onPlaceNameClickHandler}
      leaflet={leaflet}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
