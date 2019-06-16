import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import leaflet from 'leaflet';
import {compose} from 'recompose';
import {BrowserRouter} from 'react-router-dom';

import App from './components/app/app';
import {configureAPI} from './api';
import reducer from './reducer/main-reducer';
import {Operation} from './reducer/data/data';
import history from './history';

const init = () => {
  const api = configureAPI(() => history.push(`/login`));
  const store = createStore(reducer, compose(applyMiddleware(thunk.withExtraArgument(api)), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a));

  store.dispatch(Operation.loadOffers());

  ReactDom.render(<Provider store={store}>
    <BrowserRouter basename="/505149-six-cities-1/17/">
      <App
        leaflet={leaflet}
      />
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
