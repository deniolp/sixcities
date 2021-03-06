import * as React from 'react';
import * as ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as leaflet from 'leaflet';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter} from 'react-router-dom';

import App from './components/app/app';
import {configureAPI} from './api';
import reducer from './reducer/main-reducer';
import history from './history';

const init = () => {
  const api = configureAPI(() => history.push(`/login`));
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

  ReactDom.render(<Provider store={store}>
    <BrowserRouter>
      <App
        leaflet={leaflet}
      />
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
