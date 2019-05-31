import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import leaflet from 'leaflet';
import {compose} from 'recompose';

import App from './components/app/app';
import {reducer, Operation} from './reducer';

const init = () => {
  const onPlaceNameClickHandler = () => {};
  const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

  store.dispatch(Operation.loadOffers());

  ReactDom.render(<Provider store={store}>
    <App
      onClick={onPlaceNameClickHandler}
      leaflet={leaflet}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
