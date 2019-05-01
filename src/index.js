import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  ReactDom.render(
      <App />,
      document.querySelector(`#root`)
  );
};

init();
