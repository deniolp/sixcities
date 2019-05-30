import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import leaflet from 'leaflet';
import {compose} from 'recompose';

import App from './components/app/app';
import offers from './mocks/offers';
import {reducer} from './reducer';
import {createAPI} from './api';

const init = () => {
  const onPlaceNameClickHandler = () => {};
  const api = createAPI((...arg) => store.dispatch(...arg));
  const store = createStore(reducer, compose(applyMiddleware(thunk.withExtraArgument(api)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

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
